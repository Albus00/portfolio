import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const resend = new Resend(RESEND_KEY);

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return json({ error: 'All fields are required' }, { status: 400 });
    }

    const response = await resend.emails.send({
      from: 'webpage@kjellbergalbin.se', // Use a verified sender domain
      to: 'albin.kjellberg2000@gmail.com',   // Your receiving email
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    });

    return json({ success: true, response });
  } catch (error) {
    return json({ error: 'Failed to send email' }, { status: 500 });
  }
}
