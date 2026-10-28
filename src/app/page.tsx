"use client";
import { useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";

export default function HomePage() {
  // Gallery lightbox state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Contact form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    type: "Corporate Training Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full Name is required";
    if (!form.email.trim()) e.email = "Email Address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email address";
    if (!form.message.trim()) e.message = "Please share details about your inquiry";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1200);
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    padding: "13px 18px",
    borderRadius: 10,
    border: "1px solid",
    borderColor: errors[field] ? "rgba(239,68,68,0.7)" : "rgba(225,174,88,0.25)",
    background: "rgba(2, 23, 53, 0.6)",
    color: "#fff",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: 14,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  // Data Collections
  const stats = [
    { val: "15+", label: "Years of Excellence", sub: "Since 2009 In Leadership" },
    { val: "6+", label: "Organizations Founded & Led", sub: "Education, Tech & Health" },
    { val: "Global", label: "National & Global Impact", sub: "India, Nepal, Bhutan & UAE" },
    { val: "10,000+", label: "Empowered Learners", sub: "Students & Professionals" },
  ];

  const organizations = [
    {
      id: "aiimes",
      name: "AIIMES",
      fullName: "All India Institute of Management & Engineering Studies",
      role: "Founder & Chairman",
      period: "2009 – Present",
      sector: "Higher & Professional Education",
      accentColor: "#4f8ef7",
      website: "http://www.aiimes.in/",
      icon: "🎓",
      desc: "Provides strategic leadership for one of India's emerging professional education institutions, overseeing academic governance, institutional development, quality assurance, examination systems, curriculum planning, and industry collaboration.",
      focus: ["Academic Governance", "Quality Assurance", "Curriculum Planning", "Skill Development"],
    },
    {
      id: "nobse",
      name: "NOBSE",
      fullName: "National Open Board of School Education",
      role: "Founder & Chairman",
      period: "2014 – Present",
      sector: "School Education & Open Learning",
      accentColor: "#f59e0b",
      website: "http://www.nobse.in/",
      icon: "🏫",
      desc: "Leads institutional governance, academic administration, curriculum development, examination management, learner support services, and strategic educational initiatives for accessible education across India.",
      focus: ["Open Schooling Systems", "Inclusive Education", "Examination Logistics", "Learner Support Portals"],
    },
    {
      id: "aryapharma",
      name: "ARYA PHARMA",
      fullName: "Arya Pharma Healthcare & Nutraceuticals",
      role: "National Head – Sales & Marketing",
      period: "2017 – Present",
      sector: "Healthcare & Pharmaceuticals",
      accentColor: "#10b981",
      website: "http://www.aryapharma.co.in/",
      icon: "🩺",
      desc: "Directs nationwide sales and marketing operations, business expansion, strategic alliances, private-label nutraceutical manufacturing initiatives, and brand development.",
      focus: ["Nationwide Pharma Distribution", "Sales Architecture", "Nutraceutical Manufacturing", "Strategic Alliances"],
    },
    {
      id: "vexter",
      name: "VEXTER TECHNOLOGIES",
      fullName: "Vexter Technologies Enterprise Suite",
      role: "Founder & Chief Executive Officer",
      period: "2023 – Present",
      sector: "Enterprise AI & Cloud Software",
      accentColor: "#06b6d4",
      website: "http://www.vextertech.com/",
      icon: "⚡",
      desc: "Provides executive leadership in Artificial Intelligence, enterprise software, ERP & CRM solutions, cloud computing, blockchain technologies, FinTech, and business automation.",
      focus: ["Artificial Intelligence", "ERP & CRM Architectures", "Cloud Computing", "Business Automation"],
    },
    {
      id: "metasynexa",
      name: "METASYNEXA GLOBAL",
      fullName: "MetaSynexa Global Pvt. Ltd.",
      role: "Founder & Chief Executive Officer",
      period: "2026 – Present",
      sector: "Strategic Consulting & Global FinTech",
      accentColor: "#a78bfa",
      website: "https://www.metasynexa.ae/",
      icon: "🌐",
      desc: "Leading strategic consulting, AI-powered business solutions, financial technology, digital innovation, business automation, investment technology solutions, and international business development.",
      focus: ["International Business", "Strategic Consulting", "AI FinTech Architectures", "Global Enterprise Synergy"],
    },
    {
      id: "iec",
      name: "INDIAN EXCELLENCE COUNCIL",
      fullName: "IEC – Indian Excellence Council",
      role: "Founder & Chairman",
      period: "2026 – Present",
      sector: "Excellence Initiatives & Awards",
      accentColor: "#d19a40",
      website: "https://www.iecawards.in/",
      icon: "🏆",
      desc: "Provides strategic direction for national excellence initiatives, leadership development programs, institutional recognition, professional awards, conferences, and international collaborations.",
      focus: ["Excellence Awards & Summits", "Institutional Accreditation", "Leadership Convocations", "Cross-Border Collaborations"],
    },
  ];

  const awards = [
    {
      year: "2026",
      title: "National School Award",
      location: "Delhi, India",
      scope: "National",
      tag: "NSA Conclave Stage",
      image: "/images/gallery/award-national-school.jpg",
      desc: "Recognized for exemplary contributions to advancing school education standards with 40+ principals and educators.",
    },
    {
      year: "2026",
      title: "Education Entrepreneur Award",
      location: "Delhi, India",
      scope: "National",
      tag: "National Trophy Presentation",
      image: "/images/gallery/award-education-entrepreneur.jpg",
      desc: "Conferred for groundbreaking visionary work in establishing sustainable education institutions and skill programs.",
    },
    {
      year: "2026",
      title: "Bharat Bhushan National Award",
      location: "Delhi, India",
      scope: "National",
      tag: "Celebrity Stage Felicitation",
      image: "/images/gallery/award-golden-crown-stage.jpg",
      desc: "A prestigious national honour celebrating selfless commitment and institution building for national development.",
    },
    {
      year: "2026",
      title: "Bharat Sewa Ratna Award",
      location: "Jaipur, Rajasthan",
      scope: "National",
      tag: "Medals & Conclave Ceremony",
      image: "/images/gallery/award-bharat-sewa-ratna.jpg",
      desc: "Awarded in appreciation of outstanding community empowerment and multi-sector institutional leadership.",
    },
    {
      year: "2025",
      title: "The Iconic Business Award",
      location: "Delhi, India",
      scope: "National",
      tag: "Iconic Business Summit",
      image: "/images/gallery/award-iconic-business.jpg",
      desc: "Honouring visionary corporate leadership and sustainable business scaling with celebrity guest on stage.",
    },
    {
      year: "2025",
      title: "International Achievers Award",
      location: "Bhutan",
      scope: "International",
      tag: "Global Summit Delegate",
      image: "/images/gallery/award-international-achievers.jpg",
      desc: "Bestowed in the Kingdom of Bhutan for cross-border institutional excellence and leadership distinction.",
    },
    {
      year: "2025",
      title: "Rashtriya Gaurav Puraskar",
      location: "Delhi, India",
      scope: "National",
      tag: "Armed Forces Officers Presentation",
      image: "/images/gallery/award-rashtriya-gaurav.jpg",
      desc: "Presented by senior Indian Armed Forces officers at NDMC Convention Centre in New Delhi.",
    },
    {
      year: "2025",
      title: "International Icon Award",
      location: "Nepal",
      scope: "International",
      tag: "International Honor Nepal",
      image: "/images/gallery/award-golden-crown.jpg",
      desc: "Presented in Kathmandu, Nepal, honoring high-impact leadership in education development.",
    },
    {
      year: "2023",
      title: "Business Icon Award",
      location: "Delhi, India",
      scope: "National",
      tag: "Business Meet & Conclave",
      image: "/images/gallery/award-business-icon.jpg",
      desc: "Recognizing outstanding business acumen, nationwide sales & marketing leadership.",
    },
    {
      year: "2021",
      title: "Rashtriya Shiksha Ratan Award",
      location: "Delhi, India",
      scope: "National",
      tag: "Institutional Conclave Plaque",
      image: "/images/gallery/award-rashtriya-shiksha-ratan.jpg",
      desc: "Conferred for stellar dedication to professional higher education and academic institution governance.",
    },
  ];

  const galleryItems = [
    { src: "/images/gallery/award-iconic-business.jpg", title: "The Iconic Business Award", tag: "Award Conclave" },
    { src: "/images/gallery/award-rashtriya-gaurav.jpg", title: "Rashtriya Gaurav Puraskar with Armed Forces", tag: "National Honor" },
    { src: "/images/gallery/award-national-school.jpg", title: "National School Awards (NSA)", tag: "Education Summit" },
    { src: "/images/gallery/portrait-mercedes-luxury.jpg", title: "Executive Arrival — Mercedes-Benz", tag: "Executive Presence" },
    { src: "/images/gallery/portrait-dubai-skyline.jpg", title: "Global Vision — Dubai Skyline", tag: "International" },
    { src: "/images/gallery/conference-aiimes-plaque.jpg", title: "AIIMES Institutional Conclave", tag: "Institutional Honor" },
  ];

  const timeline = [
    { year: "2026", title: "METASYNEXA GLOBAL & Indian Excellence Council (IEC)", color: "#a78bfa", desc: "Founded MetaSynexa Global for AI FinTech ecosystems and IEC for national excellence convocations." },
    { year: "2025", title: "International Icon & Achiever Accolades (Bhutan & Nepal)", color: "#34d399", desc: "Conferred cross-border international honors and Rashtriya Gaurav Puraskar by Indian Armed Forces officers." },
    { year: "2024", title: "Doctorate in Professional Studies (DPS)", color: "#e1ae58", desc: "Awarded DPS in Corporate Training Management at AIIMES New Delhi, pioneering executive capability programs." },
    { year: "2023", title: "Founded VEXTER TECHNOLOGIES", color: "#06b6d4", desc: "Launched Vexter Technologies for enterprise AI, ERP/CRM suites, and business automation." },
    { year: "2021", title: "Doctorate in Management Studies (DMS) & Shiksha Ratan", color: "#f59e0b", desc: "Awarded DMS in Sales & Marketing Management; honored with Rashtriya Shiksha Ratan Award in Delhi." },
    { year: "2017", title: "National Head — Sales & Marketing at ARYA PHARMA", color: "#10b981", desc: "Steered nationwide pharmaceutical distribution network and private-label nutraceutical lines." },
    { year: "2014", title: "Founded NOBSE (National Open Board of School Education)", color: "#eab308", desc: "Established accessible open schooling frameworks serving thousands of students across India." },
    { year: "2009", title: "Founded AIIMES (Management & Engineering Studies)", color: "#4f8ef7", desc: "Foundational genesis of one of India's prominent skill development and higher education institutions." },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          SECTION 1: HERO SECTION (#hero) — CLASSIC EXECUTIVE
      ═══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          minHeight: "calc(100vh - 88px)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          padding: "20px 36px 24px",
          background: "radial-gradient(ellipse 90% 65% at 50% 12%, #021430 0%, #010e24 55%, #000818 100%)",
        }}
      >
        <Stars count={50} />

        {/* ── Neoclassical Architectural Columns Watermark (Inspired by official banner) ── */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "42%",
          pointerEvents: "none",
          opacity: 0.05,
          zIndex: 1,
          overflow: "hidden",
        }}>
          <svg viewBox="0 0 400 700" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            {/* Pediment */}
            <path d="M20 120 L200 40 L380 120 Z" stroke="#e1ae58" strokeWidth="2.5" fill="none" />
            <path d="M40 120 L200 55 L360 120 Z" stroke="#e1ae58" strokeWidth="1" fill="none" />
            <rect x="15" y="120" width="370" height="20" stroke="#e1ae58" strokeWidth="2" fill="none" />
            {/* 4 Classical fluted columns */}
            <rect x="40" y="140" width="45" height="500" stroke="#e1ae58" strokeWidth="1.5" />
            <line x1="52" y1="140" x2="52" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="63" y1="140" x2="63" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="74" y1="140" x2="74" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <rect x="135" y="140" width="45" height="500" stroke="#e1ae58" strokeWidth="1.5" />
            <line x1="147" y1="140" x2="147" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="158" y1="140" x2="158" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="169" y1="140" x2="169" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <rect x="230" y="140" width="45" height="500" stroke="#e1ae58" strokeWidth="1.5" />
            <line x1="242" y1="140" x2="242" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="253" y1="140" x2="253" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="264" y1="140" x2="264" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <rect x="325" y="140" width="45" height="500" stroke="#e1ae58" strokeWidth="1.5" />
            <line x1="337" y1="140" x2="337" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="348" y1="140" x2="348" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <line x1="359" y1="140" x2="359" y2="640" stroke="#e1ae58" strokeWidth="0.8" />
            <rect x="15" y="640" width="370" height="20" stroke="#e1ae58" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Ambient gold glow orbs */}
        <div style={{
          position: "absolute", pointerEvents: "none",
          width: 850, height: 850, borderRadius: "50%",
          top: "22%", right: "-6%", transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(225, 174, 88, 0.10) 0%, transparent 65%)",
        }} />

        <div style={{ maxWidth: 1260, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
          <div
            className="two-col"
            style={{ display: "grid", gridTemplateColumns: "1.18fr 0.82fr", gap: 40, alignItems: "center" }}
          >
            {/* ── LEFT: Classic Executive Profile & Authority ── */}
            <div>
              {/* Classical Crest / Pre-title Pill */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                padding: "5px 16px", borderRadius: 100,
                border: "1px solid rgba(225, 174, 88, 0.40)",
                background: "rgba(1, 17, 40, 0.70)",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.38)",
                color: "#e1ae58", fontSize: 10.2, fontWeight: 700,
                letterSpacing: "0.19em", textTransform: "uppercase",
                marginBottom: 10,
              }}>
                <span style={{ fontSize: 8.5, color: "#e1ae58" }}>◆</span>
                <span>Executive Profile &amp; Governance</span>
                <span style={{ color: "rgba(225, 174, 88, 0.45)" }}>•</span>
                <span>15+ Years Excellence</span>
                <span style={{ fontSize: 8.5, color: "#e1ae58" }}>◆</span>
              </div>

              {/* Name in Regal Classical Serif */}
              <h1 style={{
                fontFamily: "var(--font-serif), 'Playfair Display', Georgia, 'Times New Roman', serif",
                fontSize: "clamp(35px, 4.1vw, 52px)",
                fontWeight: 700,
                lineHeight: 1.12,
                marginBottom: 8,
                letterSpacing: "0.01em",
              }}>
                <span style={{
                  background: "linear-gradient(135deg, #fae3a6 0%, #e1ae58 35%, #ffffff 55%, #d19a40 85%, #9f7228 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}>
                  Dr. Vikram Singh Chauhan
                </span>
              </h1>

              {/* Classic Gold Filigree Flourish Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, maxWidth: 470 }}>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(225, 174, 88, 0.6))" }} />
                <div style={{ color: "#e1ae58", fontSize: 12, letterSpacing: "0.15em" }}>❖</div>
                <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(225, 174, 88, 0.6), transparent)" }} />
              </div>

              {/* Executive Designations */}
              <div style={{
                fontSize: 12.8,
                fontWeight: 700,
                letterSpacing: "0.135em",
                textTransform: "uppercase",
                color: "#fae3a6",
                marginBottom: 10,
              }}>
                Multi-Sector Founder
                <span style={{ color: "rgba(225,174,88,0.5)", margin: "0 9px" }}>|</span>
                Corporate Trainer
                <span style={{ color: "rgba(225,174,88,0.5)", margin: "0 9px" }}>|</span>
                Business Coach
              </div>

              {/* Academic Governance & Doctorates */}
              <div style={{
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 8,
                padding: "5px 14px",
                borderRadius: 6,
                background: "rgba(2, 23, 53, 0.55)",
                border: "1px solid rgba(225, 174, 88, 0.24)",
                fontSize: 11.2,
                color: "rgba(255, 255, 255, 0.86)",
                marginBottom: 12,
              }}>
                <span style={{ color: "#e1ae58", fontWeight: 700 }}>DPS</span> Corporate Training Management (2024)
                <span style={{ color: "rgba(225,174,88,0.4)" }}>•</span>
                <span style={{ color: "#e1ae58", fontWeight: 700 }}>DMS</span> Sales &amp; Marketing Management (2021)
              </div>

              {/* Executive Bio Narrative */}
              <p style={{
                fontSize: "clamp(14px, 1.35vw, 15.5px)",
                color: "rgba(255, 255, 255, 0.79)",
                lineHeight: 1.72,
                maxWidth: 590,
                marginBottom: 14,
              }}>
                Visionary entrepreneur, institution builder, and executive leader with over <strong>15 years of experience</strong> across education, healthcare, technology, and business development. Founder and leader of <strong>6+ high-impact organizations</strong> dedicated to building sustainable, innovative ecosystems.
              </p>

              {/* Leadership Philosophy (Classical Pull-Quote) */}
              <blockquote style={{
                marginBottom: 16,
                padding: "10px 18px",
                borderRadius: 8,
                background: "linear-gradient(135deg, rgba(225, 174, 88, 0.06) 0%, rgba(1, 17, 40, 0.70) 100%)",
                borderLeft: "3.5px solid #e1ae58",
                borderTop: "1px solid rgba(225, 174, 88, 0.16)",
                borderRight: "1px solid rgba(225, 174, 88, 0.16)",
                borderBottom: "1px solid rgba(225, 174, 88, 0.16)",
                boxShadow: "0 5px 18px rgba(0,0,0,0.28)",
              }}>
                <p style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontStyle: "italic",
                  color: "#fae3a6",
                  fontSize: 13.2,
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  &ldquo;True leadership is measured not by the organizations we build, but by the people we empower, the institutions we strengthen, and the lasting value we create for society.&rdquo;
                </p>
                <div style={{ marginTop: 5, fontSize: 10.6, color: "rgba(255,255,255,0.50)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  — Dr. Vikram Singh Chauhan
                </div>
              </blockquote>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#organizations" className="btn-gold" style={{ padding: "11px 24px", fontSize: 13, borderRadius: 9999 }}>
                  Explore 6 Organizations →
                </a>
                <a href="#awards" className="btn-outline" style={{ padding: "11px 22px", fontSize: 13, borderRadius: 9999 }}>
                  10 Honours &amp; Awards
                </a>
                <a
                  href="/dr-vikram-singh-chauhan-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Dr_Vikram_Singh_Chauhan_Profile.pdf"
                  className="btn-outline"
                  style={{ padding: "11px 22px", fontSize: 13, borderRadius: 9999, background: "rgba(225, 174, 88, 0.08)" }}
                >
                  Download Dossier (PDF) 📥
                </a>
              </div>
            </div>

            {/* ── RIGHT: Timeless Neoclassical Heritage Frame ── */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                alignSelf: "center",
                marginTop: 0,
              }}
            >
              {/* Ambient gold glow behind portrait */}
              <div style={{
                position: "absolute",
                inset: "-18px",
                borderRadius: "34px",
                background: "radial-gradient(ellipse at center, rgba(225, 174, 88, 0.18) 0%, rgba(1, 17, 40, 0) 70%)",
                filter: "blur(26px)",
                pointerEvents: "none",
                zIndex: 0,
              }} />

              <div style={{ position: "relative", width: "100%", maxWidth: 420, zIndex: 1 }}>

                {/* Stately Heritage Frame Container */}
                <div
                  style={{
                    position: "relative",
                    borderRadius: 18,
                    overflow: "hidden",
                    border: "2px solid rgba(225, 174, 88, 0.45)",
                    outline: "1px solid rgba(225, 174, 88, 0.18)",
                    outlineOffset: "-5px",
                    background: "linear-gradient(145deg, #021735 0%, #000c1e 100%)",
                    boxShadow: "0 22px 55px rgba(0, 0, 0, 0.85), 0 0 35px rgba(209, 154, 64, 0.15)",
                  }}
                >
                  {/* Classical Corner Accent Brackets */}
                  <div style={{ position: "absolute", top: 11, left: 11, width: 18, height: 18, borderTop: "2px solid #e1ae58", borderLeft: "2px solid #e1ae58", zIndex: 3, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: 11, right: 11, width: 18, height: 18, borderTop: "2px solid #e1ae58", borderRight: "2px solid #e1ae58", zIndex: 3, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: 11, left: 11, width: 18, height: 18, borderBottom: "2px solid #e1ae58", borderLeft: "2px solid #e1ae58", zIndex: 3, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: 11, right: 11, width: 18, height: 18, borderBottom: "2px solid #e1ae58", borderRight: "2px solid #e1ae58", zIndex: 3, pointerEvents: "none" }} />

                  {/* Top Discrete Seal */}
                  <div style={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    zIndex: 4,
                    background: "rgba(1, 17, 40, 0.88)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(225, 174, 88, 0.40)",
                    borderRadius: 5,
                    padding: "3.5px 11px",
                    fontSize: 8.8,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "#fae3a6",
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
                  }}>
                    FOUNDER &amp; CHAIRMAN
                  </div>

                  {/* Master Signature Portrait */}
                  <div style={{ width: "100%", height: 425, position: "relative", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/dr-vikram-office-hd.png"
                      alt="Dr. Vikram Singh Chauhan in Executive Office"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 10%",
                        display: "block",
                      }}
                    />

                    {/* Gradient Vignette for Plaque contrast */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0, 10, 24, 0.95) 0%, rgba(0, 10, 24, 0.45) 30%, transparent 60%)",
                      pointerEvents: "none",
                    }} />
                  </div>

                  {/* Engraved Executive Brass Plaque at Base */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 11,
                      left: 11,
                      right: 11,
                      zIndex: 4,
                      background: "rgba(1, 17, 40, 0.92)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      borderRadius: 11,
                      padding: "11px 16px",
                      border: "1.5px solid rgba(225, 174, 88, 0.35)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.7)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                      <div>
                        <div style={{
                          fontFamily: "var(--font-serif), Georgia, serif",
                          fontSize: 15.2,
                          fontWeight: 700,
                          color: "#fff",
                          letterSpacing: "0.02em",
                        }}>
                          Dr. Vikram Singh Chauhan
                        </div>
                        <div style={{
                          fontSize: 10,
                          color: "#e1ae58",
                          fontWeight: 700,
                          letterSpacing: "0.10em",
                          textTransform: "uppercase",
                          marginTop: 2,
                        }}>
                          Founder &amp; Chairman · AIIMES | NOBSE | IEC
                        </div>
                      </div>
                      <div style={{
                        background: "rgba(225, 174, 88, 0.12)",
                        border: "1px solid rgba(225, 174, 88, 0.35)",
                        borderRadius: 4,
                        padding: "2px 7px",
                        fontSize: 8.5,
                        fontWeight: 800,
                        color: "#fae3a6",
                        letterSpacing: "0.08em",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                      }}>
                        VERIFIED
                      </div>
                    </div>

                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 6,
                      paddingTop: 6,
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      fontSize: 10,
                      color: "rgba(255,255,255,0.65)",
                    }}>
                      <span>Executive Office · New Delhi, India</span>
                      <span style={{ color: "#fae3a6" }}>15+ Yrs Excellence</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: ABOUT ME & EXECUTIVE PROFILE (#about)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="about"
        style={{
          padding: "100px 36px",
          background: "#011128",
          borderTop: "1px solid rgba(225, 174, 88, 0.15)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Executive Profile &amp; Bio
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              Professional{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Introduction &amp; Credentials</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
              Doctorates, Institutional Leadership, Core Expertise, and Visionary Governance
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 0" }} />
          </div>

          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 54, alignItems: "start", marginBottom: 60 }}>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 16 }}>
                Visionary Entrepreneur, Institution Builder &amp; Executive Leader
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.76)", marginBottom: 18 }}>
                Dr. Vikram Singh Chauhan brings over <strong>15 years of distinguished experience</strong> across education, healthcare, technology, and business development. He is recognized for establishing high-impact institutions, leading multidisciplinary teams, developing strategic partnerships, and driving organizational excellence.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.82, color: "rgba(255,255,255,0.64)", marginBottom: 26 }}>
                Committed to creating innovative, technology-driven ecosystems that empower individuals, strengthen institutions, and contribute to national development through quality education, ethical leadership, and business innovation.
              </p>

              {/* Doctorates Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 26 }} className="two-col">
                <div className="glass" style={{ padding: "20px", borderRadius: 14, borderLeft: "3.5px solid #e1ae58" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", textTransform: "uppercase" }}>Doctorate (DPS) · 2024</div>
                  <div style={{ fontWeight: 800, fontSize: 14.5, color: "#fff", marginTop: 4 }}>Corporate Training Management</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>AIIMES, New Delhi - India</div>
                </div>
                <div className="glass" style={{ padding: "20px", borderRadius: 14, borderLeft: "3.5px solid #4f8ef7" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#4f8ef7", textTransform: "uppercase" }}>Doctorate (DMS) · 2021</div>
                  <div style={{ fontWeight: 800, fontSize: 14.5, color: "#fff", marginTop: 4 }}>Sales &amp; Marketing Management</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>ISGD University, Assam - India</div>
                </div>
              </div>

              {/* Languages & Formal Declaration */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Languages:</span>
                <span style={{ padding: "4px 14px", borderRadius: 100, background: "rgba(225,174,88,0.1)", border: "1px solid rgba(225,174,88,0.3)", color: "#e1ae58", fontSize: 12, fontWeight: 700 }}>English</span>
                <span style={{ padding: "4px 14px", borderRadius: 100, background: "rgba(225,174,88,0.1)", border: "1px solid rgba(225,174,88,0.3)", color: "#e1ae58", fontSize: 12, fontWeight: 700 }}>Hindi</span>
                <a href="/about" style={{ color: "#e1ae58", fontSize: 13, fontWeight: 700, textDecoration: "none", marginLeft: 8 }}>
                  Read Full About Dossier →
                </a>
              </div>
            </div>

            {/* Right: Mercedes Executive Portrait Card */}
            <div className="glass" style={{ borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(225, 174, 88, 0.28)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/portrait-mercedes-luxury.jpg"
                alt="Dr. Vikram Singh Chauhan Arrival"
                style={{ width: "100%", height: 320, objectFit: "cover", objectPosition: "center 20%", display: "block" }}
              />
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>Dr. Vikram Singh Chauhan</div>
                <div style={{ fontSize: 12, color: "#e1ae58", fontWeight: 700, textTransform: "uppercase", marginTop: 2 }}>
                  Executive Office · New Delhi, India – 110043
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                  <a href="tel:+918810310758" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>📞 +91 8810310758</a>
                  <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
                  <a href="mailto:drvikramsinghchauhan@gmail.com" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>✉️ Email Office</a>
                </div>
              </div>
            </div>
          </div>

          {/* ── FULL-WIDTH 100% CLASSIC METRIC PILLARS (Direct from Official Banner) ── */}
          <div
            className="four-col-stats"
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
              marginTop: 10,
              paddingTop: 32,
              borderTop: "1.5px solid rgba(225, 174, 88, 0.22)",
            }}
          >
            {[
              { num: "15+", title: "YEARS", desc: "of Excellence", sub: "Since 2009 In Leadership" },
              { num: "6+", title: "ORGANIZATIONS", desc: "Founded & Led", sub: "Education · Healthcare · AI · Global" },
              { num: "GLOBAL", title: "IMPACT", desc: "National + International", sub: "10+ National & Worldwide Honours" },
              { num: "50,000+", title: "EMPOWERED", desc: "Students & Leaders", sub: "Professional Ecosystem Development" },
            ].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 22px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, rgba(2, 23, 53, 0.6) 0%, rgba(1, 17, 40, 0.85) 100%)",
                  border: "1px solid rgba(225, 174, 88, 0.24)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "clamp(24px, 2.4vw, 32px)",
                  fontWeight: 800,
                  color: "#fae3a6",
                  letterSpacing: "-0.01em",
                }}>
                  {m.num}
                </div>
                <div style={{
                  fontSize: 11.5,
                  fontWeight: 800,
                  color: "#e1ae58",
                  letterSpacing: "0.10em",
                  marginTop: 4,
                  textTransform: "uppercase",
                }}>
                  {m.title}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.88)", marginTop: 2 }}>
                  {m.desc}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.48)", marginTop: 4 }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: LEADERSHIP & PILLARS (#leadership)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="leadership"
        style={{
          padding: "100px 36px",
          background: "linear-gradient(180deg, #011128 0%, #000c1e 100%)",
          borderTop: "1px solid rgba(225, 174, 88, 0.15)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Executive Practice
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              Four Pillars of{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Dr. Chauhan&apos;s Leadership</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
              Institution building, strategic business development, artificial intelligence, and corporate coaching.
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 40 }}>
            {[
              { num: "01", icon: "🏛️", title: "Institution Building", accent: "#4f8ef7", desc: "Founding and steering sustainable academic institutions, governance boards, and examination logistics across India." },
              { num: "02", icon: "📈", title: "Business Strategy & Sales", accent: "#e1ae58", desc: "Omnichannel nationwide pharmaceutical distribution, brand architecture, and multi-sector enterprise scaling." },
              { num: "03", icon: "🤖", title: "Technology & AI Innovation", accent: "#06b6d4", desc: "Deploying enterprise AI models, ERP & CRM architectures, FinTech tools, and business automation software." },
              { num: "04", icon: "🎯", title: "Corporate Training & Coaching", accent: "#a78bfa", desc: "Doctoral research in Corporate Training Management, mentoring CXOs, managers, and institution leaders." },
            ].map(p => (
              <div key={p.num} className="glass" style={{ padding: "30px 26px", borderRadius: 18, border: "1px solid rgba(225,174,88,0.2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color: p.accent, background: `${p.accent}18`, padding: "2px 10px", borderRadius: 100 }}>PILLAR {p.num}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.60)", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/leadership" style={{ color: "#e1ae58", fontSize: 13.5, fontWeight: 700, textDecoration: "none" }}>
              Explore Full Leadership Competency Matrix &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4: THE 6 ORGANIZATIONS (#organizations)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="organizations"
        style={{
          padding: "100px 36px",
          background: "#011128",
          borderTop: "1px solid rgba(225, 174, 88, 0.15)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Flagship Portfolio
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              6 Multi-Sector{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Organizations</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 650, margin: "0 auto" }}>
              Higher education, open schooling, pharmaceuticals, enterprise AI software, FinTech, and national excellence councils.
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 26 }}>
            {organizations.map(org => (
              <div
                key={org.id}
                className="glass"
                style={{
                  borderRadius: 20, padding: "32px 28px",
                  border: "1px solid rgba(225, 174, 88, 0.22)",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100,
                      background: `${org.accentColor}18`, border: `1px solid ${org.accentColor}40`, color: org.accentColor,
                      textTransform: "uppercase",
                    }}>
                      {org.sector}
                    </span>
                    <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)" }}>{org.period}</span>
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>{org.fullName}</h3>
                  <div style={{ fontSize: 13, color: "#e1ae58", fontWeight: 700, marginBottom: 14 }}>{org.role}</div>
                  <p style={{ color: "rgba(255,255,255,0.64)", fontSize: 13.5, lineHeight: 1.75, marginBottom: 18 }}>
                    {org.desc}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                    {org.focus.map((f, i) => (
                      <span key={i} style={{ fontSize: 11.5, padding: "3px 10px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)" }}>
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <a href={org.website} target="_blank" rel="noopener noreferrer" style={{ color: org.accentColor, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                    Official Website ↗
                  </a>
                  <Link href="/organizations" style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, textDecoration: "none" }}>
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5: HONOURS & AWARDS (#awards)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="awards"
        style={{
          padding: "100px 36px",
          background: "linear-gradient(180deg, #011128 0%, #000c1e 100%)",
          borderTop: "1px solid rgba(225, 174, 88, 0.15)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              National &amp; Global Accolades
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              10 Honours &amp;{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Recognitions</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
              Conferred across Delhi, Jaipur, Nepal, and Bhutan celebrating over a decade and a half of excellence.
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 26, marginBottom: 40 }}>
            {awards.map((a, idx) => (
              <div key={idx} className="glass" style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(225, 174, 88, 0.22)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                {a.image && (
                  <div style={{ width: "100%", height: 210, overflow: "hidden", position: "relative" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={a.image} alt={a.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    <div style={{ position: "absolute", bottom: 10, left: 12, background: "rgba(1,17,40,0.85)", backdropFilter: "blur(8px)", borderRadius: 100, padding: "4px 12px", fontSize: 11, color: "#e1ae58", fontWeight: 700, border: "1px solid rgba(225,174,88,0.3)" }}>
                      📸 {a.tag || "Ceremony Stage"}
                    </div>
                  </div>
                )}
                <div style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", background: "rgba(225,174,88,0.1)", padding: "2px 8px", borderRadius: 100 }}>
                      {a.year}
                    </span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>📍 {a.location}</span>
                  </div>
                  <h3 style={{ fontSize: 17.5, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{a.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.60)", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/awards" className="btn-gold" style={{ padding: "12px 30px", fontSize: 13.5, borderRadius: 9999 }}>
              View Dedicated Honours &amp; Awards Page &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6: GALLERY & LIVE VIDEOS (#media)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="media"
        style={{
          padding: "100px 36px",
          background: "#011128",
          borderTop: "1px solid rgba(225, 174, 88, 0.15)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Visual Proof &amp; Media Archive
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              Moments of{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Distinction &amp; Convocations</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
              Real stage photography, red carpets, international delegations, and live ceremony videos.
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 0" }} />
          </div>

          {/* Video Spotlight Player */}
          <div className="glass" style={{ borderRadius: 22, overflow: "hidden", border: "1.5px solid rgba(225, 174, 88, 0.35)", marginBottom: 44 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 0 }} className="two-col">
              <div style={{ height: 360, background: "#000c1e" }}>
                <video
                  controls
                  preload="metadata"
                  poster="/images/gallery/award-iconic-business.jpg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="/videos/award-video-01.mp4" type="video/mp4" />
                  Your browser does not support video.
                </video>
              </div>
              <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>
                  Featured Event Spotlight
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
                  Award Ceremony Felicitation &amp; Keynote
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>
                  Witness live stage conferment, award presentations, and inspiring addresses before thousands of educators, entrepreneurs, and students.
                </p>
                <Link href="/media" className="btn-gold" style={{ alignSelf: "flex-start", padding: "11px 24px", fontSize: 13, borderRadius: 9999 }}>
                  Watch All 7 Event Videos &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginBottom: 36 }}>
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="glass"
                onClick={() => setSelectedImage(item.src)}
                style={{ borderRadius: 18, overflow: "hidden", border: "1px solid rgba(225, 174, 88, 0.2)", cursor: "pointer" }}
              >
                <div style={{ height: 230, width: "100%", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(1,17,40,0.8)", borderRadius: 100, padding: "3px 10px", fontSize: 11, color: "#e1ae58" }}>
                    🔍 Zoom
                  </div>
                </div>
                <div style={{ padding: "16px 20px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", textTransform: "uppercase" }}>{item.tag}</div>
                  <h4 style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", marginTop: 2 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link href="/media" className="btn-outline" style={{ padding: "12px 30px", fontSize: 13.5, borderRadius: 9999 }}>
              View Complete 32+ Photo &amp; Video Media Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7: CHRONOLOGICAL JOURNEY (#journey)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="journey"
        style={{
          padding: "100px 36px",
          background: "linear-gradient(180deg, #000c1e 0%, #011128 100%)",
          borderTop: "1px solid rgba(225, 174, 88, 0.15)",
        }}
      >
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              15+ Years Evolution
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              Chronological{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Milestones</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
              From founding AIIMES in 2009 to international tech ventures and national distinctions in 2026.
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 0" }} />
          </div>

          <div style={{ position: "relative", paddingLeft: 46 }}>
            <div style={{
              position: "absolute", left: 16, top: 10, bottom: 20, width: 2,
              background: "linear-gradient(to bottom, #e1ae58 0%, #a78bfa 50%, #4f8ef7 100%)",
              opacity: 0.6,
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {timeline.map((m, idx) => (
                <div key={idx} style={{ position: "relative" }}>
                  <div style={{
                    position: "absolute", left: -46, top: 18, width: 22, height: 22, borderRadius: "50%",
                    background: "#011128", border: `3px solid ${m.color}`, boxShadow: `0 0 16px ${m.color}80`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                  </div>

                  <div className="glass" style={{ padding: "26px 28px", borderRadius: 18, border: "1px solid rgba(225,174,88,0.18)" }}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: m.color, fontFamily: "var(--font-display)", marginBottom: 4 }}>
                      {m.year}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{m.title}</h3>
                    <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 8: CONNECT & INQUIRY FORM (#connect)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="connect"
        style={{
          padding: "100px 36px 120px",
          background: "#000c1e",
          borderTop: "1px solid rgba(225, 174, 88, 0.18)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Direct Executive Desk
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, marginBottom: 12 }}>
              Get in Touch with{" "}
              <span style={{
                background: "linear-gradient(120deg, #9f7228, #e1ae58, #fae3a6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Dr. Vikram Singh Chauhan</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
              Corporate Training, Business Coaching, Institution Governance, Tech Partnerships, and Speaking Requests.
            </p>
            <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #d19a40, #e1ae58)", margin: "18px auto 22px" }} />

            {/* Quick Contact Bar shifted from Hero */}
            <div style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: 16,
              alignItems: "center",
              justifyContent: "center",
              padding: "9px 22px",
              borderRadius: 100,
              background: "rgba(2, 23, 53, 0.65)",
              border: "1px solid rgba(225, 174, 88, 0.25)",
              fontSize: 12,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.03em",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
            }}>
              <span>New Delhi, India – 110043</span>
              <span style={{ color: "rgba(225,174,88,0.4)" }}>•</span>
              <a href="tel:+918810310758" style={{ color: "#fae3a6", textDecoration: "none", fontWeight: 700 }}>+91 8810310758</a>
              <span style={{ color: "rgba(225,174,88,0.4)" }}>•</span>
              <a href="mailto:drvikramsinghchauhan@gmail.com" style={{ color: "#fae3a6", textDecoration: "none", fontWeight: 700 }}>drvikramsinghchauhan@gmail.com</a>
            </div>
          </div>

          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: 50, alignItems: "start" }}>
            {/* Left Office Info */}
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Official Contact Info</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
                Connect directly with Dr. Chauhan&apos;s executive team for priority consultations.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
                <div className="glass" style={{ display: "flex", gap: 16, padding: "18px 22px", borderRadius: 14, border: "1px solid rgba(225,174,88,0.2)" }}>
                  <span style={{ fontSize: 22 }}>📍</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", textTransform: "uppercase" }}>Location</div>
                    <div style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", marginTop: 2 }}>New Delhi, India – 110043</div>
                  </div>
                </div>
                <div className="glass" style={{ display: "flex", gap: 16, padding: "18px 22px", borderRadius: 14, border: "1px solid rgba(225,174,88,0.2)" }}>
                  <span style={{ fontSize: 22 }}>📞</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", textTransform: "uppercase" }}>Direct Phone / WhatsApp</div>
                    <a href="tel:+918810310758" style={{ fontSize: 15, fontWeight: 700, color: "#fff", textDecoration: "none", display: "block", marginTop: 2 }}>+91 8810310758</a>
                  </div>
                </div>
                <div className="glass" style={{ display: "flex", gap: 16, padding: "18px 22px", borderRadius: 14, border: "1px solid rgba(225,174,88,0.2)" }}>
                  <span style={{ fontSize: 22 }}>✉️</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#e1ae58", textTransform: "uppercase" }}>Direct Email</div>
                    <a href="mailto:drvikramsinghchauhan@gmail.com" style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", textDecoration: "none", display: "block", marginTop: 2 }}>drvikramsinghchauhan@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="glass" style={{ padding: "36px 34px", borderRadius: 22, border: "1.5px solid rgba(225, 174, 88, 0.28)" }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>Send an Executive Message</h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, marginBottom: 24 }}>
                Fill in your details below and Dr. Chauhan&apos;s office will review your inquiry promptly.
              </p>

              {status === "done" ? (
                <div style={{ padding: "36px 20px", textAlign: "center", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 16 }}>
                  <div style={{ fontSize: 40, marginBottom: 10 }}>✅</div>
                  <h4 style={{ fontSize: 19, fontWeight: 800, color: "#34d399", marginBottom: 8 }}>Inquiry Received Successfully!</h4>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13.5, lineHeight: 1.7, marginBottom: 18 }}>
                    Thank you. Your message has been routed to Dr. Vikram Singh Chauhan&apos;s executive desk.
                  </p>
                  <button onClick={() => { setForm({ name: "", email: "", phone: "", org: "", type: "Corporate Training Inquiry", message: "" }); setStatus("idle"); }} className="btn-gold" style={{ padding: "10px 24px", fontSize: 13, borderRadius: 9999 }}>
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#e1ae58", marginBottom: 5, textTransform: "uppercase" }}>Full Name *</label>
                      <input type="text" placeholder="e.g. Rajesh Kumar" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle("name")} />
                      {errors.name && <span style={{ color: "#ef4444", fontSize: 11, marginTop: 4, display: "block" }}>{errors.name}</span>}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#e1ae58", marginBottom: 5, textTransform: "uppercase" }}>Email Address *</label>
                      <input type="email" placeholder="name@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle("email")} />
                      {errors.email && <span style={{ color: "#ef4444", fontSize: 11, marginTop: 4, display: "block" }}>{errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="two-col">
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 5, textTransform: "uppercase" }}>Mobile Number</label>
                      <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle("phone")} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 5, textTransform: "uppercase" }}>Company / Organization</label>
                      <input type="text" placeholder="Institution Name" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} style={inputStyle("org")} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#e1ae58", marginBottom: 5, textTransform: "uppercase" }}>Purpose of Inquiry</label>
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ ...inputStyle("type"), cursor: "pointer", background: "#011128" }}>
                      <option value="Corporate Training Inquiry">Corporate Training Inquiry</option>
                      <option value="Executive Business Coaching">Executive Business Coaching</option>
                      <option value="Institution Building Advisory">Institution Building Advisory</option>
                      <option value="AI & Technology Solutions (Vexter / MetaSynexa)">AI &amp; Technology Solutions (Vexter / MetaSynexa)</option>
                      <option value="Keynote / Speaking Engagement">Keynote / Speaking Engagement</option>
                      <option value="Strategic Partnership / Joint Venture">Strategic Partnership / Joint Venture</option>
                      <option value="Indian Excellence Council (IEC) Inquiries">Indian Excellence Council (IEC) Inquiries</option>
                      <option value="General Media & Press">General Media &amp; Press</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 11.5, fontWeight: 700, color: "#e1ae58", marginBottom: 5, textTransform: "uppercase" }}>Message Details *</label>
                    <textarea rows={4} placeholder="Please outline the scope of collaboration, training needs, or advisory mandate..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle("message"), resize: "vertical" }} />
                    {errors.message && <span style={{ color: "#ef4444", fontSize: 11, marginTop: 4, display: "block" }}>{errors.message}</span>}
                  </div>

                  <button type="submit" disabled={status === "sending"} className="btn-gold" style={{ padding: "14px", fontSize: 14, fontWeight: 700, width: "100%", borderRadius: 9999, cursor: status === "sending" ? "wait" : "pointer" }}>
                    {status === "sending" ? "Dispatching Message..." : "Submit Inquiry to Dr. Chauhan →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODAL LIGHTBOX ── */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(1,17,40,0.95)", backdropFilter: "blur(16px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24, cursor: "zoom-out",
          }}
        >
          <div style={{ maxWidth: 1000, maxHeight: "90vh", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Enlarged view"
              style={{ maxWidth: "100%", maxHeight: "88vh", borderRadius: 16, border: "2px solid rgba(225,174,88,0.45)", boxShadow: "0 25px 80px rgba(0,0,0,0.85)", display: "block" }}
            />
            <div style={{ position: "absolute", top: -36, right: 0, color: "#e1ae58", fontSize: 13, fontWeight: 700 }}>
              ✕ Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
