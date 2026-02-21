import { useEffect, useRef } from "react";

interface PatentRocketProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export function PatentRocket({ width = 480, height = 600, style }: PatentRocketProps) {
  const groupRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.015;
      if (groupRef.current) {
        const y = Math.sin(t) * 8;
        groupRef.current.style.transform = `translateY(${y}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Blueprint grid background */}
      <g opacity="0.08">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="480" y2={i * 60} stroke="#F5C518" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="600" stroke="#F5C518" strokeWidth="0.5" />
        ))}
      </g>

      {/* Orbit arcs */}
      <ellipse cx="240" cy="300" rx="200" ry="80" stroke="#F5C518" strokeWidth="0.6" strokeDasharray="6 4" opacity="0.15" fill="none" />
      <ellipse cx="240" cy="300" rx="160" ry="50" stroke="#F5C518" strokeWidth="0.4" strokeDasharray="3 5" opacity="0.1" fill="none" />

      {/* Main animated group */}
      <g ref={groupRef} style={{ transition: "transform 0.1s ease" }}>

        {/* Construction lines (crosshatch shading) */}
        <g opacity="0.12" stroke="#FFFFFF" strokeWidth="0.6">
          {Array.from({ length: 15 }).map((_, i) => (
            <line key={`ch${i}`} x1={180 + i * 8} y1="120" x2={160 + i * 8} y2="220" strokeDasharray="2 3" />
          ))}
        </g>

        {/* Rocket body — main fuselage */}
        <path
          d="M240 60 C240 60 220 100 215 200 L215 380 L265 380 L265 200 C260 100 240 60 240 60Z"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          fill="none"
          strokeLinejoin="round"
        />

        {/* Nose cone */}
        <path
          d="M215 200 C215 200 220 120 240 60 C260 120 265 200 265 200"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          fill="none"
        />

        {/* Window porthole */}
        <circle cx="240" cy="230" r="18" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
        <circle cx="240" cy="230" r="10" stroke="#F5C518" strokeWidth="0.8" fill="none" opacity="0.6" />
        {/* window cross */}
        <line x1="222" y1="230" x2="258" y2="230" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.5" />
        <line x1="240" y1="212" x2="240" y2="248" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.5" />

        {/* Fins — left */}
        <path
          d="M215 340 L175 400 L175 420 L215 380Z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M175 400 L175 420 L215 380"
          stroke="#FFFFFF"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />

        {/* Fins — right */}
        <path
          d="M265 340 L305 400 L305 420 L265 380Z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />

        {/* Engine nozzle */}
        <path
          d="M215 380 L205 420 L240 410 L275 420 L265 380Z"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          fill="none"
        />
        <ellipse cx="240" cy="420" rx="22" ry="6" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />

        {/* Exhaust flame */}
        <path
          d="M225 420 C230 450 235 470 240 490 C245 470 250 450 255 420"
          stroke="#F5C518"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
          filter="url(#glow)"
        />
        <path
          d="M232 420 C235 445 238 460 240 475 C242 460 245 445 248 420"
          stroke="#E8A800"
          strokeWidth="3"
          fill="none"
          opacity="0.5"
          filter="url(#glow)"
        />

        {/* Detail lines — body sections */}
        <line x1="215" y1="270" x2="265" y2="270" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
        <line x1="215" y1="310" x2="265" y2="310" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4" />
        <line x1="215" y1="340" x2="265" y2="340" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />

        {/* Small detail hatches */}
        <line x1="217" y1="275" x2="223" y2="275" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="217" y1="285" x2="223" y2="285" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="257" y1="275" x2="263" y2="275" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
        <line x1="257" y1="285" x2="263" y2="285" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />

        {/* Antenna */}
        <line x1="240" y1="60" x2="240" y2="38" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
        <circle cx="240" cy="36" r="3" stroke="#F5C518" strokeWidth="1" fill="none" />

        {/* Patent annotation callouts */}
        {/* Label A */}
        <line x1="258" y1="230" x2="320" y2="210" stroke="#F5C518" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.6" />
        <text x="325" y="214" fill="#F5C518" fontSize="11" fontFamily="'Caveat', cursive" opacity="0.8">a.</text>

        {/* Label B */}
        <line x1="175" y1="380" x2="120" y2="350" stroke="#F5C518" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.6" />
        <text x="100" y="354" fill="#F5C518" fontSize="11" fontFamily="'Caveat', cursive" opacity="0.8">b.</text>

        {/* Label C */}
        <line x1="240" y1="420" x2="310" y2="450" stroke="#F5C518" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.6" />
        <text x="314" y="454" fill="#F5C518" fontSize="11" fontFamily="'Caveat', cursive" opacity="0.8">c.</text>

        {/* Label D — nose */}
        <line x1="240" y1="60" x2="150" y2="70" stroke="#F5C518" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.6" />
        <text x="128" y="74" fill="#F5C518" fontSize="11" fontFamily="'Caveat', cursive" opacity="0.8">d.</text>

        {/* Measurement lines */}
        <line x1="290" y1="60" x2="290" y2="380" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />
        <line x1="285" y1="60" x2="295" y2="60" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2" />
        <line x1="285" y1="380" x2="295" y2="380" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2" />
        <text x="298" y="225" fill="#FFFFFF" fontSize="9" fontFamily="'Caveat', cursive" opacity="0.3" transform="rotate(90 298 225)">320 cm</text>

        {/* Fig label */}
        <text x="140" y="540" fill="#F5C518" fontSize="13" fontFamily="'Caveat', cursive" opacity="0.5">Fig. 1 — Cohete Tipo A</text>
        <text x="148" y="558" fill="#CCCCCC" fontSize="10" fontFamily="'Caveat', cursive" opacity="0.35">Escala 1:100</text>
      </g>

      {/* Coordinate cross */}
      <g opacity="0.15">
        <line x1="30" y1="300" x2="70" y2="300" stroke="#F5C518" strokeWidth="0.8" />
        <line x1="50" y1="280" x2="50" y2="320" stroke="#F5C518" strokeWidth="0.8" />
        <circle cx="50" cy="300" r="8" stroke="#F5C518" strokeWidth="0.5" fill="none" />
      </g>
    </svg>
  );
}

export function PatentAircraft({ width = 400, height = 300, style }: PatentRocketProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      {/* Aircraft body */}
      <ellipse cx="200" cy="150" rx="140" ry="25" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Wings */}
      <path d="M160 150 L80 120 L100 155 L160 155Z" stroke="#FFFFFF" strokeWidth="1.3" fill="none" opacity="0.7" />
      <path d="M240 150 L320 120 L300 155 L240 155Z" stroke="#FFFFFF" strokeWidth="1.3" fill="none" opacity="0.7" />
      {/* Tail */}
      <path d="M340 148 L360 128 L360 152Z" stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M340 148 L355 130 L340 135Z" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Cockpit */}
      <ellipse cx="75" cy="146" rx="20" ry="12" stroke="#F5C518" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Annotation */}
      <text x="10" y="60" fill="#F5C518" fontSize="12" fontFamily="'Caveat', cursive" opacity="0.6">Fig. 2 — Aeronave Tipo B</text>
      <line x1="180" y1="125" x2="180" y2="90" stroke="#F5C518" strokeWidth="0.7" strokeDasharray="3 2" opacity="0.5" />
      <text x="155" y="86" fill="#F5C518" fontSize="10" fontFamily="'Caveat', cursive" opacity="0.6">a.</text>
    </svg>
  );
}
