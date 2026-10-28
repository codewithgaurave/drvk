import type { Metadata } from "next";
import Link from "next/link";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: "Professional Journey",
  description:
    "A chronological timeline of Dr. Vikram Singh Chauhan's 15+ years of institutional milestones, doctoral achievements, multi-sector entrepreneurship, and national & international honours.",
};

const timeline = [
  {
    year: "2026",
    period: "Present Era",
    tag: "Global Tech & Council Leadership",
    color: "#a78bfa",
    title: "METASYNEXA GLOBAL & Indian Excellence Council (IEC)",
    role: "Founder & CEO / Founder & Chairman",
    desc: "Established MetaSynexa Global Pvt. Ltd. (UAE/International) for strategic FinTech, AI solutions, and international business ecosystems. Concurrently founded the Indian Excellence Council (IEC) to lead national recognitions, excellence summits, and leadership development.",
    achievements: [
      "Founded MetaSynexa Global Pvt. Ltd. (metasynexa.ae)",
      "Founded Indian Excellence Council (iecawards.in)",
      "Conferred Bharat Bhushan National Award (Delhi)",
      "Conferred National School Award & Education Entrepreneur Award",
      "Conferred Bharat Sewa Ratna Award (Jaipur)",
    ],
  },
  {
    year: "2025",
    period: "International Distinction",
    tag: "Global Honours & Cross-Border Alliances",
    color: "#34d399",
    title: "International Icon & Achiever Accolades",
    role: "Global Leader & Multi-Sector Entrepreneur",
    desc: "Deepened international institutional ties across South Asia. Bestowed multiple prestigious cross-border honors in recognition of educational leadership and entrepreneurial vision.",
    achievements: [
      "International Achievers Award (Bhutan)",
      "International Icon Award (Nepal)",
      "The Iconic Business Award (Delhi)",
      "Rashtriya Gaurav Puraskar (Delhi)",
    ],
  },
  {
    year: "2024",
    period: "Doctoral Milestone",
    tag: "Advanced Research",
    color: "#f0c84a",
    title: "Doctorate in Professional Studies (DPS)",
    role: "Doctoral Scholar & Corporate Trainer",
    desc: "Completed advanced Doctorate in Professional Studies (DPS) focusing on Corporate Training Management at AIIMES, New Delhi. Synthesized high-impact frameworks for workforce capability and executive coaching.",
    achievements: [
      "Awarded DPS in Corporate Training Management",
      "Pioneered executive training methodologies",
      "Empowered corporate leaders across India",
    ],
  },
  {
    year: "2023",
    period: "Enterprise Technology Expansion",
    tag: "AI & Software Innovation",
    color: "#06b6d4",
    title: "Founded VEXTER TECHNOLOGIES",
    role: "Founder & Chief Executive Officer",
    desc: "Launched Vexter Technologies to deliver enterprise-grade Artificial Intelligence, cloud computing, ERP & CRM architectures, FinTech tools, and business automation software for modern scalable businesses.",
    achievements: [
      "Founded VEXTER TECHNOLOGIES (vextertech.com)",
      "Enterprise AI & CRM Software Suite launch",
      "Conferred Business Icon Award (Delhi)",
    ],
  },
  {
    year: "2021",
    period: "Management Doctorate & National Honour",
    tag: "Doctoral Excellence",
    color: "#f59e0b",
    title: "Doctorate in Management Studies (DMS) & Shiksha Ratan",
    role: "Doctor of Management",
    desc: "Conferred Doctorate in Management Studies (DMS) specializing in Sales & Marketing Management. Honored with the prestigious Rashtriya Shiksha Ratan Award in Delhi for distinguished services to professional education.",
    achievements: [
      "Awarded DMS in Sales & Marketing Management",
      "Conferred Rashtriya Shiksha Ratan Award (Delhi)",
      "Expanded industry-aligned higher education curricula",
    ],
  },
  {
    year: "2017",
    period: "Healthcare & Pharmaceuticals",
    tag: "Nationwide Market Leadership",
    color: "#10b981",
    title: "National Head — Sales & Marketing at ARYA PHARMA",
    role: "National Head – Sales & Marketing",
    desc: "Appointed to lead national sales, omnichannel distribution, marketing operations, and private-label nutraceutical manufacturing for Arya Pharma, establishing nationwide supply chain footprints.",
    achievements: [
      "Steered nationwide sales & pharma distribution networks",
      "Developed private-label nutraceutical business lines",
      "Forged key healthcare and distribution alliances",
    ],
  },
  {
    year: "2014",
    period: "Open Schooling Revolution",
    tag: "Secondary & Higher Secondary Education",
    color: "#eab308",
    title: "Founded NOBSE (National Open Board of School Education)",
    role: "Founder & Chairman",
    desc: "Established NOBSE to democratize school education, making flexible, credible, and student-centric academic pathways accessible to thousands of learners across diverse backgrounds in India.",
    achievements: [
      "Established NOBSE (nobse.in)",
      "Flexible curriculum & modern examination logistics",
      "Empowered thousands of school-age and adult learners",
    ],
  },
  {
    year: "2009",
    period: "Foundational Genesis",
    tag: "Institution Building",
    color: "#4f8ef7",
    title: "Founded AIIMES (Management & Engineering Studies)",
    role: "Founder & Chairman",
    desc: "Commenced his entrepreneurial and institution-building voyage by founding AIIMES in New Delhi. Laid the foundation for one of India's prominent skill development and professional higher education institutions.",
    achievements: [
      "Founded AIIMES (aiimes.in)",
      "Over 15 continuous years of academic governance",
      "Catalyzed career opportunities for emerging professionals",
    ],
  },
];

