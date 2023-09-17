import WelcomeUsers from "@/lib/Emails/WelcomeUsers";
import { NextResponse } from "next/server";
import resend from "@/lib/Config/Resend/Resend";

export async function POST(request: Request) {
  const { name, email } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "VGSEVEN <update@vgseven.com>",
      to: [email],
      subject: "Thanks for Subscribing VGSEVEN UPDATES.",
      react: WelcomeUsers({ UserEmail: email, UserName: name }),
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
