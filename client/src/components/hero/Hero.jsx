function Hero() {
  return (
    <section
      style={{
        minHeight: "88vh",
        background:
          "linear-gradient(135deg, rgba(11,95,255,0.95), rgba(108,99,255,0.92))",
        color: "white",
        padding: "120px 60px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "18px", color: "#00FFD5" }}>
        AI Powered Travel Platform
      </p>

      <h1
        style={{
          fontSize: "58px",
          lineHeight: "1.2",
          marginBottom: "28px",
          fontWeight: "800",
        }}
      >
        Explore the World <br /> with TripNexa
      </h1>

      <p
        style={{
          fontSize: "21px",
          lineHeight: "1.7",
          margin: "0 auto 45px auto",
          maxWidth: "720px",
          opacity: "0.95",
        }}
      >
        Book flights, hotels, trains, buses and holidays with smart AI-powered
        travel planning.
      </p>

      <div
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(18px)",
          padding: "25px",
          borderRadius: "28px",
          maxWidth: "1000px",
          margin: "auto",
          boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            marginBottom: "22px",
            flexWrap: "wrap",
          }}
        >
          {["Flights", "Hotels", "Trains", "Bus", "Holidays"].map((item) => (
            <button
              key={item}
              style={{
                padding: "12px 22px",
                borderRadius: "30px",
                border: "none",
                background: "white",
                color: "#0B5FFF",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
          }}
        >
          <input style={inputStyle} placeholder="From city" />
          <input style={inputStyle} placeholder="To city" />
          <input style={inputStyle} type="date" />
          <button
            style={{
              border: "none",
              borderRadius: "18px",
              background: "linear-gradient(135deg, #00C2A8, #00FFD5)",
              color: "#062033",
              fontSize: "17px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "18px",
  border: "none",
  outline: "none",
  fontSize: "16px",
};

export default Hero;