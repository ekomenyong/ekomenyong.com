import * as React from "react";

export interface ContactEmailTemplateProps {
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

    <p>Message: {message}</p>
  </div>
);
