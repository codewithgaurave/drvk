"use client";
import { useState } from "react";
import Link from "next/link";
import Stars from "@/components/Stars";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  subtitle: string;
  category: "awards" | "conferences" | "portraits" | "videos";
  date: string;
};

const mediaItems: MediaItem[] = [
  // ── AWARD CEREMONIES ──
  {
    id: "a1",
    type: "image",
    src: "/images/gallery/award-iconic-business.jpg",
    title: "The Iconic Business Award",
    subtitle: "Conferred on stage in New Delhi with celebrity guest",
    category: "awards",
    date: "2025",
  },
  {
    id: "a2",
    type: "image",
    src: "/images/gallery/award-rashtriya-gaurav.jpg",
    title: "Rashtriya Gaurav Puraskar",
    subtitle: "Presented by Indian Armed Forces senior officers at national convention",
    category: "awards",
    date: "2025",
  },
  {
    id: "a3",
    type: "image",
    src: "/images/gallery/poster-rashtriya-gaurav.jpg",
    title: "Rashtriya Gaurav Official Citation",
    subtitle: "Formal recognition for inspiring work honoring social excellence",
    category: "awards",
    date: "2025",
  },
  {
    id: "a4",
    type: "image",
    src: "/images/gallery/award-national-school.jpg",
    title: "National School Awards (NSA)",
    subtitle: "Grand stage celebration with over 40 school leaders and educators",
    category: "awards",
    date: "2026",
  },
  {
    id: "a5",
    type: "image",
    src: "/images/gallery/award-golden-crown.jpg",
    title: "International Icon / Golden Crown Award",
    subtitle: "Conferred with international delegates honoring educational excellence",
    category: "awards",
    date: "2025 – 2026",
  },
  {
    id: "a6",
    type: "image",
    src: "/images/gallery/award-golden-crown-stage.jpg",
    title: "Golden Crown Media Honors",
    subtitle: "Stage presentation recognizing cross-border business leadership",
    category: "awards",
    date: "2026",
  },

  // ── CONFERENCES & INSTITUTIONS ──
  {
    id: "c1",
    type: "image",
    src: "/images/gallery/conference-aiimes-plaque.jpg",
    title: "AIIMES Institutional Appreciation Plaque",
    subtitle: "Presenting All India Institute of Management & Engineering Studies honors",
    category: "conferences",
    date: "2024",
  },
  {
    id: "c2",
    type: "image",
    src: "/images/gallery/conference-team-celebration.jpg",
    title: "Executive Training & Team Summit",
    subtitle: "Empowerment conference with faculty, professionals, and management leaders",
    category: "conferences",
    date: "2025",
  },
  {
    id: "c3",
    type: "image",
    src: "/images/gallery/conference-business-meet.jpg",
    title: "National Business Meet 2026",
    subtitle: "Convening institutional leaders and entrepreneurs in New Delhi",
    category: "conferences",
    date: "2026",
  },
  {
    id: "c4",
    type: "image",
    src: "/images/gallery/media-rashtriya-gaurav.jpg",
    title: "Media Wall — YSS Foundation & National Awards",
    subtitle: "Red carpet photo op at National Excellence Conclave",
    category: "conferences",
    date: "2025",
  },

  // ── EXECUTIVE PORTRAITS ──
  {
    id: "p1",
    type: "image",
    src: "/images/gallery/portrait-mercedes-luxury.jpg",
    title: "Executive Arrival — Mercedes-Benz",
    subtitle: "Dr. Vikram Singh Chauhan at 5-star venue before summit keynote",
    category: "portraits",
    date: "Executive Life",
  },
  {
    id: "p2",
    type: "image",
    src: "/images/gallery/portrait-dubai-skyline.jpg",
    title: "Global Vision — Dubai Skyline",
    subtitle: "MetaSynexa international operations & Middle East business ecosystem",
    category: "portraits",
    date: "International",
  },
  {
    id: "p3",
    type: "image",
    src: "/images/gallery/portrait-brown-suit-nature.jpg",
    title: "Leadership Retreat — Himachal",
    subtitle: "Strategic reflection and institutional roadmap planning",
    category: "portraits",
    date: "Leadership Retreat",
  },

  // ── VIDEOS ──
  {
    id: "v1",
    type: "video",
    src: "/videos/award-video-01.mp4",
    poster: "/images/gallery/award-iconic-business.jpg",
    title: "Award Ceremony Spotlight Video",
    subtitle: "Stage felicitation and trophy presentation moments",
    category: "videos",
    date: "Live Event Video",
  },
  {
    id: "v2",
    type: "video",
    src: "/videos/award-video-02.mp4",
    poster: "/images/gallery/award-rashtriya-gaurav.jpg",
    title: "Grand Stage Felicitation & Keynote Highlights",
    subtitle: "National convention address and award receiving ceremony",
    category: "videos",
    date: "Live Event Video",
  },
  {
    id: "v3",
    type: "video",
    src: "/videos/award-video-03.mp4",
    poster: "/images/gallery/conference-aiimes-plaque.jpg",
    title: "AIIMES Institutional Conclave Highlights",
    subtitle: "Academic excellence celebrations and award conferment",
    category: "videos",
    date: "Live Event Video",
  },
  {
    id: "v4",
    type: "video",
    src: "/videos/award-video-05.mp4",
    poster: "/images/gallery/award-golden-crown.jpg",
    title: "International Icon Stage Walk & Trophy Honor",
    subtitle: "Grand award ceremony celebrations with fireworks and lights",
    category: "videos",
    date: "Live Event Video",
  },
  {
    id: "v5",
    type: "video",
    src: "/videos/award-video-06.mp4",
    poster: "/images/gallery/award-national-school.jpg",
    title: "National School Awards Conclave Video",
    subtitle: "Stage gathering with dignitaries, principals, and educational leaders",
    category: "videos",
    date: "Live Event Video",
  },
];

