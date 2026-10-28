"use client";
import { useState } from "react";
import Stars from "@/components/Stars";

const INQUIRY_TYPES = [
  "Corporate Training Inquiry",
  "Executive Business Coaching",
  "Institution Building Advisory",
  "AI & Technology Solutions (Vexter / MetaSynexa)",
  "Keynote / Speaking Engagement",
  "Strategic Partnership / Joint Venture",
  "Indian Excellence Council (IEC) Inquiries",
  "General Media & Press",
] as const;

export default function ConnectPage() {
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
    setTimeout(() => {
      setStatus("done");
    }, 1200);
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    padding: "13px 18px",
    borderRadius: 10,
    border: "1px solid",
    borderColor: errors[field] ? "rgba(239,68,68,0.7)" : "rgba(201,146,14,0.22)",
    background: "rgba(255,255,255,0.04)",
    color: "#fff",
    fontFamily: "var(--font-inter), sans-serif",
    fontSize: 14,
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    transition: "border-color 0.2s, box-shadow 0.2s",
  });

  return (
    <section
      style={{
        padding: "100px 36px 120px",
        background: "linear-gradient(180deg, #06091a 0%, #04060f 100%)",
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
            Get In Touch
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 14 }}>
            Direct Executive{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Connect</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            Connect with Dr. Vikram Singh Chauhan for Corporate Training, Executive Coaching, Institutional Governance, or Strategic Technology Partnerships.
          </p>
          <div style={{ width: 60, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "18px auto 0" }} />
        </div>

        {/* ── Main Two-Col Form & Info Grid ── */}
        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 50, alignItems: "start" }}
        >
          {/* ── LEFT: Official Contact Cards ── */}
          <div>
            <h2 style={{ fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 8 }}>
              Executive Office
            </h2>
            <p style={{ color: "rgba(255,255,255,0.52)", fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
              Official channels for high-priority corporate, academic, and business correspondence.
            </p>

            {/* Contact Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              {/* Address */}
              <div className="glass" style={{
                display: "flex", alignItems: "center", gap: 18,
                padding: "20px 22px", borderRadius: 16, border: "1px solid rgba(201,146,14,0.18)",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: "rgba(240,200,74,0.1)", border: "1px solid rgba(240,200,74,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
                }}>
                  📍
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#f0c84a", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase" }}>
                    Location / Office
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginTop: 2 }}>
                    New Delhi, India – 110043
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                    Available Globally for Consultations &amp; Keynotes
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass" style={{
                display: "flex", alignItems: "center", gap: 18,
                padding: "20px 22px", borderRadius: 16, border: "1px solid rgba(201,146,14,0.18)",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: "rgba(240,200,74,0.1)", border: "1px solid rgba(240,200,74,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
                }}>
                  📞
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#f0c84a", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase" }}>
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+918810310758"
                    style={{ fontSize: 16, fontWeight: 700, color: "#fff", textDecoration: "none", display: "block", marginTop: 2 }}
                  >
                    +91 8810310758
                  </a>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                    Monday – Saturday (Executive Hours)
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="glass" style={{
                display: "flex", alignItems: "center", gap: 18,
                padding: "20px 22px", borderRadius: 16, border: "1px solid rgba(201,146,14,0.18)",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: "rgba(240,200,74,0.1)", border: "1px solid rgba(240,200,74,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
                }}>
                  ✉️
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#f0c84a", fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase" }}>
                    Direct Email Address
                  </div>
                  <a
                    href="mailto:drvikramsinghchauhan@gmail.com"
                    style={{ fontSize: 15, fontWeight: 700, color: "#fff", textDecoration: "none", display: "block", marginTop: 2 }}
                  >
                    drvikramsinghchauhan@gmail.com
                  </a>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                    Official Correspondence &amp; Inquiries
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Interactive Inquiry Form ── */}
          <div className="glass" style={{
            padding: "38px 36px", borderRadius: 22,
            border: "1px solid rgba(201,146,14,0.22)",
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
              Send an Executive Message
            </h3>
            <p style={{ color: "rgba(255,255,255,0.50)", fontSize: 13.5, marginBottom: 24 }}>
              Fill in your details below and Dr. Chauhan&apos;s office will review your inquiry promptly.
            </p>

            {status === "done" ? (
              <div style={{
                padding: "36px 24px", textAlign: "center",
                background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: 16,
              }}>
                <div style={{ fontSize: 44, marginBottom: 12 }}>✅</div>
                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#34d399", marginBottom: 8 }}>
                  Inquiry Received Successfully!
                </h4>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, maxWidth: 420, margin: "0 auto 20px" }}>
                  Thank you for reaching out. Your message has been routed to Dr. Vikram Singh Chauhan&apos;s executive desk. We will respond shortly.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", org: "", type: "Corporate Training Inquiry", message: "" });
                    setStatus("idle");
                  }}
                  className="btn-gold"
                  style={{ padding: "10px 24px", fontSize: 13 }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {/* Name & Email Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#f0c84a", marginBottom: 6, textTransform: "uppercase" }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle("name")}
                    />
                    {errors.name && <span style={{ color: "#ef4444", fontSize: 11, marginTop: 4, display: "block" }}>{errors.name}</span>}
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#f0c84a", marginBottom: 6, textTransform: "uppercase" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle("email")}
                    />
                    {errors.email && <span style={{ color: "#ef4444", fontSize: 11, marginTop: 4, display: "block" }}>{errors.email}</span>}
                  </div>
                </div>

                {/* Phone & Organization Row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 6, textTransform: "uppercase" }}>
                      Phone / Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle("phone")}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 6, textTransform: "uppercase" }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Institution or Enterprise Name"
                      value={form.org}
                      onChange={e => setForm({ ...form, org: e.target.value })}
                      style={inputStyle("org")}
                    />
                  </div>
                </div>

                {/* Purpose of Inquiry Dropdown */}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#f0c84a", marginBottom: 6, textTransform: "uppercase" }}>
                    Purpose of Inquiry
                  </label>
                  <select
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                    style={{
                      ...inputStyle("type"),
                      cursor: "pointer",
                      background: "#06091a",
                    }}
                  >
                    {INQUIRY_TYPES.map(t => (
                      <option key={t} value={t} style={{ background: "#04060f", color: "#fff" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#f0c84a", marginBottom: 6, textTransform: "uppercase" }}>
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please outline the scope of collaboration, training needs, or advisory mandate..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle("message"), resize: "vertical" }}
                  />
                  {errors.message && <span style={{ color: "#ef4444", fontSize: 11, marginTop: 4, display: "block" }}>{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold"
                  style={{
                    padding: "14px",
                    fontSize: 14,
                    fontWeight: 700,
                    width: "100%",
                    cursor: status === "sending" ? "wait" : "pointer",
                    borderRadius: 10,
                    marginTop: 4,
                  }}
                >
                  {status === "sending" ? "Dispatching Message..." : "Submit Inquiry to Dr. Chauhan →"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
