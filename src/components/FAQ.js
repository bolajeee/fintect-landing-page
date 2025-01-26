import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Pay4Me App?",
      answer:
        "Pay4Me is a secure payment platform designed specifically for international education payments, allowing students to easily transfer tuition and fees to educational institutions worldwide.",
    },
    {
      question: "What is the payment processing timeline on the Pay4Me App?",
      answer:
        "Most payments are processed within 24-48 hours. International transfers may take 2-3 business days depending on the destination country and payment method.",
    },
    {
      question: "How does the Pay4Me App work?",
      answer:
        "The app provides a simple interface to make educational payments. Just download the app, create an account, link your payment method, and start making secure payments to your institution.",
    },
    {
      question: "How do I get started using the Pay4Me App?",
      answer:
        "Download the app from App Store or Google Play, create an account, verify your identity, and set up your preferred payment method to begin making transactions.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      {/* FAQ Tag */}
      <div className="inline-flex items-center space-x-2 bg-light-bg px-4 py-2 rounded-full mb-8">
        <img src="/faq-icon.svg" alt="" className="h-4 w-4" />
        <span className="text-sm font-medium text-gray-800">FAQS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column - Title and Image */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Got Questions?
          </h2>
          <p className="text-gray-600 mb-8">We've got answers</p>
          <img
            src="/faq-illustration.jpg"
            alt="FAQ Illustration"
            className="rounded-2xl w-full object-cover"
          />
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
              <button
                className="flex justify-between items-center w-full py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
