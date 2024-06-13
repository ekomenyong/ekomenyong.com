import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";
import { z } from "zod";

import { ContactEmailTemplate } from "~/components/global/contact-email";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const sendRouteSchema = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(10),
  });

  const { fullName, email, message } = await req.json().then((body) => sendRouteSchema.parse(body));

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL_ADDRESS!,
      to: [process.env.TO_EMAIL_ADDRESS!],
      subject: `Message from ${fullName}`,
      html: "",
      react: ContactEmailTemplate({ fullName, email, message }),
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
