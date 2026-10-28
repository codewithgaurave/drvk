import type { Metadata } from "next";
import Link from "next/link";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: "Organizations",
  description:
    "Explore the 6 multi-sector organizations founded, led, and governed by Dr. Vikram Singh Chauhan across Education, Healthcare, Technology, FinTech, and National Excellence.",
};

const organizations = [
  {
    id: "aiimes",
    initials: "AIIMES",
    name: "AIIMES",
    fullName: "All India Institute of Management & Engineering Studies",
    role: "Founder & Chairman",
    period: "2009 – Present",
    sector: "Higher & Professional Education",
    accentColor: "#4f8ef7",
    website: "http://www.aiimes.in/",
    icon: "🎓",
    description:
      "Provides strategic leadership for one of India's emerging professional education institutions, overseeing academic governance, institutional development, quality assurance, examination systems, curriculum planning, and industry collaboration. Continues to drive innovation in professional education with a focus on quality, accessibility, and skill development.",
    focusAreas: [
      "Academic Governance & Accreditation",
      "Institutional Quality Assurance",
      "Curriculum Planning & Industry Alignment",
      "Examination Systems Management",
      "Skill Development Frameworks",
    ],
  },
  {
    id: "nobse",
    initials: "NOBSE",
    name: "NOBSE",
    fullName: "National Open Board of School Education",
    role: "Founder & Chairman",
    period: "2014 – Present",
    sector: "School Education & Open Learning",
    accentColor: "#f59e0b",
    website: "http://www.nobse.in/",
    icon: "🏫",
    description:
      "Leads institutional governance, academic administration, curriculum development, examination management, learner support services, and strategic educational initiatives. Dedicated to expanding access to flexible and inclusive education through modern academic practices.",
    focusAreas: [
      "Open & Flexible Schooling Systems",
      "Inclusive Education Outreach",
      "Examination & Assessment Logistics",
      "Learner Support & Digital Portals",
      "Strategic Academic Expansion",
    ],
  },
  {
    id: "aryapharma",
    initials: "ARYA",
    name: "ARYA PHARMA",
    fullName: "Arya Pharma Healthcare & Nutraceuticals",
    role: "National Head – Sales & Marketing",
    period: "2017 – Present",
    sector: "Healthcare & Pharmaceuticals",
    accentColor: "#10b981",
    website: "http://www.aryapharma.co.in/",
    icon: "🩺",
    description:
      "Directs nationwide sales and marketing operations, business expansion, strategic alliances, private-label nutraceutical manufacturing initiatives, and brand development. Focused on strengthening market presence while supporting sustainable healthcare business growth across India.",
    focusAreas: [
      "Nationwide Pharma Distribution Network",
      "Sales Force Architecture & Strategy",
      "Private-Label Nutraceutical Lines",
      "Strategic Healthcare Alliances",
      "Brand Equity & Market Penetration",
    ],
  },
  {
    id: "vexter",
    initials: "VEXTER",
    name: "VEXTER TECHNOLOGIES",
    fullName: "Vexter Technologies Enterprise Suite",
    role: "Founder & Chief Executive Officer",
    period: "2023 – Present",
    sector: "Enterprise AI & Cloud Software",
    accentColor: "#06b6d4",
    website: "http://www.vextertech.com/",
    icon: "⚡",
    description:
      "Provides executive leadership in Artificial Intelligence, enterprise software, ERP & CRM solutions, cloud computing, blockchain technologies, FinTech, business automation, and digital transformation. Driving innovation through technology-enabled business solutions for modern enterprises.",
    focusAreas: [
      "Artificial Intelligence & Machine Learning",
      "Custom ERP & CRM Enterprise Architectures",
      "Cloud Infrastructure & DevOps",
      "Business Automation & Workflow Engines",
      "FinTech & Decentralized Solutions",
    ],
  },
  {
    id: "metasynexa",
    initials: "META",
    name: "METASYNEXA GLOBAL",
    fullName: "MetaSynexa Global Pvt. Ltd.",
    role: "Founder & Chief Executive Officer",
    period: "2026 – Present",
    sector: "Strategic Consulting & Global FinTech",
    accentColor: "#a78bfa",
    website: "https://www.metasynexa.ae/",
    icon: "🌐",
    description:
      "Leading strategic consulting, AI-powered business solutions, financial technology, digital innovation, business automation, investment technology solutions, and international business development while building next-generation technology-driven business ecosystems.",
    focusAreas: [
      "International Business Development",
      "Strategic Corporate Consulting",
      "AI-Powered FinTech Architectures",
      "Investment Technology Solutions",
      "Global Enterprise Synergy",
    ],
  },
  {
    id: "iec",
    initials: "IEC",
    name: "INDIAN EXCELLENCE COUNCIL",
    fullName: "IEC – Indian Excellence Council",
    role: "Founder & Chairman",
    period: "2026 – Present",
    sector: "Excellence Initiatives & Awards",
    accentColor: "#f0c84a",
    website: "https://www.iecawards.in/",
    icon: "🏆",
    description:
      "Provides strategic direction for national excellence initiatives, leadership development programs, institutional recognition, professional awards, conferences, honorary recognition, and international collaborations aimed at promoting excellence across education, healthcare, entrepreneurship, technology, and social development.",
    focusAreas: [
      "National Excellence Awards & Summits",
      "Institutional Recognition & Accreditations",
      "Leadership Development Convocations",
      "International Cross-Border Collaborations",
      "Social Impact Distinction",
    ],
  },
];

