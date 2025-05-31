import a1 from "./images/herobg.png";

export default function Hero() {
    return (
        <div
            style={{
                backgroundImage: `url(${a1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <div>
                <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
                    AWARDS & ACHIEVEMENTS
                </h1>
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
                    "Recognizing milestones that define our journey - a showcase of excellence, innovation, and dedication"
                </h2>
                <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>
                    "Trophies fade, but the stories behind them stay. Every recognition marks a breakthrough, a bold step forward."
                </h2>
                <h2 style={{ fontSize: '24px', marginBottom: '30px' }}>
                    This is more than a wall of fame - It's a tribute to dedication, belief, and resilience."
                </h2>
                <button
                    style={{
                        backgroundColor: 'orange',
                        color: 'white',
                        padding: '14px 28px',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '18px',
                        cursor: 'pointer',
                    }}
                >
                    Explore Our Journey
                </button>
            </div>
        </div>
    );
}
