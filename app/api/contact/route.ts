import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const { firstName, lastName, email, phone } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    await transporter.sendMail({
      from: `"Aussie CA Website" <${process.env.EMAIL_USER}>`,
      to: "theaussieca@gmail.com",
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Inquiry</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}