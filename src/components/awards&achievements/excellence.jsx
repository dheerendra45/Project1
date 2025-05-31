import { useState, useEffect } from "react";
import a1 from "./images/excellence1.png";
import a2 from "./images/excellence2.png";
import a3 from "./images/excellence3.png";

export default function Excellence() {
    const images = [a1, a2, a3];
    const [index, setIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    const handleResize = () => {
        setIsDesktop(window.innerWidth > 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const center = images[index];
    const left = images[(index - 1 + images.length) % images.length];
    const right = images[(index + 1) % images.length];

    return (
        <div style={{ backgroundColor: "white", padding: "40px", textAlign: "center" }}>
            <h1 style={{ color: "#f97316", fontSize: "32px", marginBottom: "20px" }}>
                AWARDS THAT DEFINE OUR EXCELLENCE
            </h1>

            <div
                style={{
                    backgroundColor: "#f97316",
                    padding: "30px",
                    borderRadius: "12px",
                    margin: "0 auto 40px",
                    maxWidth: "600px",
                }}
            >
                <h1 style={{ color: "white", fontSize: "28px", marginBottom: "10px" }}>
                    The National Award
                </h1>
                <h2 style={{ color: "black", fontSize: "20px", marginBottom: "10px" }}>
                    Every award represents a story of ambition, effort <br /> and dreams turned into reality.
                </h2>
                <h1 style={{ color: "white", fontSize: "22px" }}>(1st January 2004)</h1>
            </div>

            <div style={{ padding: "30px", borderRadius: "12px", position: "relative" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: isDesktop ? "40px" : "20px",
                        flexWrap: "wrap",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            flex: isDesktop ? "1" : "unset",
                            maxWidth: isDesktop ? "300px" : "150px",
                            height: isDesktop ? "300px" : "150px",
                            backgroundColor: "#e5e7eb",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img src={left} alt="left" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>

                    <div
                        style={{
                            flex: isDesktop ? "1.5" : "unset",
                            maxWidth: isDesktop ? "500px" : "220px",
                            height: isDesktop ? "500px" : "220px",
                            backgroundColor: "#e5e7eb",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <img src={center} alt="center" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>

                    <div
                        style={{
                            flex: isDesktop ? "1" : "unset",
                            maxWidth: isDesktop ? "300px" : "150px",
                            height: isDesktop ? "300px" : "150px",
                            backgroundColor: "#e5e7eb",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img src={right} alt="right" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </div>

                <div style={{ marginTop: "20px" }}>
                    <button
                        onClick={handlePrev}
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                            padding: "12px 24px",
                            marginRight: "20px",
                            borderRadius: "8px",
                            fontSize: "40px",
                            cursor: "pointer",
                        }}
                    >
                        ◀
                    </button>
                    <button
                        onClick={handleNext}
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                            padding: "12px 24px",
                            borderRadius: "8px",
                            fontSize: "40px",
                            cursor: "pointer",
                        }}
                    >
                        ▶
                    </button>
                </div>
            </div>
        </div>
    );
}
