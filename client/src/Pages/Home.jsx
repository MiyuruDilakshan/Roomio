import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f8fafc",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter','DM Sans','Segoe UI',sans-serif",
    }}>
      <img src="/Logo 1.png" alt="Roomio" style={{ width: "100px", height: "100px", objectFit: "contain", marginBottom: "24px" }} />
      <h1 style={{ fontSize: "36px", fontWeight: "900", color: "#0f172a", letterSpacing: "-1px", margin: "0 0 10px" }}>
        Welcome to Roomio
      </h1>
      <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "32px" }}>
        Your interior design platform.
      </p>
      <button
        onClick={() => navigate("/login")}
        style={{
          background: "linear-gradient(135deg,#4f46e5 0%,#4338ca 100%)",
          color: "white", border: "none", borderRadius: "10px",
          padding: "13px 32px", fontSize: "15px", fontWeight: "700",
          cursor: "pointer", fontFamily: "inherit",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
