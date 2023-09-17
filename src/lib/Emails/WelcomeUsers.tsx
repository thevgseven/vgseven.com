// Email Template for VGSEVEN UPDATES Subscribers..

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

export default function WelcomeUsers({
  UserName,
  UserEmail,
}: {
  UserName: string;
  UserEmail: string;
}) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for Subscribing VGSEVEN UPDATES!!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Thank You {UserName},</Text>
          <Text style={paragraph}>
            Welcome to VGSEVEN.COM, Thanks {UserName} for Subscribing VGSEVEN
            UPDATES. Now You will receive every new update of VGSEVEN directly
            in your Inbox.
          </Text>
          <Text>While you can check existing updates from VGSEVEN: </Text>
          <Section style={btnContainer}>
            <Button
              pX={10}
              pY={10}
              style={button}
              href="https://vgseven.com/updates"
            >
              VGSEVEN UPDATES
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
            This Email is sent to {UserEmail}, {UserEmail} subscribed to VGSEVEN
            UPDATES.
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
  backgroundColor: "#6f46da",
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
