interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  figLabel?: string;
  align?: "left" | "center";
}

export function SectionHeader({ label, title, subtitle, figLabel, align = "center" }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: align, marginBottom: "3rem" }}>
      {label && (
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#F5C518",
            marginBottom: "0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            justifyContent: align === "center" ? "center" : "flex-start",
          }}
        >
          <span style={{ display: "block", width: "30px", height: "1px", background: "#F5C518" }} />
          {label}
          <span style={{ display: "block", width: "30px", height: "1px", background: "#F5C518" }} />
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: "#FFFFFF",
          lineHeight: 1.2,
          margin: 0,
          marginBottom: subtitle ? "1rem" : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: "#CCCCCC",
            fontSize: "1rem",
            maxWidth: "600px",
            margin: align === "center" ? "0 auto" : 0,
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
      {figLabel && (
        <div
          style={{
            fontFamily: "'Caveat', cursive",
            color: "rgba(245,197,24,0.45)",
            fontSize: "0.85rem",
            marginTop: "0.5rem",
          }}
        >
          {figLabel}
        </div>
      )}
    </div>
  );
}
