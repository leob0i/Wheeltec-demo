import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = (formData.get("name") as string | null)?.trim()
    const email = (formData.get("email") as string | null)?.trim()
    const phone = (formData.get("phone") as string | null)?.trim()
    const message = (formData.get("message") as string | null)?.trim()
    const service = (formData.get("service") as string | null)?.trim()
    const gotcha = formData.get("_gotcha") as string | null

    // Honeypot — hiljainen "ok" boteille
    if (gotcha) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Täytä kaikki pakolliset kentät." },
        { status: 400 }
      )
    }

    // Kerää tiedostoliitteet
    const attachments: { filename: string; content: Buffer }[] = []
    const fileEntries = formData.getAll("file")
    for (const entry of fileEntries) {
      if (entry instanceof File && entry.size > 0) {
        const buffer = Buffer.from(await entry.arrayBuffer())
        attachments.push({ filename: entry.name, content: buffer })
      }
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    })

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : null
    const safeMessage = escapeHtml(message)
    const safeService = service ? escapeHtml(service) : null

    const html = `
<div style="font-family:monospace;max-width:600px;margin:0 auto;color:#1a1a1a;">
  <h2 style="font-size:18px;border-bottom:2px solid #00F5C8;padding-bottom:8px;margin-bottom:20px;">
    Uusi yhteydenotto${safeService ? ` – ${safeService}` : " – Wheeltec"}
  </h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <tr>
      <td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;width:160px;color:#555;">Nimi</td>
      <td style="padding:8px 0;">${safeName}</td>
    </tr>
    <tr>
      <td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;color:#555;">Sähköposti</td>
      <td style="padding:8px 0;">${safeEmail}</td>
    </tr>
    ${safePhone ? `<tr>
      <td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;color:#555;">Puhelinnumero</td>
      <td style="padding:8px 0;">${safePhone}</td>
    </tr>` : ""}
    ${safeService ? `<tr>
      <td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;color:#555;">Palvelu</td>
      <td style="padding:8px 0;">${safeService}</td>
    </tr>` : ""}
    <tr>
      <td style="padding:8px 16px 8px 0;font-weight:bold;vertical-align:top;color:#555;">Viesti</td>
      <td style="padding:8px 0;white-space:pre-wrap;">${safeMessage}</td>
    </tr>
  </table>
  ${attachments.length > 0 ? `<p style="margin-top:20px;font-size:12px;color:#888;">📎 ${attachments.length} liite${attachments.length > 1 ? "ttä" : ""} mukana</p>` : ""}
</div>`

    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Uusi yhteydenotto – ${service ?? "Wheeltec"}`,
      html,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[contact/route] Sähköpostin lähetys epäonnistui:", err)
    return NextResponse.json(
      { error: "Viestin lähetys epäonnistui. Yritä uudelleen myöhemmin." },
      { status: 500 }
    )
  }
}
