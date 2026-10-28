import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Executive Profile, Education, Doctorates, Leadership Philosophy, and Areas of Expertise of Dr. Vikram Singh Chauhan — Multi-Sector Founder, Corporate Trainer & Business Coach.",
};

const expertiseList = [
  { title: "Institution Building", icon: "🏛️", desc: "Founding and scaling nationwide educational boards and academic institutes." },
  { title: "Executive Leadership", icon: "👑", desc: "Over 15 years directing multidisciplinary corporate and academic boards." },
  { title: "Corporate Training", icon: "📊", desc: "Doctoral research in corporate training management and workforce capability." },
  { title: "Business Coaching", icon: "🎯", desc: "Mentoring CXOs, entrepreneurs, and emerging leaders across sectors." },
  { title: "Artificial Intelligence", icon: "🤖", desc: "Deploying enterprise AI models, automation workflows, and FinTech tools." },
  { title: "Digital Transformation", icon: "⚡", desc: "Modernizing legacy business systems into agile, cloud-native operations." },
  { title: "Healthcare Business Dev", icon: "🩺", desc: "Directing nationwide pharma sales, nutraceutical lines, and distribution." },
  { title: "Brand & Market Strategy", icon: "📈", desc: "Strategic marketing, national brand positioning, and customer acquisition." },
  { title: "Higher Education Mgmt", icon: "🎓", desc: "Academic governance, examination frameworks, and curriculum design." },
  { title: "Strategic Partnerships", icon: "🤝", desc: "Cross-border alliances, institutional MOUs, and joint venture syndication." },
  { title: "Public Speaking", icon: "🎙️", desc: "Keynotes at national conferences, award summits, and industry panels." },
  { title: "Innovation Management", icon: "💡", desc: "Turning high-potential concepts into sustainable, profitable market solutions." },
];

