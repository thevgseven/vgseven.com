// Email template for Contacted Users...

import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export default function HelloUsers({
  UserName,
  UserEmail,
  UserMessage,
}: {
  UserName: string;
  UserEmail: string;
  UserMessage: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Hearing Back from VGSEVEN!!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Dear {UserName},</Text>
          <Text style={paragraph}>
            Welcome to VGSEVEN.COM, Thanks for contacting us. You have message
            us following
          </Text>
          <Section>
            <Text>Message from {UserName}</Text>
            <Text>Mailed by {UserEmail}</Text>
            <Text>
              Message : <br />
              {UserMessage}
            </Text>
          </Section>
          <Text>
            We will Reach you as soon as possible, stay tuned and stay happy.
            Thank you {UserName}.
          </Text>
          <Section style={btnContainer}>
            <Button pX={10} pY={10} style={button} href="https://vgseven.com/">
              VISIT VGSEVEN.COM
            </Button>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />
            Team Seven
          </Text>
          <Section>
            <Text>
              For more information and updates stay tuned and connected through
              social media:{" "}
            </Text>
            <Button style={socialButton} href="https://twitter.com/VGSEVN">
              Twitter
            </Button>
            <Button style={socialButton} href="https://instagram.com/vgsevn">
              Instagram
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This Email is sent to {UserEmail}, {UserEmail} contacted VGSEVEN
            through contact form.
          </Text>
          <Text style={footer}>Shirdi - 423109, Maharashtra, India</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontFamily: '"Poppins", sans-serif',
  borderRadius: "10px",
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#33c57d",
  borderRadius: "7px",
  color: "#000",
  fontSize: "12px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  fontWeight: "600",
  letterSpacing: "2px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const socialButton = {
  color: "#ffffff",
  fontSize: "12px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  margin: "0 10px 0 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