export default function MediaGalleryPage() {
  const [activeTab, setActiveTab] = useState<"all" | "awards" | "conferences" | "portraits" | "videos">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = activeTab === "all" ? mediaItems : mediaItems.filter(m => m.category === activeTab);

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
      <Stars count={45} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <div className="section-label" style={{ display: "inline-flex" }}>
            Visual Archive &amp; Media
          </div>
          <h1 style={{ fontSize: "clamp(32px, 4.5vw, 54px)", fontWeight: 800, marginBottom: 14 }}>
            Moments of{" "}
            <span style={{
              background: "linear-gradient(120deg, #a87008, #f0c84a, #c9920e)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Distinction &amp; Leadership</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, maxWidth: 660, margin: "0 auto", lineHeight: 1.7 }}>
            A verified visual showcase of Dr. Vikram Singh Chauhan&apos;s stage convocations, national award ceremonies, international summits, and executive milestones.
          </p>
          <div style={{ width: 64, height: 3, borderRadius: 2, background: "linear-gradient(90deg, #c9920e, #f0c84a)", margin: "18px auto 0" }} />
        </div>

        {/* ── Official Profile Dossier PDF Card ── */}
        <div className="glass" style={{
          padding: "24px 30px", borderRadius: 18, marginBottom: 44,
          border: "1px solid rgba(240,200,74,0.30)",
          background: "linear-gradient(135deg, rgba(201,146,14,0.08) 0%, rgba(6,9,26,0.9) 100%)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              width: 50, height: 50, borderRadius: 14,
              background: "rgba(240,200,74,0.12)", border: "1px solid rgba(240,200,74,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
            }}>
              📄
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>
                Official Executive Dossier &amp; Profile (PDF)
              </div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                Verified curriculum vitae, credentials, organizations &amp; citations document
              </div>
            </div>
          </div>
          <a
            href="/dr-vikram-singh-chauhan-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Dr_Vikram_Singh_Chauhan_Profile.pdf"
            className="btn-gold"
            style={{ padding: "12px 28px", fontSize: 13 }}
          >
            Download Dossier (PDF) 📥
          </a>
        </div>

        {/* ── Filter Tabs ── */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap",
          marginBottom: 44,
        }}>
          {[
            { id: "all", label: "All Media" },
            { id: "awards", label: "Award Ceremonies" },
            { id: "conferences", label: "Conferences & Summits" },
            { id: "portraits", label: "Executive Portraits" },
            { id: "videos", label: "Event Videos (MP4)" },
          ].map(tab => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: "10px 22px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#04060f" : "rgba(255,255,255,0.70)",
                  background: active ? "linear-gradient(135deg, #c9920e, #f0c84a)" : "rgba(255,255,255,0.05)",
                  border: active ? "none" : "1px solid rgba(255,255,255,0.12)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: active ? "0 4px 20px rgba(201,146,14,0.35)" : "none",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── Grid of Media ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 26,
        }}>
          {filtered.map(item => (
            <div
              key={item.id}
              className="glass"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(201,146,14,0.18)",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
            >
              {/* Media Container */}
              <div style={{
                position: "relative",
                width: "100%",
                height: 250,
                background: "#03050d",
                overflow: "hidden",
              }}>
                {item.type === "video" ? (
                  <video
                    controls
                    preload="metadata"
                    poster={item.poster}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div
                    onClick={() => setSelectedImage(item.src)}
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{
                      position: "absolute", top: 12, right: 12,
                      background: "rgba(4,6,15,0.75)", backdropFilter: "blur(8px)",
                      borderRadius: 100, padding: "4px 10px", fontSize: 11,
                      color: "#f0c84a", fontWeight: 700, border: "1px solid rgba(240,200,74,0.3)",
                    }}>
                      🔍 Click to Zoom
                    </div>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div style={{ padding: "20px 22px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{
                      fontSize: 10.5, fontWeight: 700, letterSpacing: "0.10em",
                      color: "#f0c84a", textTransform: "uppercase",
                    }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.4)" }}>
                      {item.date}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.60)", fontSize: 13, lineHeight: 1.65 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Modal for Full-Screen Image Zoom ── */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 10000,
              background: "rgba(4,6,15,0.95)", backdropFilter: "blur(16px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: 24, cursor: "zoom-out",
            }}
          >
            <div style={{ maxWidth: 1000, maxHeight: "90vh", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                style={{
                  maxWidth: "100%", maxHeight: "88vh", borderRadius: 16,
                  border: "2px solid rgba(201,146,14,0.4)",
                  boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute", top: -40, right: 0,
                color: "#f0c84a", fontSize: 14, fontWeight: 700,
              }}>
                ✕ Click anywhere to close
              </div>
            </div>
          </div>
        )}

        {/* ── Bottom Link ── */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Link href="/connect" className="btn-gold" style={{ padding: "13px 32px", fontSize: 14 }}>
            Inquire for Keynote Speeches or Consultations &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}