export default function OrganizationsPage() {
  return (
    <section
      style={{
        padding: "100px 36px 120px",
        background: "linear-gradient(180deg, #04060f 0%, #06091a 50%, #04060f 100%)",
        minHeight: "calc(100vh - 72px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stars count={40} />

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            Institutional Portfolio
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 14 }}>
            6 Multi-Sector{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Organizations</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 650, margin: "0 auto", lineHeight: 1.7 }}>
            Under Dr. Vikram Singh Chauhan&apos;s visionary stewardship, these six institutions span higher education, open schooling, pharmaceuticals, enterprise AI software, strategic FinTech, and national leadership councils.
          </p>
          <div style={{ width: 64, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "18px auto 0" }} />
        </div>

        {/* ── Organizations Cards List ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {organizations.map((org, idx) => (
            <article
              key={org.id}
              className="glass"
              style={{
                borderRadius: 22,
                padding: "40px 42px",
                border: "1px solid rgba(201,146,14,0.18)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Left Accent Bar */}
              <div style={{
                position: "absolute", top: 0, bottom: 0, left: 0, width: 4,
                background: `linear-gradient(to bottom, ${org.accentColor}, transparent)`,
              }} />

              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 36, alignItems: "start" }} className="two-col">
                {/* Left Side: Info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 26 }}>{org.icon}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100,
                      background: `${org.accentColor}18`, border: `1px solid ${org.accentColor}40`,
                      color: org.accentColor, letterSpacing: "0.08em", textTransform: "uppercase",
                    }}>
                      {org.sector}
                    </span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                      {org.period}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                    {org.fullName}
                  </h2>

                  <div style={{ fontSize: 14, color: "#f0c84a", fontWeight: 700, marginBottom: 16 }}>
                    {org.role}
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 14.5, lineHeight: 1.82, marginBottom: 20 }}>
                    {org.description}
                  </p>

                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      fontSize: 13, padding: "10px 22px", borderRadius: 8,
                    }}
                  >
                    <span>Visit Official Website</span>
                    <span style={{ fontSize: 14 }}>↗</span>
                  </a>
                </div>

                {/* Right Side: Key Focus Areas Box */}
                <div style={{
                  background: "rgba(6,9,26,0.65)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "24px 26px",
                }}>
                  <div style={{
                    fontSize: 11.5, fontWeight: 700, color: "#f0c84a",
                    letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14,
                  }}>
                    Key Mandates &amp; Focus
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {org.focusAreas.map((focus, i) => (
                      <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "rgba(255,255,255,0.80)" }}>
                        <span style={{ color: org.accentColor, fontSize: 12 }}>✓</span>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: 20, paddingTop: 14,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.4)",
                  }}>
                    <span>Entity #{String(idx + 1).padStart(2, "0")}</span>
                    <span>Executive Leadership</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom Link ── */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/journey" className="btn-outline" style={{ padding: "12px 30px", fontSize: 14 }}>
            Explore Dr. Chauhan&apos;s Chronological Journey &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
