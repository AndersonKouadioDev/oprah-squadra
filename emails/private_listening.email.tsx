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
  lastname: string;
  firstname: string;
  email: string;
  phone: string;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "";
const enterpriseEmail = process.env.NEXT_PUBLIC_ENTERPRISE_EMAIL || "";
const enterprisePhone1 = process.env.NEXT_PUBLIC_ENTERPRISE_PHONE_1 || "";
const enterprisePhone2 = process.env.NEXT_PUBLIC_ENTERPRISE_PHONE_2 || "";

export const ConcertEmail = ({
  lastname,
  firstname,
  email,
  phone,
}: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Votre réservation pour l&apos;écoute privée de l&apos;EP de INCENDIE
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={bannerSection}>
            <p style={bannerText}>
              Soumis par {firstname} {lastname}
            </p>
            <Heading style={bannerHeading}>Écoute privée - INCENDIE</Heading>
          </Section>

          <Section style={detailsSection}>
            <Text style={infoLabel}>Nom</Text>
            <Text style={infoValue}>{lastname}</Text>

            <Text style={infoLabel}>Prénom</Text>
            <Text style={infoValue}>{firstname}</Text>

            <Text style={infoLabel}>Email</Text>
            <Text style={infoValue}>{email}</Text>

            <Text style={infoLabel}>Téléphone</Text>
            <Text style={infoValue}>{phone}</Text>
          </Section>

          <Section style={footer}>
            <Text>
              <Link
                href={`mailto:${enterpriseEmail}`}
                style={{ color: "#ff0000" }}
              >
                {enterpriseEmail}
              </Link>
              <br />
              <Link
                href={`tel:${enterprisePhone1}`}
                style={{ color: "#ff0000" }}
              >
                {enterprisePhone1}
              </Link>
              <br />
              <Link
                href={`tel:${enterprisePhone2}`}
                style={{ color: "#ff0000" }}
              >
                {enterprisePhone2}
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConcertEmail;

const main = {
  backgroundColor: "#1a1a1a",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  color: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const bannerSection = {
  textAlign: "center" as const,
  backgroundColor: "#ff0000",
  padding: "20px",
  borderRadius: "8px 8px 0 0",
};

const bannerImage = {
  width: "100%",
  borderRadius: "8px 8px 0 0",
};

const bannerHeading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "16px 0",
  textAlign: "center" as const,
};

const bannerText = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "16px 0",
  textAlign: "center" as const,
};

const detailsSection = {
  backgroundColor: "#ffffff",
  color: "#1a1a1a",
  borderRadius: "0 0 8px 8px",
  padding: "20px",
  textAlign: "left" as const,
};

const infoLabel = {
  color: "#ff0000",
  fontSize: "14px",
  fontWeight: "bold" as const,
  marginBottom: "4px",
};

const infoValue = {
  color: "#333",
  fontSize: "16px",
  margin: "0 0 16px",
};

const footer = {
  borderTop: "1px solid #ffcccc",
  marginTop: "32px",
  paddingTop: "32px",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#666",
  fontSize: "14px",
  lineHeight: "1.5",
};
