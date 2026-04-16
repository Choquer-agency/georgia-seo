"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { useContactForm } from "@/context/ContactFormContext";

const navLinks = [
  { label: "Services", href: "#seo-services" },
  { label: "Work", href: "#portfolio" },
  { label: "Blog", href: "/blog", isPage: true },
  { label: "About", href: "/about", isPage: true },
];

export function Nav({ brandName }: { brandName: string }) {
  const { openModal } = useContactForm();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 28);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(href: string) {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all",
          scrolled ? "nav-scrolled" : ""
        )}
        style={{
          transitionDuration: "var(--duration-half)",
          ...(scrolled
            ? { background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }
            : {}),
        }}
      >
        <div
          className={clsx(
            "u-container flex items-center justify-between transition-all",
            scrolled ? "py-2" : "py-5"
          )}
          style={{
            transitionDuration: "var(--duration-half)",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-sans font-medium text-base tracking-tight flex items-center gap-2"
            style={{ color: "inherit" }}
          >
            <img
              src="/images/logo.svg"
              alt={brandName}
              className="h-5 w-auto"
            />
            {brandName}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              "isPage" in link && link.isPage ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-fluid-main font-sans opacity-60 hover:opacity-100 transition-opacity"
                  style={{ transitionDuration: "0.35s" }}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-fluid-main font-sans opacity-60 hover:opacity-100 transition-opacity"
                  style={{ transitionDuration: "0.35s" }}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => openModal()}
              className="btn"
              style={{
                background: '#ff9500',
                color: '#fff',
                borderColor: '#ff9500',
              }}
            >
              <span className="text-sm">Get a Free SEO Audit</span>
              <span
                className="btn-arrow"
                style={{ background: 'rgba(255,255,255,0.2)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-light flex flex-col items-center justify-center gap-8 md:hidden transition-opacity",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{ transitionDuration: "var(--duration-half)" }}
      >
        {navLinks.map((link) =>
          "isPage" in link && link.isPage ? (
            <a
              key={link.href}
              href={link.href}
              className="text-fluid-h3 font-sans font-medium text-dark"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-fluid-h3 font-sans font-medium text-dark"
            >
              {link.label}
            </button>
          )
        )}
        <button
          onClick={() => { setMobileOpen(false); openModal(); }}
          className="btn-secondary text-base"
        >
          Get a Free SEO Audit
        </button>
      </div>
    </>
  );
}
