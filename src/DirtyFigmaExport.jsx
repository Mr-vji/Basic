export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      {/* Top Header */}
      <div
        style={{
          position: "absolute",
          top: 40,
          left: 40,
          right: 40,
          width: "calc(100% - 80px)",
          padding: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 10,
          pointerEvents: "all",
        }}
      >
        <a
          href="https://www.yesca.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <img
            src="./YESCA_FULL_LOGO.svg"
            alt="Brand Logo"
            style={{
              height: 30,
              maxWidth: "clamp(100px, 15vw, 200px)",
              objectFit: "contain",
              margin: 0,
            }}
          />
        </a>

        <a
          href="https://www.yesca.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <img
            src="./yy.svg"
            alt="Brand Logo"
            style={{
              height: 30,
              maxWidth: "clamp(100px, 15vw, 200px)",
              objectFit: "contain",
              margin: 0,
            }}
          />
        </a>
      </div>

      {/* Left Side Text */}
      <div
        style={{
          position: "absolute",
          left: window.innerWidth <= 768 ? "clamp(10px, 2vw, 20px)" : "40px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(11px, 2vw, 12px)",
          lineHeight: "1.5em",
          color: "black",
          maxWidth: "clamp(100px, 20vw, 150px)",
        }}
      >
        <br />

        <br />
      </div>

      {/* Right Side Vertical Text */}
      <div
        style={{
          position: "absolute",
          right: window.innerWidth <= 768 ? "clamp(10px, 2vw, 20px)" : "40px",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          transformOrigin: "center",
          fontSize: "clamp(11px, 2vw, 12px)",
          fontWeight: "700",
          lineHeight: "100%",
          textAlign: "center",
          color: "black",
          whiteSpace: "nowrap",
        }}
      >
        DRAG POINTER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
      </div>

      {/* Center Image - Fully Responsive */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "600px",
          aspect: "1 / 1",
        }}
      >
        <img
          src="./basic.png"
          alt="Product Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            maxWidth: "80vw",
            maxHeight: "80vh",
          }}
        />
      </div>

      {/* Bottom Section */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          right: 40,
          width: "calc(100% - 80px)",
          pointerEvents: "all",
          display: "flex",
          flexDirection: window.innerWidth <= 768 ? "column" : "row",
          alignItems: window.innerWidth <= 768 ? "center" : "flex-end",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div
          style={{
            flex: 1,
            fontSize: "clamp(11px, 2vw, 12px)",
            lineHeight: "1.5em",
            color: "black",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          <br />
        </div>

        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: 1,
            fontSize: "clamp(14px, 3vw, 16px)",
            fontWeight: "700",
            lineHeight: "1em",
            textAlign: "center",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          Coming soon — a space to connect in faith.
        </p>

        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
}

export function Overlay() {
  return <div style={{ position: "absolute", bottom: 40, right: 40 }}></div>;
}
