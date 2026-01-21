import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    const emailContent = `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
---------
${message}

---
Sent from ADUDA NATURAL SERVICE contact form
    `.trim()

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'ADUDA Contact <onboarding@resend.dev>',
        to: 'ajskrook@gmail.com',
        replyTo: email,
        subject: `Contact: ${subject} - ADUDA NATURAL SERVICE`,
        text: emailContent,
      })
    }

    return Response.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
