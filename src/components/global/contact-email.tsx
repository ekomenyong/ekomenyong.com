import * as React from "react";

interface ContactEmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h1>Hi, Ekom!</h1>
    <p>
      You have a new message from {fullName} ({email})!
    </p>

    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);
