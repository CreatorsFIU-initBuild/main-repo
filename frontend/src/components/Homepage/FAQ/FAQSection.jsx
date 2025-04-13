import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  const faqItems = [
    {
      question:
        "What kind of digital/creative assets can I sell or showcase here?",
      answer:
        "You can sell a wide variety of digital and creative assets including digital art, templates, UI kits, fonts, photos, videos, 3D models, e-books, courses, and more. Our platform supports creators from all digital disciplines.",
    },
    {
      question: "How do I get started as a creator?",
      answer:
        "Getting started is simple! First, create an account, then complete your profile with portfolio examples and information about your work. After that, you can start uploading your digital products, set prices, and begin selling to our community of buyers.",
    },
    {
      question: "How do payments and orders work?",
      answer:
        "We handle all payment processing through secure methods like Stripe and PayPal. When a buyer purchases your product, we collect the payment, apply our platform fee, and transfer the rest to your account. Payouts are processed based on your selected schedule (weekly, bi-weekly, or monthly).",
    },
    {
      question: "Can I switch between being a buyer and a creator?",
      answer:
        "Absolutely! Your account allows you to seamlessly switch between buying and selling. Many of our users are both creators who sell their work and buyers who purchase from other creators.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-card">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-item-list">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question-button"
                onClick={() => toggleItem(index)}
              >
                <span className="faq-question-text">{item.question}</span>
                <span>
                  {openItem === index ? (
                    <svg
                      className="faq-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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
                      className="faq-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
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

              {openItem === index && (
                <div className="faq-answer">
                  <p className="faq-answer-text">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-more">
          <button className="faq-more-button">Got More Questions?</button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
