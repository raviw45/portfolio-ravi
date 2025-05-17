import { EmailTemplate } from "@/components/common/email-template";
import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, subject, description } = body;
    const emailHTML = createElement(EmailTemplate, {
      fullName,
      subject,
      description,
    });

    const { data, error } = await resend.emails.send({
      from: "Portfolio <portfolio@ravikantwaghmare.info>",
      to: ["ravikantwaghmare82@gmail.com"],
      subject: subject || "New Message from Portfolio",
      react: emailHTML,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
