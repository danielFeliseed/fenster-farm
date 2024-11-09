
import mailjet from 'node-mailjet';
import { NextResponse } from 'next/server';

const mailjetClient = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const request = {
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: 'Fenster Farm Contact'
          },
          To: [
            {
              Email: process.env.MAILJET_RECIPIENT_EMAIL,
              Name: 'Fenster Farm'
            },
          ],
          Subject: `New Contact Form Submission: ${subject}`,
          TextPart: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
                      `,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong><br/>${message}</p>
                      `,
          ReplyTo: {
            Email: email,
            Name: name,
          },
        },
      ],
    };

    await mailjetClient.post('send', { version: 'v3.1' }).request(request);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Mailjet Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
