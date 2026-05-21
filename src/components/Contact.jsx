export default function Contact() {
  return (
    <section id="contacto" style={{ padding: "50px 5vw", background: "rgba(56,189,248,0.03)", borderTop: "1px solid rgba(56,189,248,0.08)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>👋</div>
          <h2 className="syne" style={{ fontSize: 36, fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>
            ¿Hablamos?
          </h2>
          <p className="inter" style={{ fontSize: 16, color: "#8094b0", lineHeight: 1.75, marginBottom: 16 }}>
            Estoy <span className="accent" style={{ fontWeight: 600 }}>abierto y disponible</span> para nuevas oportunidades laborales, proyectos freelance o simplemente para conectar con personas del mundo tech.
          </p>
          <p className="inter" style={{ fontSize: 15, color: "#626f82", lineHeight: 1.7, marginBottom: 40 }}>
            Si buscas a alguien que combine pensamiento analítico con habilidades técnicas, que aprenda rápido y que se adapte con facilidad, me encantaría escucharte.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
            <a href="mailto:morales.davidra@gmail.com" className="contact-btn btn-primary" style={{ fontSize: 16, padding: "14px 28px" }}>
              ✉️ morales.davidra@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/david-alejandro-morales-ram%C3%ADrez-540aa0236/" target="_blank" rel="noopener noreferrer" className="contact-btn btn-outline" style={{ fontSize: 16, padding: "14px 28px" }}>
              🔗 LinkedIn
            </a>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 32 }}>
            <p className="inter" style={{ fontSize: 13, color: "#f1f5f9" }}>
              📍 Medellín, Antioquia — Colombia &nbsp;·&nbsp; 📞 +57 301 348 2584
            </p>
          </div>
        </div>
      </section>
  );
}
