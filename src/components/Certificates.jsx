export default function Certificates() {
  return (
         <section id="certificados" style={{ padding: "50px 5vw", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-title">Certificados & Formación</div>
          <div className="divider"></div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {/* Educación */}
            <div className="exp-card">
              <div style={{ fontSize: 28, marginBottom: 14 }}>🎓</div>
              <div className="badge-current" style={{ display: "inline-block", marginBottom: 10, background: "rgba(167,139,250,0.15)", color: "#a78bfa", borderColor: "rgba(167,139,250,0.3)" }}>En curso</div>
              <h3 className="syne" style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Ingeniería en Sistemas</h3>
              <p className="inter" style={{ fontSize: 14, color: "#64748b" }}>Instituto Tecnológico Metropolitano (ITM)</p>
              <p className="inter" style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>2026 – Actualidad</p>
            </div>

            <div className="exp-card">
              <div style={{ fontSize: 28, marginBottom: 14 }}>🎓</div>
              <div className="badge-current" style={{ display: "inline-block", marginBottom: 10, background: "rgba(74,222,128,0.1)", color: "#4ade80", borderColor: "rgba(74,222,128,0.25)" }}>Completado</div>
              <h3 className="syne" style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Tecnología en Desarrollo de Software</h3>
              <p className="inter" style={{ fontSize: 14, color: "#64748b" }}>Instituto Tecnológico Metropolitano (ITM)</p>
              <p className="inter" style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>2022 – 2025</p>
            </div>

            <div className="exp-card">
              <div style={{ fontSize: 28, marginBottom: 14 }}>🏫</div>
              <div className="badge-current" style={{ display: "inline-block", marginBottom: 10, background: "rgba(74,222,128,0.1)", color: "#4ade80", borderColor: "rgba(74,222,128,0.25)" }}>Completado</div>
              <h3 className="syne" style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Bachiller Técnico en Desarrollo de Software</h3>
              <p className="inter" style={{ fontSize: 14, color: "#64748b" }}>Colegio Ntra. Sra. del Rosario de Chiquinquirá</p>
              <p className="inter" style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>2012 – 2019</p>
            </div>

            <div className="exp-card">
              <div style={{ fontSize: 28, marginBottom: 14 }}>🌐</div>
              <div className="badge-current" style={{ display: "inline-block", marginBottom: 10, background: "rgba(74,222,128,0.1)", color: "#4ade80", borderColor: "rgba(74,222,128,0.25)" }}>Certificado</div>
              <h3 className="syne" style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>Inglés como Lengua Extranjera – Nivel B1</h3>
              <p className="inter" style={{ fontSize: 14, color: "#64748b" }}>Comfenalco</p>
              <p className="inter" style={{ fontSize: 13, color: "#475569", marginTop: 4 }}>2012 – 2019</p>
            </div>
          </div>
        </div>
      </section>
  );
}