export default function JourneyPage() {
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

      <div style={{ maxWidth: 1040, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            15+ Years Timeline
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 14 }}>
            A Chronological{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Journey of Excellence</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            From founding AIIMES in 2009 to creating international technology ecosystems and being conferred 10 national and international awards.
          </p>
          <div style={{ width: 64, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "18px auto 0" }} />
        </div>

        {/* ── Timeline Track ── */}
        <div style={{ position: "relative", paddingLeft: 46 }}>
          {/* Vertical Golden Connecting Line */}
          <div style={{
            position: "absolute", left: 16, top: 10, bottom: 20, width: 2,
            background: "linear-gradient(to bottom, #f0c84a 0%, #a78bfa 50%, #4f8ef7 100%)",
            opacity: 0.6,
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {timeline.map((item, idx) => (
              <div key={idx} style={{ position: "relative" }}>
                {/* Timeline Dot */}
                <div style={{
                  position: "absolute", left: -46, top: 22,
                  width: 22, height: 22, borderRadius: "50%",
                  background: "#04060f",
                  border: `3px solid ${item.color}`,
                  boxShadow: `0 0 16px ${item.color}80`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
                </div>

                {/* Card */}
                <div
                  className="glass"
                  style={{
                    borderRadius: 20, padding: "32px 34px",
                    border: "1px solid rgba(201,146,14,0.18)",
                    position: "relative",
                  }}
                >
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                    flexWrap: "wrap", gap: 12, marginBottom: 12,
                  }}>
                    <div>
                      <span style={{
                        fontSize: 22, fontWeight: 900, color: item.color,
                        fontFamily: "var(--font-display)", marginRight: 12,
                      }}>
                        {item.year}
                      </span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 100,
                        background: `${item.color}18`, border: `1px solid ${item.color}40`,
                        color: item.color, textTransform: "uppercase",
                      }}>
                        {item.tag}
                      </span>
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{item.period}</span>
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: 13, color: "#f0c84a", fontWeight: 600, marginBottom: 14 }}>
                    {item.role}
                  </div>

                  <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 14, lineHeight: 1.78, marginBottom: 16 }}>
                    {item.desc}
                  </p>

                  <div style={{
                    paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", flexWrap: "wrap", gap: 8,
                  }}>
                    {item.achievements.map((ach, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 12, color: "rgba(255,255,255,0.85)",
                          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                          padding: "4px 12px", borderRadius: 8, display: "flex", alignItems: "center", gap: 6,
                        }}
                      >
                        <span style={{ color: item.color }}>•</span> {ach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Link ── */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <Link href="/connect" className="btn-gold" style={{ padding: "13px 32px", fontSize: 14 }}>
            Connect with Dr. Vikram Singh Chauhan &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
