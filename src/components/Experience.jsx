import { EXPERIENCE, SKILLS } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experiencia" style={{ padding: "50px 5vw", maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-title">Experiencia</div>
        <div className="divider"></div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="exp-card">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <h3 className="syne" style={{ fontSize: 18, fontWeight: 700, color: "#f1f5f9" }}>{exp.role}</h3>
                  </div>
                  <div className="inter" style={{ fontSize: 14, color: "#38bdf8", marginTop: 2 }}>{exp.subtitle}</div>
                  <div className="inter" style={{ fontSize: 14, color: "#64748b", marginTop: 2 }}>
                    {exp.company} · <span style={{ color: "#475569" }}>{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginTop: 14 }}>
                {exp.items.map((item, j) => (
                  <li key={j} className="inter" style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#38bdf8", marginTop: 2, flexShrink: 0 }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div style={{ marginTop: 64 }}>
          <h3 className="syne" style={{ fontSize: 22, fontWeight: 700, color: "#f1f5f9", marginBottom: 6 }}>Stack tecnológico</h3>
          <p className="inter" style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>Herramientas y tecnologías con las que trabajo</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {SKILLS.map((s, i) => (
              <div key={i} className="skill-pill">
                <span>{s.icon}</span> {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
