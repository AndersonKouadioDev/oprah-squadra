"use server";

import ContactUsEmail from "@/emails/contact_us.email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function ContactUs({
  name,
  email,
  phone,
  comments,
  services,
}: {
  name: string;
  email: string;
  phone: string;
  comments: string;
  services: string[];
}) {
  try {
    // Envoi de l'e-mail de contact à l'agence
    const { data: contactData, error: contactError } = await resend.emails.send(
      {
        from: `Contact Form <${process.env.RESEND_FROM_EMAIL as string}>`,
        to: process.env.RESEND_TO_EMAIL as string,
        subject: `Nouvelle demande de contact de ${name}`,
        react: ContactUsEmail({
          name,
          email,
          phone,
          comments,
          services,
        }),
      }
    );

    if (contactError) {
      return { success: false, error: contactError.message };
    }

    return { success: true, data: { contactData } };
  } catch {
    return {
      success: false,
      error: "Une erreur s'est produite lors de l'envoi des e-mails",
    };
  }
}
