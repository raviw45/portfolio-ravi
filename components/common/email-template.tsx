import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  subject: string;
  description: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  subject,
  description,
}) => (
  <div
    style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "12px",
      maxWidth: "600px",
      margin: "0 auto",
      color: "#333",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ color: "#4f46e5", marginBottom: "10px" }}>
      📬 New Message from Your Portfolio!
    </h2>

    <p style={{ marginBottom: "20px" }}>
      <strong>{fullName}</strong> has sent you a message through your portfolio
      website. Here&apos;s what they wrote:
    </p>

    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        marginBottom: "20px",
      }}
    >
      <h4 style={{ color: "#6366f1", marginBottom: "8px" }}>
        Subject: {subject}
      </h4>
      <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>{description}</p>
    </div>

    <p style={{ fontSize: "14px", color: "#666" }}>
      You can reply directly to this sender by checking your connected email.
      <br />
      <br />
      ✉️ Portfolio Contact System
    </p>
  </div>
);
