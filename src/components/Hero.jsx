import heroImage from "../assets/Hero_Yo.png";

export default function Hero() {
  return (
    <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "90px 5vw 40px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 64, flexWrap: "wrap", width: "100%" }}>
        <div style={{ flex: "1 1 360px" }}>

          {/* Fila superior: badge + imagen (en móvil se ven juntos, en desktop solo el badge) */}
          <div className="hero-top-row">
            <div className="hero-anim" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 20, padding: "5px 14px" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px #4ade80" }}></span>
              <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "Inter", fontWeight: 500 }}>Disponible para nuevas oportunidades</span>
            </div>
            <img src={heroImage} alt="David Morales" className="hero-image hero-image-mobile hero-anim" />
          </div>

          <h1 className="syne hero-anim-2" style={{ fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800, lineHeight: 1.1, color: "#f1f5f9", marginBottom: 16, marginTop: 28 }}>
            Hola, soy<br />
            <span className="accent">David Morales</span>
          </h1>

          <p className="inter hero-anim-3" style={{ fontSize: 18, color: "#94a3b8", lineHeight: 1.7, marginBottom: 12, maxWidth: 480 }}>
            Tecnólogo en Desarrollo de Software con pasión por la{" "}
            <span className="accent2">automatización</span> y el{" "}
            <span className="accent">análisis de datos</span>.
          </p>
          <p className="inter hero-anim-3" style={{ fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
            Me especializo en construir soluciones que conectan el mundo financiero con la tecnología: desde pipelines de datos hasta bots RPA que trabajan mientras duermes. 😄
          </p>

          <div className="hero-anim-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:morales.davidra@gmail.com" className="contact-btn btn-primary">
              ✉️ Escríbeme
            </a>
            <a href="https://www.linkedin.com/in/david-alejandro-morales-ram%C3%ADrez-540aa0236/" target="_blank" rel="noopener noreferrer" className="contact-btn btn-outline">
              🔗 LinkedIn
            </a>
          </div>

          <div className="hero-anim-4" style={{ marginTop: 40, display: "flex", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div className="syne" style={{ fontSize: 28, fontWeight: 800, color: "#38bdf8" }}>3+</div>
              <div className="inter" style={{ fontSize: 13, color: "#64748b" }}>años de formación</div>
            </div>
            <div>
              <div className="syne" style={{ fontSize: 28, fontWeight: 800, color: "#fb923c" }}>1+</div>
              <div className="inter" style={{ fontSize: 13, color: "#64748b" }}>año de experiencia real</div>
            </div>
            <div>
              <div className="syne" style={{ fontSize: 28, fontWeight: 800, color: "#a78bfa" }}>7+</div>
              <div className="inter" style={{ fontSize: 13, color: "#64748b" }}>herramientas dominadas</div>
            </div>
          </div>
        </div>

        {/* Imagen desktop — oculta en móvil */}
        <div className="hero-image-desktop" style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <img src={heroImage} alt="David Morales" className="hero-image hero-anim" />
        </div>

      </div>
    </section>
  );
}