import React, { useState } from "react";

const continents = [
  {
    name: "Global",
    countries: [
      {
        name: "USA",
        code: "usa",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      },
      {
        name: "India",
        code: "india",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_India.svg/40px-Flag_of_India.svg.png",
      },
      {
        name: "Germany",
        code: "germany",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/40px-Flag_of_Germany.svg.png",
      },
    ],
  },
  {
    name: "North America",
    countries: [
      {
        name: "USA",
        code: "usa",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      },
      {
        name: "Canada",
        code: "canada",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
      },
      {
        name: "Mexico",
        code: "mexico",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
      },
    ],
  },
  {
    name: "South America",
    countries: [
      {
        name: "Brazil",
        code: "brazil",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
      },
      {
        name: "Argentina",
        code: "argentina",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
      },
      {
        name: "Chile",
        code: "chile",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
      },
    ],
  },
  {
    name: "Europe",
    countries: [
      {
        name: "Germany",
        code: "germany",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/40px-Flag_of_Germany.svg.png",
      },
      {
        name: "France",
        code: "france",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      },
      {
        name: "Italy",
        code: "italy",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
      },
    ],
  },
  {
    name: "Africa",
    countries: [
      {
        name: "South Africa",
        code: "south_africa",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_South_Africa.svg/40px-Flag_of_South_Africa.svg.png",
      },
      {
        name: "Nigeria",
        code: "nigeria",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
      },
      {
        name: "Egypt",
        code: "egypt",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
      },
    ],
  },
  {
    name: "Asia",
    countries: [
      {
        name: "India",
        code: "india",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_India.svg/40px-Flag_of_India.svg.png",
      },
      {
        name: "China",
        code: "china",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      },
      {
        name: "Japan",
        code: "japan",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
      },
    ],
  },
  {
    name: "Australia",
    countries: [
      {
        name: "Australia",
        code: "australia",
        logo:
          "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
      },
      {
        name: "New Zealand",
        code: "new_zealand",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
      },
    ],
  },
];

const countryPositions = {
  usa: { x: 150, y: 80 },
  canada: { x: 150, y: 50 },
  mexico: { x: 140, y: 110 },

  brazil: { x: 300, y: 180 },
  argentina: { x: 290, y: 220 },
  chile: { x: 280, y: 210 },

  germany: { x: 520, y: 100 },
  france: { x: 500, y: 120 },
  italy: { x: 540, y: 130 },

  south_africa: { x: 600, y: 230 },
  nigeria: { x: 560, y: 170 },
  egypt: { x: 570, y: 140 },

  india: { x: 700, y: 140 },
  china: { x: 730, y: 120 },
  japan: { x: 760, y: 100 },

  australia: { x: 820, y: 230 },
  new_zealand: { x: 860, y: 250 },
};

export default function WorldLocations() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const selectedContinent = continents.find((c) =>
    c.countries.some((country) => country.code === selectedCountry)
  );

  const toggleDropdown = (continentName) => {
    setOpenDropdown(openDropdown === continentName ? null : continentName);
  };

  const onCountrySelect = (code) => {
    setSelectedCountry(code);
    setOpenDropdown(null);
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          backgroundColor: "#f3f4f6",
          color: "#ff6600",
          padding: "30px 20px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2>Global Locations</h2>
        <h1>
          <b>Making a World of Difference</b>
        </h1>
        <h3>
          Click on the menus or map below for key locations and access to
          websites for each country
        </h3>
      </div>

      {/* Main Content */}
      <div
        style={{
          padding: "20px",
          maxWidth: "900px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            userSelect: "none",
          }}
        >
          {continents.map((continent) => {
            const isOpen = openDropdown === continent.name;
            return (
              <div
                key={continent.name}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  color: isOpen ? "#ff6600" : "#555",
                  fontWeight: isOpen ? "700" : "500",
                  borderBottom: isOpen
                    ? "3px solid #ff6600"
                    : "3px solid transparent",
                  paddingBottom: "6px",
                  transition: "color 0.3s, border-bottom 0.3s",
                  minWidth: "90px",
                  textAlign: "center",
                }}
                onClick={() => toggleDropdown(continent.name)}
                onMouseEnter={() => setOpenDropdown(continent.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {continent.name}

                {/* Dropdown */}
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 5px)",
                    left: 0,
                    width: "max-content",
                    maxWidth: "300px",
                    backgroundColor: "white",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                    borderRadius: "6px",
                    padding: isOpen ? "10px 15px" : "0 15px",
                    overflow: "hidden",
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                    transition:
                      "max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease",
                    zIndex: 10,
                    pointerEvents: isOpen ? "auto" : "none",
                  }}
                >
                  {continent.countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => onCountrySelect(country.code)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "8px",
                        fontSize: "14px",
                        color:
                          selectedCountry === country.code
                            ? "#ff6600"
                            : "#333",
                        fontWeight:
                          selectedCountry === country.code ? "700" : "400",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      <img
                        src={country.logo}
                        alt={country.name}
                        style={{
                          width: "28px",
                          height: "18px",
                          objectFit: "cover",
                          borderRadius: "2px",
                          border: "1px solid #ddd",
                        }}
                      />
                      {country.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* SVG Map */}
        <svg
          width="900"
          height="300"
          viewBox="0 0 900 300"
          style={{
            marginTop: "40px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* World Map Background */}
          <image
            href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/BlankMap-World.svg/900px-BlankMap-World.svg.png"
            x="0"
            y="0"
            width="900"
            height="300"
            preserveAspectRatio="xMidYMid meet"
            style={{ opacity: 0.9 }}
          />

          {/* Highlight countries */}
          {selectedContinent &&
            selectedContinent.countries.map((country) => {
              const pos = countryPositions[country.code];
              if (!pos) return null;
              return (
                <rect
                  key={country.code + "_highlight"}
                  x={pos.x - 25}
                  y={pos.y - 25}
                  width={50}
                  height={50}
                  rx={10}
                  ry={10}
                  fill="#ff6600"
                  opacity={0.15}
                />
              );
            })}

          {/* Interactive Country Circles */}
          {Object.entries(countryPositions).map(([code, pos]) => {
            const isSelected = selectedCountry === code;
            return (
              <circle
                key={code}
                cx={pos.x}
                cy={pos.y}
                r={20}
                fill={isSelected ? "#ff6600" : "#fff"}
                stroke={isSelected ? "#ff6600" : "#ccc"}
                strokeWidth={2}
                style={{ cursor: "pointer" }}
                onClick={() => onCountrySelect(code)}
                onMouseEnter={() => setOpenDropdown(null)}
              />
            );
          })}

          {/* Inner dot */}
          {selectedCountry && countryPositions[selectedCountry] && (
            <circle
              cx={countryPositions[selectedCountry].x}
              cy={countryPositions[selectedCountry].y}
              r={7}
              fill="#fff"
              stroke="#ff6600"
              strokeWidth={3}
            />
          )}
        </svg>
      </div>
    </div>
  );
}
