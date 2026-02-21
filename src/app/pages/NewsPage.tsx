import { useRef, useEffect, useState } from "react";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { StarField } from "../components/StarField";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.07 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

type Category = "Todos" | "Conferencia" | "Laboratorio" | "Simulación" | "Premio" | "Publicación";

const news = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1704177094034-46a04b901bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBlbmdpbmVlcmluZyUyMGNvbmZlcmVuY2UlMjBzdHVkZW50cyUyMHJlc2VhcmNofGVufDF8fHx8MTc3MTYyODY1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Conferencia" as Category,
    title: "AD ASTRA presenta en el Congreso Colombiano de Ingeniería Aeronáutica",
    excerpt: "Nuestros investigadores expusieron avances en aerodinámica computacional ante más de 300 especialistas del sector aeroespacial latinoamericano. Se presentaron dos ponencias sobre CFD y mecánica orbital.",
    date: "15 Enero, 2025",
    author: "García, L.",
    featured: true,
    readTime: "5 min",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1764675903774-336e6ef8d09c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVubmVsJTIwYWVyb2R5bmFtaWNzJTIwdGVzdCUyMGFlcm9zcGFjZXxlbnwxfHx8fDE3NzE2Mjg2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Laboratorio" as Category,
    title: "Nuevo túnel de viento subsónico operativo en el campus",
    excerpt: "La nueva instalación experimental del Laboratorio de Aerodinámica permite ensayos a Reynolds hasta 500,000, fortaleciendo considerablemente la capacidad experimental del semillero.",
    date: "12 Diciembre, 2024",
    author: "Pérez, A.",
    featured: false,
    readTime: "4 min",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1756751579863-49b26247e1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDRkQlMjBjb21wdXRhdGlvbmFsJTIwZmx1aWQlMjBkeW5hbWljcyUyMHNpbXVsYXRpb24lMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3MTYyODY1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Simulación" as Category,
    title: "Resultados de simulación CFD del flujo sobre NACA 4412 publicados",
    excerpt: "Los resultados preliminares de la campaña de simulación CFD muestran excelente correlación con datos experimentales, validando la metodología numérica de alto orden implementada.",
    date: "28 Noviembre, 2024",
    author: "García, L.",
    featured: false,
    readTime: "6 min",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1707328196182-94771ce34207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wdWxzaW9uJTIwamV0JTIwZW5naW5lJTIwYWVyb3NwYWNlJTIwcmVzZWFyY2h8ZW58MXx8fHwxNzcxNjI4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Premio" as Category,
    title: "Investigadora del semillero gana Premio AIAA Young Engineer 2024",
    excerpt: "La MSc. Andrea Pérez fue reconocida con el Premio AIAA Young Engineer 2024 por sus contribuciones al diseño de constelaciones de satélites pequeños para observación terrestre.",
    date: "10 Noviembre, 2024",
    author: "Dirección",
    featured: true,
    readTime: "3 min",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZWNyYWZ0JTIwb3JiaXQlMjBlYXJ0aHxlbnwxfHx8fDE3NzE2Mjg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Publicación" as Category,
    title: "Paper sobre optimización aerodinámica aceptado en Aerospace S&T",
    excerpt: "El artículo 'Multi-Fidelity Aerodynamic Shape Optimization Using Surrogate Models' fue aceptado para publicación en la revista Aerospace Science and Technology, Vol. 145.",
    date: "3 Octubre, 2024",
    author: "Pérez, A.",
    featured: false,
    readTime: "4 min",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1769986515211-40bca134a0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMFVBViUyMGZsaWdodCUyMHRlc3QlMjBvdXRkb29yfGVufDF8fHx8MTc3MTYyODY1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Laboratorio" as Category,
    title: "Primera prueba de vuelo del UAV AeroOpt completada exitosamente",
    excerpt: "El prototipo del UAV optimizado aerodinámicamente completó su primera prueba de vuelo en el campus universitario, obteniendo datos cruciales para la validación del modelo computacional.",
    date: "22 Septiembre, 2024",
    author: "Martínez, C.",
    featured: false,
    readTime: "5 min",
  },
];

const categoryColors: Record<Category, { bg: string; text: string; border: string }> = {
  "Todos": { bg: "rgba(245,197,24,0.1)", text: "#F5C518", border: "rgba(245,197,24,0.3)" },
  "Conferencia": { bg: "rgba(100,180,255,0.1)", text: "#64b4ff", border: "rgba(100,180,255,0.3)" },
  "Laboratorio": { bg: "rgba(34,197,94,0.1)", text: "#22c55e", border: "rgba(34,197,94,0.3)" },
  "Simulación": { bg: "rgba(200,100,255,0.1)", text: "#c864ff", border: "rgba(200,100,255,0.3)" },
  "Premio": { bg: "rgba(245,197,24,0.12)", text: "#F5C518", border: "rgba(245,197,24,0.4)" },
  "Publicación": { bg: "rgba(255,150,50,0.1)", text: "#ff9632", border: "rgba(255,150,50,0.3)" },
};

