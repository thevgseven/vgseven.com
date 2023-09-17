import HelloUsers from "@/lib/Emails/HelloUsers";
import { NextResponse } from "next/server";
import resend from "@/lib/Config/Resend/Resend";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "VGSEVEN <contact@vgseven.com>",
      to: [email],
      subject: "Thanks for Contacting..",
      react: HelloUsers({
        UserEmail: email,
        UserName: name,
        UserMessage: message,
      }),
    });

    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
