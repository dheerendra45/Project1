// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

export default function Specification() {
  // const controls = useAnimation();
  // const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [inView, controls]);

  // const fadeUp = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <div className="py-16 px-6 bg-white text-black" >
      {/* <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        className="max-w-7xl mx-auto space-y-10"
      > */}
      <div className="max-w-7xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Structural Product Range with Technical Specifications</h1>

        {/* Compliance */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">National & International Compliance</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>ISO 9001:2015 – Quality Management System</li>
            <li>ISO 14001:2015 – Environmental Management System</li>
            <li>ISO 45001:2018 – Occupational Health & Safety Management</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Indian Standards Compliance</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>IS 2062:2011 – Standards for Structural Steel Standards</li>
            <li>IS 2830:2012 – Standards for Carbon Steel Billets Standards</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Sustainability & Testing Certifications</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Green Pro Certification (CII) – Certified as an environmentally sustainable product</li>
            <li>NABL Accredited Labs (ISO/IEC 17025:2017) – Ensures accurate and reliable material testing</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Grades & Products</h3>
          <p>
            All Structural Steel products – MS Angle, MS Channel, MS Beam, MS Flat are as per Grade E-250.
            The detailed technical specifications to be mentioned of each line of product are provided below:
          </p>
        </div>

        <div className="space-y-10">
          {/* Table data inserted here from previous code */}
          <TableSection
            title="MS Angles (Equal Leg Angles)"
            columns={["Section (mm)", "Sectional Weight (kg/m)"]}
            data={[
              ["ISA 25x25x5", "1.80"],
              ["ISA 30x30x5", "2.20"],
              ["ISA 35x35x5", "2.60"],
              ["ISA 35x35x6", "3.00"],
              ["ISA 40x40x5", "3.00"],
              ["ISA 40x40x6", "3.50"],
              ["ISA 50x50x5", "3.80"],
              ["ISA 50x50x6", "4.50"],
              ["ISA 65x65x6", "5.80"],
              ["ISA 65x65x8", "6.50"],
              ["ISA 75x75x6", "6.50"],
              ["ISA 75x75x8", "7.70"],
              ["ISA 90x90x6", "8.20"],
              ["ISA 90x90x8", "10.80"],
              ["ISA 100x100x6", "9.20"],
              ["ISA 100x100x8", "12.10"],
              ["ISA 100x100x10", "15.90"],
              ["ISA 100x100x12", "19.70"],
              ["ISA 110x110x8", "13.40"],
              ["ISA 110x110x9", "15.70"],
              ["ISA 110x110x10", "16.60"],
              ["ISA 110x110x12", "19.70"],
              ["ISA 130x130x8", "20.30"],
              ["ISA 130x130x10", "25.20"],
              ["ISA 130x130x12", "29.20"],
              ["ISA 130x130x16", "34.80"],
              ["ISA 150x150x10", "36.90"],
              ["ISA 150x150x12", "45.60"],
              ["ISA 150x150x15", "60.00"],
              ["ISA 150x150x20", "76.40"],
              ["ISA 200x200x12", "60.00"],
              ["ISA 200x200x16", "76.40"],
              ["ISA 200x200x20", "90.00 (est.)"],
            ]}
          />


          <TableSection
            title="MS Channels"
            columns={["Section", "Sectional Weight (kg/m)", "Depth (mm)", "Flange Width (mm)"]}
            data={[
              ["ISMC 75x40", "7.14", "70", "40"],
              ["ISMC 100x50", "9.60", "100", "50"],
              ["ISMC 125x65", "13.10", "125", "65"],
              ["ISMC 150x75", "16.80", "150", "75"],
              ["ISMC 175x75", "19.60", "175", "75"],
              ["ISMC 200x75", "22.30", "200", "75"],
              ["ISMC 250x82", "34.20", "250", "82"],
              ["ISMC 300x90", "36.30", "300", "90"],
              ["ISMC 400x100", "50.10", "400", "100"],
            ]}
          />


          <TableSection
            title="MS Beams / Joists (I-Beams & H-Beams)"
            columns={["Section", "Weight (kg/m)", "Depth (mm)", "Flange Width (mm)"]}
            data={[
              ["ISMB 100x50", "8.90", "100", "50"],
              ["ISMB 125x70", "13.30", "125", "70"],
              ["ISMB 150x75", "15.00", "150", "75"],
              ["ISMB 175x85", "19.60", "175", "85"],
              ["ISMB 200x100", "24.20", "200", "100"],
              ["ISMB 250x125", "37.30", "250", "125"],
              ["ISMB 300x140", "46.00", "300", "140"],
              ["ISMB 350x140", "52.40", "350", "140"],
              ["ISMB 400x140", "61.50", "400", "140"],
              ["ISMB 450x150", "72.40", "450", "150"],
              ["ISMB 500x150", "86.90", "500", "150"],
              ["ISMB 600x210", "123.50", "600", "210"],
            ]}
          />


          <TableSection title="H-Beams" columns={["Section", "Weight (kg/m)", "Depth (mm)", "Flange Width (mm)"]} data={[
            ["HB 116x100", "23.00", "116", "100"],
            ["HB 152x152", "37.10", "152", "152"],
          ]} />

          <TableSection
            title="MS Flats"
            columns={["Section (mm)", "Weight (kg/m)"]}
            data={[
              ["19x6", "0.895"],
              ["20x5", "0.785"],
              ["20x6", "0.942"],
              ["25x5", "0.981"],
              ["25x6", "1.180"],
              ["30x5", "1.180"],
              ["32x5", "1.256"],
              ["32x6", "1.500"],
              ["40x5", "1.570"],
              ["40x6", "1.880"],
              ["50x5", "1.960"],
              ["50x6", "2.355"],
            ]}
          />


          <TableSection title="Gate Channels" columns={["Section (mm)", "Weight (kg/m)"]} data={[
            ["20x10x3", "0.860"],
          ]} />

          <TableSection title="Square Bars" columns={["Section (mm)", "Weight (kg/m)"]} data={[
            ["10x10", "0.784"],
            ["12x12", "1.132"],
            ["16x16", "2.008"],
          ]} />

          <TableSection title="Z Angles" columns={["Section (mm)", "Weight (kg/m)"]} data={[
            ["Z-Angle 20x25x20x3", "1.420"],
          ]} />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Applications Across Industries</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 font-semibold">Product</th>
                  <th className="border px-4 py-2 font-semibold">Typical Applications</th>
                </tr>
              </thead>
              <tbody>
                {/* All application rows included from previous code */}
                <tr>
                  <td className="border px-4 py-2 align-top">MS Angles</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Structural bracing and support in buildings and industrial sheds</li>
                      <li>Transmission towers</li>
                      <li>Bridges</li>
                      <li>Frameworks for machinery</li>
                      <li>Ladders</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">MS Channels</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Purlins in roof trusses</li>
                      <li>Support frames for heavy machinery</li>
                      <li>Vehicle chassis</li>
                      <li>Conveyor systems</li>
                      <li>Industrial & commercial buildings</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">MS Beams (ISMB)</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Load-bearing structures in buildings</li>
                      <li>Bridges</li>
                      <li>Flyovers</li>
                      <li>Industrial sheds</li>
                      <li>Heavy equipment support</li>
                      <li>Metro and rail structures</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">H-Beams (ISHB)</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>High-load infrastructure like bridges</li>
                      <li>Large-span buildings</li>
                      <li>Columns and heavy-duty support systems</li>
                      <li>Power plants, metros</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">MS Flats</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Ladders, gates, grills, window frames</li>
                      <li>Construction of frames and base plates</li>
                      <li>Fabrication and support structures</li>
                      <li>Earthing strips</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">Gate Channels</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Gate and door frames</li>
                      <li>Lightweight fabrication</li>
                      <li>Fencing and barricades</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">Square Bars</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Tool and die making</li>
                      <li>Ornamental iron works</li>
                      <li>Gratings and gates</li>
                      <li>Fabricated structures</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">Z Angles</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Support brackets</li>
                      <li>Secondary framing in construction</li>
                      <li>Architectural and decorative elements</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Approvals</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 font-semibold w-1/3">Category</th>
                  <th className="border px-4 py-2 font-semibold">Entities</th>
                </tr>
              </thead>
              <tbody>
                {/* All approval rows included from previous code */}
                <tr>
                  <td className="border px-4 py-2 align-top">State Infrastructure Development Corporations</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Bridge, Ropeway, Tunnel & Other Infrastructure Development Corporation of Uttarakhand Limited (BRIDCUL)</li>
                      <li>Uttarakhand Project Development & Construction Corporation Limited</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">State Electricity Distribution Utilities and Transmission Utilities</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Maharashtra State Electricity Distribution Co. Limited (MSEDCL)</li>
                      <li>Madhya Pradesh Poorv Kshetra Vidyut Vitaran Co. Limited (MPPKVVCL)</li>
                      <li>Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Limited (MPPKVVCL)</li>
                      <li>South Bihar Power Distribution Company Limited (SBPDCL)</li>
                      <li>Gujarat Energy Transmission Corporation Limited (GETCO)</li>
                      <li>Power Transmission Corporation of Uttarakhand Limited (PTCUL)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">Water Supply & Sanitation Departments</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Jal Nigam, Uttarakhand</li>
                      <li>Rural Water Supply & Sanitation, Odisha (RWSS, Odisha)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">Rural & Public Works Departments</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Irrigation Department, Uttarakhand</li>
                      <li>Uttarakhand Rural Works Department</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 align-top">Urban Development Authorities</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Raipur Development Authority (RDA)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableSection({ title, columns, data }) {
  return (
    <div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="border px-4 py-2">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className="border px-4 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
