import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
  phone: string;
  comments: string;
  services: string[];
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL
  ? process.env.NEXT_PUBLIC_APP_URL
  : "";

export const ContactUsEmail = ({
  name,
  email,
  phone,
  comments,
  services,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de contact de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/assets/img/logo.png`}
            width="200"
            alt="Logo"
            style={logo}
          />

          <Heading style={heading}>Nouvelle demande de contact</Heading>

          <Section style={infoBlock}>
            <Text style={infoLabel}>Nom</Text>
            <Text style={infoValue}>{name}</Text>

            <Text style={infoLabel}>Email</Text>
            <Text style={infoValue}>{email}</Text>

            <Text style={infoLabel}>Téléphone</Text>
            <Text style={infoValue}>{phone}</Text>

            <Text style={infoLabel}>Services d&apos;intérêt</Text>
            <ul style={servicesList}>
              {services.map((service, index) => (
                <li key={index} style={infoValue}>
                  {service}
                </li>
              ))}
            </ul>

            <Text style={infoLabel}>Commentaires</Text>
            <Text style={infoValue}>{comments}</Text>
          </Section>

          <Section style={footer}>
            <Text style={{ ...paragraph, textAlign: "center", color: "#666" }}>
              AIETCH-CI
              <br />
              Abidjan - Cocody Mermoz en Face de FIN&apos;L
              <br />
              <Link
                href="mailto:info@aitechgroupe.com"
                style={{ color: "#478eef" }}
              >
                info@aitechgroupe.com
              </Link>
              <br />
              <Link href="tel:+2252722540053" style={{ color: "#478eef" }}>
                +225 27 22 54 00 53
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactUsEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
  width: "150px",
};

const heading = {
  color: "#478eef",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "40px 0 20px",
};

const paragraph = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "16px 0",
};

const infoBlock = {
  background: "#f9f9f9",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "24px",
};

const infoLabel = {
  color: "#666",
  fontSize: "14px",
  marginBottom: "4px",
};

const infoValue = {
  color: "#333",
  fontSize: "16px",
  marginTop: "0",
};

const servicesList = {
  paddingLeft: "20px",
  margin: "8px 0",
};

const footer = {
  borderTop: "1px solid #dddddd",
  marginTop: "32px",
  paddingTop: "32px",
};