export default function AboutPage() {
  return (
    <section
      style={{
        padding: "100px 36px 120px",
        background: "linear-gradient(180deg, #04060f 0%, #06091a 100%)",
        minHeight: "calc(100vh - 72px)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 68 }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            Executive Profile
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 12 }}>
            About{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Dr. Vikram Singh Chauhan</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 16, maxWidth: 620, margin: "0 auto" }}>
            Multi-Sector Founder · Corporate Trainer · Business Coach · Institution Builder
          </p>
          <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "18px auto 0" }} />
        </div>

        {/* ── Main Bio & Portrait Row ── */}
        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "start", marginBottom: 70 }}
        >
          {/* Left: Detailed Profile Narrative */}
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              Visionary Entrepreneur &amp; Institution Builder
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.88, color: "rgba(255,255,255,0.78)", marginBottom: 20 }}>
              <strong>Dr. Vikram Singh Chauhan</strong> is a visionary entrepreneur, institution builder, and executive leader with over <strong>15 years of experience</strong> across education, healthcare, technology, and business development. He is the founder and leader of multiple organizations dedicated to advancing professional education, digital transformation, healthcare innovation, and sustainable business growth.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "rgba(255,255,255,0.64)", marginBottom: 20 }}>
              Recognized for establishing high-impact institutions, leading multidisciplinary teams, developing strategic partnerships, and driving organizational excellence, he has committed his career to creating innovative, technology-driven ecosystems that empower individuals, strengthen institutions, and contribute to national development through quality education, ethical leadership, and business innovation.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.85, color: "rgba(255,255,255,0.64)", marginBottom: 32 }}>
              Across his flagship ventures — <strong>AIIMES</strong>, <strong>NOBSE</strong>, <strong>Arya Pharma</strong>, <strong>Vexter Technologies</strong>, <strong>MetaSynexa Global</strong>, and the <strong>Indian Excellence Council (IEC)</strong> — Dr. Chauhan continues to bridge industry needs with modern academic delivery, digital enterprise capabilities, and global expansion.
            </p>

            {/* Leadership Philosophy Box */}
            <div className="glass" style={{
              padding: "26px 30px", borderRadius: 16, borderLeft: "4px solid #f0c84a",
              background: "rgba(201,146,14,0.04)", marginBottom: 32,
            }}>
              <div style={{ color: "#f0c84a", fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 8 }}>
                Leadership Philosophy
              </div>
              <p style={{ color: "#fff", fontSize: 15.5, fontStyle: "italic", lineHeight: 1.75 }}>
                &ldquo;True leadership is measured not by the organizations we build, but by the people we empower, the institutions we strengthen, and the lasting value we create for society.&rdquo;
              </p>
              <div style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.50)", textAlign: "right" }}>
                — Dr. Vikram Singh Chauhan
              </div>
            </div>

            {/* Languages & Dossier CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Languages:</span>
              <span style={{
                padding: "4px 14px", borderRadius: 50, background: "rgba(201,146,14,0.1)",
                border: "1px solid rgba(201,146,14,0.25)", color: "#f0c84a", fontSize: 12.5, fontWeight: 600,
              }}>English</span>
              <span style={{
                padding: "4px 14px", borderRadius: 50, background: "rgba(201,146,14,0.1)",
                border: "1px solid rgba(201,146,14,0.25)", color: "#f0c84a", fontSize: 12.5, fontWeight: 600,
              }}>Hindi</span>
              <a
                href="/dr-vikram-singh-chauhan-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Dr_Vikram_Singh_Chauhan_Profile.pdf"
                style={{
                  color: "#f0c84a", fontSize: 13, fontWeight: 700, textDecoration: "none",
                  marginLeft: 10, display: "flex", alignItems: "center", gap: 6,
                }}
              >
                <span>📥</span> Download Dossier (PDF)
              </a>
            </div>
          </div>

          {/* Right: Authentic Portrait & Life Photo */}
          <div>
            <div className="glass" style={{
              borderRadius: 22, overflow: "hidden",
              border: "1px solid rgba(201,146,14,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              marginBottom: 20,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/portrait-mercedes-luxury.jpg"
                alt="Dr. Vikram Singh Chauhan"
                style={{ width: "100%", height: 380, objectFit: "cover", objectPosition: "center 20%", display: "block" }}
              />
              <div style={{ padding: "20px 24px" }}>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 2 }}>
                  Dr. Vikram Singh Chauhan
                </h3>
                <div style={{ color: "#f0c84a", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                  Multi-Sector Founder · Corporate Trainer
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12.5, color: "rgba(255,255,255,0.65)" }}>
                  <div>📍 <strong>Location:</strong> New Delhi, India – 110043</div>
                  <div>📞 <strong>Direct Contact:</strong> +91 8810310758</div>
                  <div>✉️ <strong>Email:</strong> drvikramsinghchauhan@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Quick Link to Gallery */}
            <div style={{ display: "flex", gap: 10 }}>
              <Link href="/media" className="btn-gold" style={{ flex: 1, textAlign: "center", padding: "11px 16px", fontSize: 12.5 }}>
                View 32+ Event Photos &rarr;
              </Link>
              <Link href="/awards" className="btn-outline" style={{ flex: 1, textAlign: "center", padding: "11px 16px", fontSize: 12.5 }}>
                10 Awards &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* ── DOCTORATES & ACADEMIC CREDENTIALS ── */}
        <div style={{ marginBottom: 70 }}>
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Academic Distinctions
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800 }}>
              Doctoral Qualifications &amp;{" "}
              <span style={{
                background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Research Degrees</span>
            </h2>
            <div style={{ width: 50, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "14px auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 28 }}>
            {/* Doctorate 1 */}
            <div className="glass" style={{
              borderRadius: 20, padding: "36px 32px",
              border: "1px solid rgba(201,146,14,0.22)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #f0c84a, transparent)",
              }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{
                  fontSize: 28, background: "rgba(240,200,74,0.1)",
                  padding: "10px", borderRadius: 14, border: "1px solid rgba(240,200,74,0.2)",
                }}>🎓</span>
                <span style={{
                  padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700,
                  background: "rgba(240,200,74,0.12)", color: "#f0c84a", border: "1px solid rgba(240,200,74,0.3)",
                }}>2024</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                DPS — Doctorate in Professional Studies
              </h3>
              <div style={{ fontSize: 13, color: "#f0c84a", fontWeight: 600, marginBottom: 14 }}>
                Research Area: Corporate Training Management
              </div>
              <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>
                Advanced research into organizational capability, adult learning pedagogies, performance coaching frameworks, and modern corporate training methodologies for multi-sector enterprises.
              </p>
              <div style={{
                paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)",
                fontSize: 12.5, color: "rgba(255,255,255,0.50)",
              }}>
                🏛️ <strong>Institution:</strong> AIIMES, New Delhi - India
              </div>
            </div>

            {/* Doctorate 2 */}
            <div className="glass" style={{
              borderRadius: 20, padding: "36px 32px",
              border: "1px solid rgba(201,146,14,0.22)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #4f8ef7, transparent)",
              }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span style={{
                  fontSize: 28, background: "rgba(79,142,247,0.1)",
                  padding: "10px", borderRadius: 14, border: "1px solid rgba(79,142,247,0.2)",
                }}>📚</span>
                <span style={{
                  padding: "4px 14px", borderRadius: 100, fontSize: 12, fontWeight: 700,
                  background: "rgba(79,142,247,0.12)", color: "#4f8ef7", border: "1px solid rgba(79,142,247,0.3)",
                }}>2021</span>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                DMS — Doctorate in Management Studies
              </h3>
              <div style={{ fontSize: 13, color: "#4f8ef7", fontWeight: 600, marginBottom: 14 }}>
                Research Area: Sales &amp; Marketing Management
              </div>
              <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>
                Rigorous empirical study into strategic marketing systems, omnichannel sales distribution, customer lifetime value optimization, and consumer brand expansion across India.
              </p>
              <div style={{
                paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)",
                fontSize: 12.5, color: "rgba(255,255,255,0.50)",
              }}>
                🏛️ <strong>Institution:</strong> Indian Self-Government Doctorate University, Guwahati, Assam - India
              </div>
            </div>
          </div>
        </div>

        {/* ── AREAS OF EXPERTISE ── */}
        <div style={{ marginBottom: 70 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="section-label" style={{ display: "inline-flex" }}>
              Domain Specializations
            </div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800 }}>
              Key Areas of{" "}
              <span style={{
                background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Expertise</span>
            </h2>
            <div style={{ width: 50, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "14px auto 0" }} />
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20,
          }}>
            {expertiseList.map((exp, i) => (
              <div key={i} className="glass" style={{
                padding: "24px 22px", borderRadius: 16,
                border: "1px solid rgba(201,146,14,0.14)",
                transition: "all 0.25s ease",
              }}>
                <div style={{ fontSize: 26, marginBottom: 12 }}>{exp.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FORMAL DECLARATION ── */}
        <div className="glass" style={{
          padding: "32px 36px", borderRadius: 18,
          border: "1px solid rgba(201,146,14,0.22)",
          background: "linear-gradient(145deg, rgba(6,9,26,0.95), rgba(11,16,40,0.75))",
        }}>
          <div style={{ color: "#f0c84a", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>
            Formal Declaration
          </div>
          <p style={{ color: "rgba(255,255,255,0.70)", fontSize: 14.5, lineHeight: 1.75, fontStyle: "italic", marginBottom: 18 }}>
            &ldquo;I hereby declare that the information provided above is true and accurate to the best of my knowledge and belief.&rdquo;
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#fff" }}>— Dr. Vikram Singh Chauhan</div>
              <div style={{ fontSize: 12, color: "#f0c84a", marginTop: 2 }}>Multi-Sector Founder | Corporate Trainer | Business Coach</div>
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
              Verified Executive Dossier · 2026
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
