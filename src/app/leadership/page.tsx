import type { Metadata } from "next";
import Link from "next/link";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: "Leadership & Competencies",
  description:
    "Explore Dr. Vikram Singh Chauhan's Core Leadership Competencies, Strategic Frameworks, and Corporate Coaching Philosophy across Education, Healthcare, and Technology.",
};

const pillars = [
  {
    num: "01",
    title: "Executive Leadership & Institution Building",
    accent: "#4f8ef7",
    icon: "🏛️",
    desc: "Over 15 years designing academic governance, board steering, and sustainable institution frameworks. Dr. Chauhan architects organizations that outlast market cycles, with high institutional compliance, academic integrity, and societal empowerment at their foundation.",
    points: [
      "Higher Education Management & Governance",
      "Academic Administration & Curriculum Delivery",
      "Strategic Planning & Long-Term Institutional Vision",
      "Change Management & Culture of Accountability",
    ],
  },
  {
    num: "02",
    title: "Business Development & Brand Strategy",
    accent: "#f0c84a",
    icon: "📈",
    desc: "Combining analytical discipline with entrepreneurial drive to scale ventures from concept to nationwide footprint. Demonstrating mastery across pharmaceutical sales, education marketing, private-label manufacturing, and institutional partnerships.",
    points: [
      "Multi-Sector Entrepreneurship & Scaling",
      "Nationwide Sales & Marketing Architecture",
      "Strategic Alliances & Cross-Border Joint Ventures",
      "Brand Equity & Market Positioning",
    ],
  },
  {
    num: "03",
    title: "Technology & AI Innovation",
    accent: "#06b6d4",
    icon: "🤖",
    desc: "Championing next-generation enterprise technology. From AI-driven automation workflows and FinTech infrastructure to cloud-native ERP/CRM implementations, ensuring every organization stays ahead in the digital era.",
    points: [
      "Artificial Intelligence & Machine Learning Integration",
      "Digital Transformation & Business Automation",
      "Cloud ERP & CRM Systems for Modern Enterprises",
      "FinTech, Blockchain & Investment Technology",
    ],
  },
  {
    num: "04",
    title: "Corporate Training & Leadership Coaching",
    accent: "#a78bfa",
    icon: "🎯",
    desc: "With doctoral research specialized in Corporate Training Management (DPS), Dr. Chauhan equips CXOs, managers, and educators with actionable tools to enhance decision-making, team synergy, and operational excellence.",
    points: [
      "Doctoral Research in Training Management",
      "Executive & High-Performance Team Coaching",
      "Curriculum Design for Emerging Industry Skills",
      "Keynote Addresses & Transformative Masterclasses",
    ],
  },
];

const competencyGroups = [
  {
    category: "Executive Leadership & Education",
    icon: "🎓",
    color: "#4f8ef7",
    skills: [
      "Executive Leadership",
      "Higher Education Management",
      "Corporate Governance",
      "Academic Administration",
      "Strategic Planning",
      "Curriculum Development",
      "Organizational Development",
      "Corporate Training",
      "Change Management",
      "Leadership Development",
    ],
  },
  {
    category: "Business & Strategy",
    icon: "💼",
    color: "#f0c84a",
    skills: [
      "Entrepreneurship",
      "Business Development",
      "Sales & Marketing Strategy",
      "Brand Development",
      "Strategic Partnerships",
      "Market Expansion",
      "Resource Optimization",
      "Joint Venture Structuring",
    ],
  },
  {
    category: "Technology & Innovation",
    icon: "⚡",
    color: "#34d399",
    skills: [
      "Artificial Intelligence",
      "Digital Transformation",
      "Innovation Management",
      "Business Automation",
      "Digital Business Strategy",
      "Enterprise ERP & CRM",
      "FinTech Architecture",
      "Cloud Integration",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <section
      style={{
        padding: "100px 36px 120px",
        background: "linear-gradient(180deg, #06091a 0%, #04060f 50%, #0b1028 100%)",
        minHeight: "calc(100vh - 72px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Stars count={35} />

      <div style={{ maxWidth: 1140, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 68 }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            Leadership Competencies
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 14 }}>
            Strategic Leadership &amp;{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Executive Vision</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
            A comprehensive leadership framework refined over 15+ years of building institutions, mentoring executives, and driving multi-sector technological progress.
          </p>
          <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "18px auto 0" }} />
        </div>

        {/* ── Philosophy Highlight ── */}
        <div className="glass" style={{
          padding: "32px 38px", borderRadius: 20, marginBottom: 64,
          border: "1px solid rgba(240,200,74,0.30)",
          background: "linear-gradient(135deg, rgba(201,146,14,0.06) 0%, rgba(6,9,26,0.9) 100%)",
          textAlign: "center",
        }}>
          <div style={{ color: "#f0c84a", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>
            Guiding Philosophy
          </div>
          <blockquote style={{ fontSize: "clamp(17px, 2.2vw, 22px)", color: "#fff", fontWeight: 600, fontStyle: "italic", lineHeight: 1.6, maxWidth: 860, margin: "0 auto 12px" }}>
            &ldquo;True leadership is measured not by the organizations we build, but by the people we empower, the institutions we strengthen, and the lasting value we create for society.&rdquo;
          </blockquote>
          <div style={{ color: "rgba(240,200,74,0.8)", fontSize: 13, fontWeight: 700 }}>
            — Dr. Vikram Singh Chauhan
          </div>
        </div>

        {/* ── 4 Pillars of Leadership ── */}
        <div style={{ marginBottom: 70 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>
              The Four Pillars of Executive Practice
            </h2>
            <div style={{ width: 44, height: 2, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "12px auto 0" }} />
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 26,
          }}>
            {pillars.map((p) => (
              <div
                key={p.num}
                className="glass"
                style={{
                  borderRadius: 20, padding: "34px 30px",
                  border: "1px solid rgba(201,146,14,0.16)",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${p.accent}, transparent)`,
                }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <span style={{
                    fontSize: 12, fontWeight: 800, color: p.accent,
                    background: `${p.accent}18`, padding: "3px 10px", borderRadius: 100,
                  }}>
                    PILLAR {p.num}
                  </span>
                </div>

                <h3 style={{ fontSize: 19, fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 13.5, lineHeight: 1.75, marginBottom: 20 }}>
                  {p.desc}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  {p.points.map((pt, idx) => (
                    <div key={idx} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 12.5, color: "rgba(255,255,255,0.78)" }}>
                      <span style={{ color: p.accent, fontSize: 10 }}>▸</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Competency Matrix Breakdown ── */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Core Leadership Competencies
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: "#fff" }}>
              Competency Matrix by Sector
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24,
          }}>
            {competencyGroups.map((grp, i) => (
              <div key={i} className="glass" style={{
                borderRadius: 18, padding: "30px 28px",
                border: "1px solid rgba(201,146,14,0.18)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                  <span style={{ fontSize: 24 }}>{grp.icon}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff" }}>
                    {grp.category}
                  </h3>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {grp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 500,
                        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Link ── */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/connect" className="btn-gold" style={{ padding: "13px 32px", fontSize: 14 }}>
            Inquire for Corporate Training or Coaching →
          </Link>
        </div>

      </div>
    </section>
  );
}
