import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_SECRET
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const request = {
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: 'Fenster Farm Contact',
          },
          To: [
            {
              Email: process.env.MAILJET_RECIPIENT_EMAIL,
              Name: 'Fenster Farm',
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

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Mailjet Error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
