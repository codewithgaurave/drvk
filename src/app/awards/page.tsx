import type { Metadata } from "next";
import Link from "next/link";
import Stars from "@/components/Stars";

export const metadata: Metadata = {
  title: "Honours & Recognitions",
  description:
    "Explore the national and international honours, awards, and recognitions conferred upon Dr. Vikram Singh Chauhan for excellence in education, entrepreneurship, and institutional leadership.",
};

const awards = [
  {
    year: "2026",
    title: "National School Award",
    location: "Delhi, India",
    category: "Education Leadership",
    icon: "🏆",
    scope: "National",
    tag: "NSA Conclave Stage",
    image: "/images/gallery/award-national-school.jpg",
    description: "Recognized for exemplary contributions to reforming and advancing school education standards, flexible curriculum delivery, and academic excellence across India.",
  },
  {
    year: "2026",
    title: "Education Entrepreneur Award",
    location: "Delhi, India",
    category: "Entrepreneurship",
    icon: "🎖️",
    scope: "National",
    tag: "National Trophy Presentation",
    image: "/images/gallery/award-education-entrepreneur.jpg",
    description: "Conferred for groundbreaking visionary work in establishing sustainable education institutions and scaling skill-oriented training programs.",
  },
  {
    year: "2026",
    title: "Bharat Bhushan National Award",
    location: "Delhi, India",
    category: "National Distinction",
    icon: "🌟",
    scope: "National",
    tag: "Celebrity Stage Felicitation",
    image: "/images/gallery/award-golden-crown-stage.jpg",
    description: "A prestigious national honour celebrating selfless commitment, institution building, and dedicated service to national educational and socioeconomic development.",
  },
  {
    year: "2026",
    title: "Bharat Sewa Ratna Award",
    location: "Jaipur, Rajasthan",
    category: "Social & Professional Service",
    icon: "🏅",
    scope: "National",
    tag: "Medals & Conclave Ceremony",
    image: "/images/gallery/award-bharat-sewa-ratna.jpg",
    description: "Awarded in appreciation of outstanding community empowerment, social impact, and multi-sector institutional leadership benefiting thousands of learners.",
  },
  {
    year: "2025",
    title: "The Iconic Business Award",
    location: "Delhi, India",
    category: "Business Leadership",
    icon: "👑",
    scope: "National",
    tag: "Iconic Business Summit",
    image: "/images/gallery/award-iconic-business.jpg",
    description: "Honouring visionary corporate leadership, business transformation, and sustainable scaling across technology, education, and healthcare domains.",
  },
  {
    year: "2025",
    title: "International Achievers Award",
    location: "Bhutan",
    category: "Global Impact",
    icon: "🌍",
    scope: "International",
    tag: "Global Summit Delegate",
    image: "/images/gallery/award-international-achievers.jpg",
    description: "International recognition bestowed in the Kingdom of Bhutan for cross-border institutional excellence, international collaborations, and leadership distinction.",
  },
  {
    year: "2025",
    title: "Rashtriya Gaurav Puraskar",
    location: "Delhi, India",
    category: "National Pride",
    icon: "🇮🇳",
    scope: "National",
    tag: "Armed Forces Officers Presentation",
    image: "/images/gallery/award-rashtriya-gaurav.jpg",
    description: "Bestowed upon exceptional individuals who have brought distinction and prestige to the nation through exemplary professional accomplishments.",
  },
  {
    year: "2025",
    title: "International Icon Award",
    location: "Nepal",
    category: "Global Leadership",
    icon: "🌏",
    scope: "International",
    tag: "International Honor Nepal",
    image: "/images/gallery/award-golden-crown.jpg",
    description: "Presented in Kathmandu, Nepal, honoring high-impact leadership in education development and international entrepreneurship ecosystems.",
  },
  {
    year: "2023",
    title: "Business Icon Award",
    location: "Delhi, India",
    category: "Industry Excellence",
    icon: "💎",
    scope: "National",
    tag: "Business Meet & Conclave",
    image: "/images/gallery/award-business-icon.jpg",
    description: "Recognizing outstanding business acumen, nationwide sales & marketing leadership, and entrepreneurial growth strategy.",
  },
  {
    year: "2021",
    title: "Rashtriya Shiksha Ratan Award",
    location: "Delhi, India",
    category: "Higher Education",
    icon: "🎓",
    scope: "National",
    tag: "Institutional Conclave Plaque",
    image: "/images/gallery/award-rashtriya-shiksha-ratan.jpg",
    description: "Conferred for stellar dedication to professional higher education, skill development programs, and academic institution governance.",
  },
];

