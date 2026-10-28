"use client";
import Link from "next/link";

export default function Footer() {
  const year = 2026;

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "About", href: "/#about" },
    { label: "Leadership", href: "/#leadership" },
    { label: "Organizations", href: "/#organizations" },
    { label: "Honours & Awards", href: "/#awards" },
    { label: "Gallery & Media", href: "/#media" },
    { label: "Journey", href: "/#journey" },
    { label: "Connect", href: "/#connect" },
  ];

  const orgs = [
    { name: "AIIMES Education", href: "http://www.aiimes.in/", color: "#4f8ef7" },
    { name: "NOBSE Board", href: "http://www.nobse.in/", color: "#f59e0b" },
    { name: "Arya Pharma", href: "http://www.aryapharma.co.in/", color: "#10b981" },
    { name: "Vexter Technologies", href: "http://www.vextertech.com/", color: "#06b6d4" },
    { name: "MetaSynexa Global", href: "https://www.metasynexa.ae/", color: "#a78bfa" },
    { name: "Indian Excellence Council (IEC)", href: "https://www.iecawards.in/", color: "#e1ae58" },
  ];

  return (
    <footer
      style={{
        background: "#000c1e",
        borderTop: "1.5px solid rgba(225, 174, 88, 0.20)",
        padding: "60px 36px 32px",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* ── Top Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 0.9fr 1.3fr 1.1fr",
            gap: 40,
            marginBottom: 48,
            paddingBottom: 44,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: 16 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.svg"
                alt="Dr. Vikram Singh Chauhan Logo"
                style={{ height: 48, width: "auto", display: "block" }}
              />
            </div>
            <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 13, lineHeight: 1.8, maxWidth: 320, fontStyle: "italic", marginBottom: 18 }}>
              &ldquo;True leadership is measured not by the organizations we build, but by the people we empower, the institutions we strengthen, and the lasting value we create for society.&rdquo;
            </p>
            <div style={{ width: 48, height: 2, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)" }} />
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ color: "#e1ae58", fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
              Quick Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map(l => (
                <Link key={l.href} href={l.href} style={{
                  color: "rgba(255,255,255,0.60)", fontSize: 13, textDecoration: "none",
                  transition: "color 0.2s", display: "flex", alignItems: "center", gap: 8,
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#e1ae58")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.60)")}
                >
                  <span style={{ color: "rgba(225, 174, 88, 0.45)", fontSize: 10 }}>▸</span> {l.label}
                </Link>
              ))}
              <a
                href="/dr-vikram-singh-chauhan-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Dr_Vikram_Singh_Chauhan_Profile.pdf"
                style={{
                  color: "#e1ae58", fontSize: 13, textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 8, fontWeight: 700, marginTop: 4,
                }}
              >
                <span>📥</span> Download Dossier (PDF)
              </a>
            </div>
          </div>

          {/* Organizations */}
          <div>
            <div style={{ color: "#e1ae58", fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
              Organizations Led &amp; Founded
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {orgs.map(o => (
                <a
                  key={o.name}
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: o.color, fontSize: 13, textDecoration: "none",
                    opacity: 0.85, transition: "all 0.2s", display: "flex", alignItems: "center", gap: 7,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateX(4px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: o.color, display: "inline-block" }} />
                  {o.name} <span style={{ fontSize: 11, opacity: 0.6 }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <div style={{ color: "#e1ae58", fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>
              Official Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#e1ae58", fontSize: 14 }}>📍</span>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", textTransform: "uppercase" }}>Address</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>New Delhi, India – 110043</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#e1ae58", fontSize: 14 }}>📞</span>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", textTransform: "uppercase" }}>Phone / WhatsApp</div>
                  <a href="tel:+918810310758" style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", textDecoration: "none", fontWeight: 500 }}>
                    +91 8810310758
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ color: "#e1ae58", fontSize: 14 }}>✉️</span>
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", textTransform: "uppercase" }}>Email</div>
                  <a href="mailto:drvikramsinghchauhan@gmail.com" style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", textDecoration: "none", fontWeight: 500 }}>
                    drvikramsinghchauhan@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
          color: "rgba(255,255,255,0.45)", fontSize: 12,
        }}>
          <div>
            &copy; {year} Dr. Vikram Singh Chauhan. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <span>Verified Official Profile</span>
            <span style={{ color: "#e1ae58" }}>•</span>
            <span>Education · Healthcare · Technology</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
