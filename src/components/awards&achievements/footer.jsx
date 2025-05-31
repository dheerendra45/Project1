import a1 from "./images/logo.png";
import a2 from "./images/footerbg.png";

export default function Footer() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.4), rgba(128, 128, 128, 0.4)), url(${a2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "black",
                padding: "40px 20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "30px",
            }}
        >
            {/* Section 1 - Logo and Info */}
            <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
                <img src={a1} alt="Logo" style={{ width: "150px", marginBottom: "20px" }} />
                <h2 style={{ marginBottom: "10px" }}>
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently works.
                </h2>
                <h1
                    style={{
                        border: "2px solid orange",
                        padding: "10px",
                        display: "inline-block",
                        margin: "20px 0",
                        color: "black",
                    }}
                >
                    Since 2007
                </h1>
                <h2>
                    @2025 Industries. Designed by <span style={{ color: "#F48120" }}>Webisdom</span>
                </h2>
            </div>

            {/* Section 2 - Useful Links */}
            <div style={{ flex: "1 1 300px", maxWidth: "300px" }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Useful Links</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <div style={{ flex: "1 1 120px" }}>
                        <a href="" style={linkStyle}>About Us</a>
                        <a href="" style={linkStyle}>Project</a>
                    </div>
                    <div style={{ flex: "1 1 120px" }}>
                        <a href="" style={linkStyle}>Careers</a>
                        <a href="" style={linkStyle}>Blog</a>
                    </div>
                    <div style={{ flex: "1 1 120px" }}>
                        <a href="" style={linkStyle}>Privacy Policy</a>
                        <a href="" style={linkStyle}>Service</a>
                    </div>
                    <div style={{ flex: "1 1 120px" }}>
                        <a href="" style={linkStyle}>Pricing</a>
                        <a href="" style={linkStyle}>Team</a>
                    </div>
                    <div style={{ flex: "1 1 120px" }}>
                        <a href="" style={linkStyle}>Contact</a>
                        <a href="" style={linkStyle}>Terms of use</a>
                    </div>
                </div>
            </div>

            {/* Section 3 - Newsletter */}
            <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
                <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Newsletter</h2>
                <h2 style={{ marginBottom: "20px" }}>
                    Subscribe for the latest news. Stay updated on the latest trends industrie.
                </h2>
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    style={{
                        padding: "10px",
                        width: "100%",
                        maxWidth: "300px",
                        marginBottom: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
                <br />
                <button
                    style={{
                        backgroundColor: "#F48120",
                        color: "white",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Subscribe Now -&gt;
                </button>
            </div>
        </div>
    );
}

const linkStyle = {
    display: "block",
    marginBottom: "10px",
    color: "black",
    textDecoration: "none",
};