export default function AwardsPage() {
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
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            Honours &amp; Accolades
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 14 }}>
            Recognitions of{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Excellence &amp; Impact</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            A distinguished track record of 10 prestigious national and international honours celebrating over 15 years of institution building, visionary education reform, and corporate leadership.
          </p>
          <div style={{ width: 64, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "20px auto 0" }} />
        </div>

        {/* ── Summary Counters ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20,
          marginBottom: 56,
        }}>
          {[
            { num: "10+", label: "Honours & Recognitions", desc: "Conferred Across Sectors" },
            { num: "2",   label: "International Awards",    desc: "Bhutan & Nepal Honors" },
            { num: "8",   label: "National Distinctions",   desc: "Delhi & Jaipur Convocations" },
            { num: "15+", label: "Years of Dedication",      desc: "To Institutional Growth" },
          ].map((item, i) => (
            <div key={i} className="glass" style={{
              padding: "24px 22px", borderRadius: 16, textAlign: "center",
              border: "1px solid rgba(201,146,14,0.18)",
            }}>
              <div style={{
                fontSize: 32, fontWeight: 800, fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, #f0c84a, #c9920e)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                {item.num}
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginTop: 4 }}>{item.label}</div>
              <div style={{ color: "rgba(255,255,255,0.42)", fontSize: 11, marginTop: 2 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* ── Awards Grid with Embedded Live Ceremony Photos ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 26,
        }}>
          {awards.map((a, idx) => (
            <div
              key={idx}
              className="glass"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(201,146,14,0.18)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
            >
              {a.image && (
                <div style={{ width: "100%", height: 210, overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image}
                    alt={a.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 10, left: 12,
                    background: "rgba(4,6,15,0.85)", backdropFilter: "blur(8px)",
                    borderRadius: 100, padding: "4px 12px", fontSize: 11,
                    color: "#f0c84a", fontWeight: 700, border: "1px solid rgba(240,200,74,0.3)",
                  }}>
                    📸 {a.tag || "Live Ceremony Stage"}
                  </div>
                </div>
              )}

              <div style={{ padding: "26px 26px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "rgba(240,200,74,0.08)",
                    border: "1px solid rgba(240,200,74,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20,
                  }}>
                    {a.icon}
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                      background: a.scope === "International" ? "rgba(99,102,241,0.15)" : "rgba(240,200,74,0.12)",
                      border: `1px solid ${a.scope === "International" ? "rgba(99,102,241,0.4)" : "rgba(240,200,74,0.3)"}`,
                      color: a.scope === "International" ? "#a5b4fc" : "#f0c84a",
                    }}>
                      {a.scope}
                    </span>
                    <span style={{
                      padding: "3px 10px", borderRadius: 100, fontSize: 11, fontWeight: 700,
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.75)",
                    }}>
                      {a.year}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, fontSize: 12 }}>
                  <span style={{ color: "#f0c84a", fontWeight: 600 }}>📍 {a.location}</span>
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>•</span>
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>{a.category}</span>
                </div>

                <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 13.5, lineHeight: 1.75 }}>
                  {a.description}
                </p>
              </div>

              <div style={{
                padding: "14px 26px 18px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: 11, color: "rgba(240,200,74,0.7)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Verified Citation
                </span>
                <Link href="/media" style={{ fontSize: 11.5, color: "#f0c84a", textDecoration: "none" }}>
                  View Event Photos &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Link ── */}
        <div style={{ textAlign: "center", marginTop: 54, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <Link href="/media" className="btn-gold" style={{ padding: "12px 30px", fontSize: 14 }}>
            Explore Full Visual Media Gallery →
          </Link>
          <a
            href="/dr-vikram-singh-chauhan-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Dr_Vikram_Singh_Chauhan_Profile.pdf"
            className="btn-outline"
            style={{ padding: "12px 26px", fontSize: 14 }}
          >
            Download Verified Dossier (PDF) 📥
          </a>
        </div>

      </div>
    </section>
  );
}
