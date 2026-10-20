"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap-register";
import { warmPalette } from "@/lib/colors";
import { FAQItem } from "@/content/config";

interface ServiceFAQProps {
  faqs: FAQItem[];
  serviceTitle: string;
}

export function ServiceFAQ({ faqs, serviceTitle }: ServiceFAQProps) {
  const ref = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".sfaq-heading", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });
        gsap.from(".sfaq-item", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
        });
      });
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id="faq"
      className="section-space-main"
      style={{ backgroundColor: "#FFF9F0" }}
    >
      <div className="u-container max-w-3xl">
        <div className="text-center mb-8">
          <p className="sfaq-heading eyebrow text-brand mb-4">FAQ</p>
          <h2 className="sfaq-heading font-sans font-medium text-fluid-h3 leading-[1.1] text-dark">
            {serviceTitle} questions, answered
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <div
            key={i}
            className="sfaq-item border-b border-dark-faded"
            style={{
              borderColor:
                openIndex === i
                  ? warmPalette[i % warmPalette.length]
                  : undefined,
              transition: "border-color 0.3s",
            }}
          >
            <button
              className="w-full flex items-center justify-between py-5 text-left group"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <span className="font-sans font-medium text-fluid-h6 text-dark pr-8">
                {faq.question}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="flex-shrink-0 transition-all"
                style={{
                  transform:
                    openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  color:
                    openIndex === i
                      ? warmPalette[i % warmPalette.length]
                      : undefined,
                  transitionDuration: "0.3s",
                }}
              >
                <path
                  d="M10 4V16M4 10H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="overflow-hidden transition-all"
              style={{
                maxHeight: openIndex === i ? "500px" : "0px",
                transitionDuration: "0.4s",
                transitionTimingFunction: "cubic-bezier(0.625, 0.05, 0, 1)",
              }}
            >
              <p className="font-sans text-fluid-main text-dark opacity-60 leading-relaxed pb-5">
                {faq.answer}
                {faq.link && (
                  <>
                    {" "}
                    <a href={faq.link.href} className="underline underline-offset-4">
                      {faq.link.anchor}
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
