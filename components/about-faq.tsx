import React from "react";

interface IFAQ {
  question: string;
  answer: string;
}

interface IAboutFaq {
  faqs: IFAQ[];
}
export default function AboutFaq({ faqs }: IAboutFaq) {
  return (
    <>
      {faqs.map((faq, index) => (
        <div key={index}>
          <p className="mb-0 font-bold tracking-wide">{faq.question}</p>
          <p className="mt-2">{faq.answer}</p>
        </div>
      ))}
    </>
  );
}
