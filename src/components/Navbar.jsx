import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/portfolioData";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setActiveSection(id);
  };

  return (
    <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(11,22,40,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
        padding: "0 5vw",
        height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hide-mobile">
          {NAV_ITEMS.map((n) => (
            <button key={n.id} className={`nav-link${activeSection === n.id ? " active" : ""}`} onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
        <a href="mailto:morales.davidra@gmail.com" className="contact-btn btn-primary hide-mobile" style={{ padding: "8px 18px", fontSize: 13 }}>
          Disponible para trabajar ✦
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#e2eaf5", fontSize: 24, cursor: "pointer" }} className="show-mobile">☰</button>
      </nav>
  );
}
