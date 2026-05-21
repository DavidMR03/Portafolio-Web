export default function Footer() {
  return (
    <footer style={{ padding: "24px 5vw", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <p className="inter" style={{ fontSize: 13, color: "#334155" }}>
          Hecho por <span className="accent">David Alejandro Morales Ramirez</span> · {new Date().getFullYear()}
        </p>
      </footer>
  );
}
