import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";
import { z } from "zod";

import { ContactEmailTemplate } from "~/components/global/contact-email";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formSchema = z.object({
    fullName: z.string().min(1, { message: "Your name is required." }).max(50),
    email: z.string().email(),
    message: z.string().min(10, { message: "You are required to write a message." }).max(3000),
  });
  const { fullName, email, message } = await req.json().then((body) => formSchema.parse(body));

  try {
    const { data, error } = await resend.emails.send({
      from: `Ekom - Portfolio <contact@mail.ekomenyong.com>`,
      to: ["hello@ekomenyong.com"],
      subject: `Message from ${fullName}`,
      html: "",
      react: ContactEmailTemplate({ fullName, email, message }), //using our custom react component to render email content/body
    });

    if (error) {
      return NextResponse.json({ message: "Email sending failed", error }, { status: 400 });
    }

    return NextResponse.json({ message: "Email sent successfully", data }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
