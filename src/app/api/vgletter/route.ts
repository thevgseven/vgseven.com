import LetterUsers from "@/lib/Emails/LetterUsers";
import { NextResponse } from "next/server";
import resend from "@/lib/Config/Resend/Resend";

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const data = await resend.emails.send({
      from: "VGSEVEN <vgletter@vgseven.com>",
      to: [email],
      subject: "Thanks for Joining VGLETTER !!",
      react: LetterUsers({ UserEmail: email }),
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
