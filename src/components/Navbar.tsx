"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",          href: "/#hero" },
  { label: "About",         href: "/#about" },
  { label: "Leadership",    href: "/#leadership" },
  { label: "Organizations", href: "/#organizations" },
  { label: "Honours & Awards", href: "/#awards" },
  { label: "Gallery & Media",  href: "/#media" },
  { label: "Journey",       href: "/#journey" },
  { label: "Connect",       href: "/#connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close menu on route change */
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: scrolled ? 12 : 18,
          left: 0,
          right: 0,
          zIndex: 999,
          display: "flex",
          justifyContent: "center",
          padding: "0 18px",
          pointerEvents: "none",
          transition: "top 0.3s ease",
        }}
      >
        {/* ── Circular / Pill Capsule Bar ── */}
        <div
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: 1260,
            height: 64,
            borderRadius: 9999, /* Full pill circle shape */
            padding: "0 14px 0 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled
              ? "rgba(1, 17, 40, 0.94)"
              : "rgba(1, 17, 40, 0.86)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1.5px solid rgba(225, 174, 88, 0.35)",
            boxShadow: scrolled
              ? "0 18px 45px rgba(0, 0, 0, 0.75), 0 0 30px rgba(209, 154, 64, 0.15)"
              : "0 12px 35px rgba(0, 0, 0, 0.55)",
            transition: "all 0.35s ease",
          }}
        >
          {/* ── Brand Logo ── */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              padding: "4px 8px 4px 4px",
              borderRadius: 9999,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.svg"
              alt="Dr. Vikram Singh Chauhan Official Logo"
              style={{ height: 42, width: "auto", display: "block" }}
            />
          </Link>

          {/* ── Desktop Nav Links in pill ── */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: 4 }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 13px",
                  borderRadius: 9999,
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.78)",
                  background: "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#fae3a6";
                  (e.currentTarget as HTMLElement).style.background = "rgba(225, 174, 88, 0.12)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.78)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right Actions: Dossier + Connect CTA ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="desktop-nav">
            <Link
              href="/#connect"
              className="btn-gold"
              style={{
                padding: "9px 20px",
                fontSize: 12.5,
                borderRadius: 9999,
                fontWeight: 700,
                letterSpacing: "0.03em",
              }}
            >
              Get in Touch
            </Link>
          </div>

          {/* ── Mobile Hamburger Pill Button ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            className="mobile-menu-btn"
            style={{
              background: "rgba(225, 174, 88, 0.10)",
              border: "1px solid rgba(225, 174, 88, 0.35)",
              borderRadius: 9999,
              padding: "7px 12px",
              cursor: "pointer",
              display: "none",
              color: "#e1ae58",
            }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Round & Modern) */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 90, left: 18, right: 18,
          background: "rgba(1, 17, 40, 0.98)", zIndex: 998,
          borderRadius: 24, padding: "24px 20px", display: "flex", flexDirection: "column", gap: 10,
          border: "1.5px solid rgba(225, 174, 88, 0.30)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          backdropFilter: "blur(24px)",
        }}>
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 18px", borderRadius: 12,
                fontSize: 15, fontWeight: 600,
                color: "#fae3a6",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(225, 174, 88, 0.15)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#connect"
            onClick={() => setMenuOpen(false)}
            className="btn-gold"
            style={{ textAlign: "center", marginTop: 8, padding: "12px", borderRadius: 9999 }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </>
  );
}
