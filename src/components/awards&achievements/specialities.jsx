import a1 from "./images/specialities1.jpg";
import a2 from "./images/specialities2.png";

export default function Specialities() {
    return (
        <div
            style={{
                display: "flex",
                height: "500px",
                backgroundImage: `url(${a1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
            }}
        >
            {/* Left side - transparent background with white text */}
            <div
                style={{
                    flex: 6,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "40px",
                }}
            >
                <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>OUR SPECIALITIES</h1>
                <h2 style={{ fontSize: "18px", lineHeight: "1.6" }}>
                    Sed ut perspiciatis omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                </h2>
            </div>

            {/* Right side - full-height image with transparent background */}
            <div
                style={{
                    flex: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={a2}
                    alt="Speciality"
                    style={{
                        height: "100%",
                        width: "auto",
                        filter: "drop-shadow(0 0 0 white) drop-shadow(0 0 4px white) drop-shadow(0 0 0px white)",
                    }}
                />
            </div>
        </div>
    );
}
