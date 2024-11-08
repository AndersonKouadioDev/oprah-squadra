"use server";

import PrivateListeningEmail from "@/emails/private_listening.email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function PrivateListening({
  lastname,
  firstname,
  email,
  phone,
}: {
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}) {
  try {
    // Envoi de l'e-mail de contact à l'agence
    const { data: contactData, error: contactError } = await resend.emails.send(
      {
        from: `Contact Form <${process.env.RESEND_FROM_EMAIL as string}>`,
        to: process.env.RESEND_TO_EMAIL as string,
        subject: `Nouvelle demande d'écoute privée de ${firstname} ${lastname}`,
        react: PrivateListeningEmail({
          lastname,
          firstname,
          email,
          phone,
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
