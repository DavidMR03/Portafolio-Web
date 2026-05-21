import { PASSIONS, SOFT_SKILLS } from "../data/portfolioData";
import aboutImage from "../assets/About.jpg";

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: "50px 5vw", maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-title">Sobre mí</div>
        <div className="divider"></div>

          <div className="about-grid">
          <div>
            {/* Foto grande */}
            <img src={aboutImage} alt="Sobre mí" className="about-image" style={{ marginBottom: 18 }} />
            {/* Pasiones */}
            <h4 className="syne" style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 14 }}>Mis pasiones</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {PASSIONS.map((p, i) => (
                <div key={i} className="passion-card">{p.icon} {p.label}</div>
              ))}
            </div>
          </div>

          <div>
            <p className="inter" style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.85, marginBottom: 20 }}>
              Soy David, tecnólogo en Desarrollo de Software y estudiante de Ingeniería en Sistemas en el ITM (Medellín). Me muevo en ese cruce entre la <span className="accent">tecnología</span> y las <span className="accent2">finanzas</span>: me apasiona automatizar lo repetitivo para que las personas puedan enfocarse en lo que realmente importa.
            </p>
            <p className="inter" style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.85, marginBottom: 20 }}>
              En menos de un año pasé de apoyar procesos como practicante a convertirme en el responsable de <span className="accent">automatización</span> y <span className="accent2">conciliación financiera</span> dentro de una empresa del sector retail. Esa experiencia me enseñó que la <span className="accent">iniciativa</span>, la curiosidad y las ganas de aprender pueden generar un impacto real incluso en poco tiempo.
            </p>
            <p className="inter" style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.85, marginBottom: 32 }}>
              Soy autodidacta por naturaleza. Si algo me interesa, lo aprendo. Si hay un problema, lo analizo hasta encontrar la raíz. Y si hay una solución más eficiente, la construyo. Fuera del trabajo me encontrarás con la familia, leyendo, escribiendo o jugando fútbol. 🙂
            </p>

            {/* Habilidades blandas */}
            <h4 className="syne" style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 14 }}>Habilidades personales</h4>
            <div className="soft-skills-grid">
              {SOFT_SKILLS.map((s, i) => (
                <div key={i} className="soft-card">
                  <span style={{ fontSize: 18 }}>{s.icon}</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Idiomas */}
            <div style={{ marginTop: 28 }}>
              <h4 className="syne" style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 14 }}>Idiomas</h4>
              <div style={{ display: "flex", gap: 12 }}>
                <div className="skill-pill" style={{ fontSize: 14 }}> Español — Nativo</div>
                <div className="skill-pill" style={{ fontSize: 14 }}> Inglés — B1</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
