import React from "react";

import { Heading } from "~/components/atoms/heading";
import Container from "~/components/global/container";
import { ContactForm } from "~/components/pages/contact/contact-form";

function ContactPage() {
  return (
    <Container className="flex flex-col items-center justify-center py-20">
      <div className="mx-auto max-w-xl pb-8 text-center">
        <Heading level={1}>Let&apos;s connect!</Heading>
        <p>Want to work together or have a chat? Please fill out the form below!</p>
      </div>
      <ContactForm />
    </Container>
  );
}

export default ContactPage;