export function NewsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Todos");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filters: Category[] = ["Todos", "Conferencia", "Laboratorio", "Simulación", "Premio", "Publicación"];
  const filtered = activeFilter === "Todos" ? news : news.filter((n) => n.category === activeFilter);
  const featured = filtered.filter((n) => n.featured);
  const regular = filtered.filter((n) => !n.featured);

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", paddingTop: "72px" }}>
      {/* Page hero */}
      <div
        style={{
          position: "relative",
          padding: "5rem 2rem 4rem",
          borderBottom: "1px solid rgba(245,197,24,0.1)",
          overflow: "hidden",
        }}
      >
        <StarField density={90} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "'Caveat', cursive", color: "rgba(245,197,24,0.4)", fontSize: "0.95rem", marginBottom: "0.75rem" }}>
            Fig. 5 — Registro Cronológico · Semillero AD ASTRA
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            NOTICIAS DEL
            <span style={{ color: "#F5C518" }}> SEMILLERO</span>
          </h1>
          <p style={{ color: "#CCCCCC", fontSize: "1rem", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto" }}>
            Logros, eventos y avances del grupo de investigación AD ASTRA. 
            Nuestra trayectoria hacia las estrellas, documentada.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        {/* Filter pills */}
        <FadeIn>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            {filters.map((f) => {
              const col = categoryColors[f];
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    background: isActive ? col.bg : "transparent",
                    color: isActive ? col.text : "#888",
                    border: isActive ? `1px solid ${col.border}` : "1px solid rgba(255,255,255,0.1)",
                    padding: "0.4rem 1rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Featured news */}
        {featured.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(245,197,24,0.5)",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ width: "30px", height: "1px", background: "rgba(245,197,24,0.4)", display: "block" }} />
              Destacado
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: featured.length > 1 ? "1fr 1fr" : "1fr",
                gap: "1.5rem",
              }}
              className="featured-grid"
            >
              {featured.map((item) => {
                const col = categoryColors[item.category];
                const isHovered = hoveredCard === item.id;
                return (
                  <FadeIn key={item.id}>
                    <div
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: "#111111",
                        border: "1px solid rgba(245,197,24,0.12)",
                        borderLeft: "4px solid #F5C518",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        transition: "all 0.3s",
                        boxShadow: isHovered ? "0 12px 40px rgba(245,197,24,0.1)" : "none",
                        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                      }}
                    >
                      <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(0.65)",
                            transform: isHovered ? "scale(1.03)" : "scale(1)",
                            transition: "transform 0.4s",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "80px",
                            background: "linear-gradient(transparent, rgba(17,17,17,0.97))",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "1rem",
                            left: "1rem",
                            background: col.bg,
                            border: `1px solid ${col.border}`,
                            color: col.text,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.62rem",
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            padding: "0.25rem 0.6rem",
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <div style={{ padding: "1.75rem", flex: 1 }}>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            margin: 0,
                            marginBottom: "0.8rem",
                            lineHeight: 1.35,
                          }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: "#999", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                          {item.excerpt}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "1rem",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                color: "#666",
                                fontFamily: "'Caveat', cursive",
                                fontSize: "0.85rem",
                              }}
                            >
                              <Calendar size={12} color="rgba(245,197,24,0.5)" /> {item.date}
                            </span>
                            <span style={{ color: "#555", fontSize: "0.78rem" }}>{item.readTime} lectura</span>
                          </div>
                          <button
                            style={{
                              color: "#F5C518",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: "0.75rem",
                              letterSpacing: "0.06em",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.3rem",
                            }}
                          >
                            Leer más <ArrowRight size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        )}

        {/* Regular news grid */}
        {regular.length > 0 && (
          <>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(245,197,24,0.4)",
                marginBottom: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ width: "30px", height: "1px", background: "rgba(245,197,24,0.3)", display: "block" }} />
              Más Noticias
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
              className="news-grid"
            >
              {regular.map((item, i) => {
                const col = categoryColors[item.category];
                const isHovered = hoveredCard === item.id;
                return (
                  <FadeIn key={item.id} delay={i * 80}>
                    <div
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: "#111111",
                        border: "1px solid rgba(245,197,24,0.08)",
                        overflow: "hidden",
                        transition: "all 0.3s",
                        boxShadow: isHovered ? "0 8px 32px rgba(245,197,24,0.08)" : "none",
                        transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                      }}
                    >
                      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            filter: "brightness(0.6)",
                            transform: isHovered ? "scale(1.04)" : "scale(1)",
                            transition: "transform 0.4s",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "60px",
                            background: "linear-gradient(transparent, rgba(17,17,17,0.97))",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            top: "0.75rem",
                            left: "0.75rem",
                            background: col.bg,
                            border: `1px solid ${col.border}`,
                            color: col.text,
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.58rem",
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            padding: "0.2rem 0.5rem",
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <div style={{ padding: "1.5rem" }}>
                        <h4
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "#FFFFFF",
                            margin: 0,
                            marginBottom: "0.6rem",
                            lineHeight: 1.4,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p style={{ color: "#888", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                          {item.excerpt.substring(0, 100)}...
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span
                            style={{
                              fontFamily: "'Caveat', cursive",
                              color: "rgba(245,197,24,0.4)",
                              fontSize: "0.82rem",
                            }}
                          >
                            {item.date}
                          </span>
                          <button
                            style={{
                              color: "#F5C518",
                              background: "none",
                              border: "none",
                              cursor: "pointer",
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: "0.7rem",
                              letterSpacing: "0.06em",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.3rem",
                            }}
                          >
                            Leer más <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "5rem 2rem", color: "#555" }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              Sin resultados para esta categoría
            </div>
            <button
              onClick={() => setActiveFilter("Todos")}
              style={{
                background: "none",
                border: "1px solid rgba(245,197,24,0.3)",
                color: "#F5C518",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.72rem",
                marginTop: "1rem",
              }}
            >
              Ver todas
            </button>
          </div>
        )}
      </div>

      <style>{`
        .featured-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .news-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
