import { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";
import { motion, useInView, AnimatePresence } from "framer-motion";
import l1 from "../../assets/leadership/l1.jpg";
import l2 from "../../assets/leadership/l2.jpg";
import l3 from "../../assets/leadership/l3.jpg";
import l4 from "../../assets/leadership/l4.jpg";
import l5 from "../../assets/leadership/l5.jpg";
import l6 from "../../assets/leadership/l6.jpg";
import l7 from "../../assets/leadership/l7.png";
import l8 from "../../assets/leadership/l8.jpg";
import l9 from "../../assets/leadership/l9.png";
import l10 from "../../assets/leadership/l10.jpg";
import l11 from "../../assets/leadership/l11.png";
import l12 from "../../assets/leadership/l12.png";

const sidebarOptions = ["BOARD OF DIRECTORS", "BOARD COMMITTEES"];

const directors = [
  {
    img: l1,
    name: "Mahabir Prasad Agarwal",
    role: "Chairman Emeritus",
    description: `Mahabir Prasad Agarwal is an accomplished business leader and a first generation entrepreneur having more than 50 Years of experience in steel & ferro alloys industries. He has the foresight to lead the company on a transformational journey and contributing significantly in growth path of the company. Mahabir Prasad Agarwal stepped down from the position of Chairman during Board Meeting held on 9th May 2025 and was simultaneously conferred the title of Chairman Emeritus.

Key Highlights:
- Over 50 years of experience in steel & ferro alloys industries
- Instrumental in the growth journey of the company
- Conferred title of Chairman Emeritus on 9th May 2025

List of Directorship:
1. Shyam Metalics and Energy Ltd. – Director
2. Narantak Dealcomm Ltd. – Managing Director
3. Suhag Overseas Trading Pvt. Ltd. – Director
4. Britasia Hydro Power Pvt. Ltd. – Director
5. Kalinga Energy & Power Limited – Director
6. Shyam Century Multi Projects Pvt. Ltd. – Director
7. Whispering Developers Pvt. Ltd. – Director`,
  },
  {
    img: l2,
    name: "Brij Bhushan Agarwal",
    role: "Chairman & Managing Director",
    description: `Mr. Brij Bhushan Agarwal is a visionary leader and an industry stalwart in the metal and mining sector. As the Chairman & Managing Director of Shyam Metalics and Energy Ltd., he has been instrumental in driving the company's strategic growth and establishing it as one of India's foremost integrated metal producers.

With over two decades of leadership excellence, Mr. Agarwal has successfully expanded the company's footprint both domestically and globally. Under his stewardship, Shyam Metalics has become India's largest producer of Ferro Alloys and a key player in the steel value chain. The company's diverse product portfolio including sponge iron, billets, TMT bars, structural steel, wire rods, stainless steel, aluminum foil, pipes, and color-coated sheets serves over 25,000 customers worldwide, contributing to an annual turnover of ₹30,000 crore.

Mr. Agarwal holds a commerce degree from the University of Calcutta and has completed executive programs at Harvard University and Singularity University, Silicon Valley. His sharp business acumen and forward thinking approach have consistently driven robust EBITDA growth and maintained a resilient balance sheet since 2005.

List of Directorship:
1. Shyam Metalics and Energy Ltd. – Chairman & Managing Director
2. Shyam Sel and Power Ltd. – Managing Director
3. Shyam Century Cement Industries Ltd. – Director
4. Star Cement Ltd. – Director
5. Indian Chamber of Commerce Calcutta – Director`,
  },
  {
    img: l3,
    name: "Sanjay Kumar Agarwal",
    role: "Joint Managing Director",
    description: `Sanjay Kumar Agarwal is the Joint Managing Director of our Company. He has been a Director of our Company since its inception in December 2002. He holds a bachelor's degree in commerce with honours from the University of Calcutta and brings over 25 years of experience in the steel and ferro alloys industry. He is primarily responsible for the operations at our manufacturing plants in Sambalpur, Jamuria and Mangalpur, with focus on cost control, production efficiency and the competitive procurement of raw materials.

List of Directorship:
1. Shyam Metalics And Energy Limited – Managing Director
2. Shyam SEL and Power Limited – Managing Director
3. SMEL Specialty Alloys Private Limited – Director
4. Shyam Century Metallic Limited – Director
5. Shyam Metalics Flat Product Private Limited – Director
6. Shyam Energy Limited – Director
7. Kalpataru Housefin & Trading Private Limited – Director`,
  },
  {
    img: l4,
    name: "Deepak Agarwal",
    role: "Whole-time Director",
    description: `Deepak Agarwal is a Whole-Time Director and the Chief Financial Officer of our company. He has been a Director since July 14, 2014. He holds a bachelor's degree in commerce with honours from the University of Calcutta and is an associate member of the Institute of Company Secretaries of India. He has previously been associated with Shyam SEL and Power Limited since 2000 and has two decades of experience in the steel and ferro alloys industry. He is responsible for overseeing finance, risk management, and corporate affairs for our company and its subsidiaries.

List of Directorship:
1. Shyam Metalics and Energy Ltd. – Director
2. Improved Realtors Pvt. Ltd. – Director
3. Shyam Energy Ltd. – Director`,
  },
  {
    img: l5,
    name: "Sheetij Agarwal",
    role: "Whole-time Director",
    description: `Mr. Sheetij Agarwal is a Director of our company. He has pursued a Bachelor of Science in Business Administration from the D'Amore Mckim School of Business at Northeastern University. He is also a key person in developing a strategic roadmap to strengthen Shyam Metalics's position as a global trailblazer in the steel industry. He also offers his expertise on market intelligence, evaluative growth opportunities, capital investments, and brand alliances for Shyam Metalics. He is primarily responsible for the establishment of the company's footprint in the domestic market and over 40 international markets.

List of Directorship:
1. Shyam Metalics And Energy Ltd. – Whole-time Director
2. Subham Capital Private Ltd. – Director
3. SMEL Industrial Park Pvt. Ltd. – Director
4. Dorite Tracon Pvt. Ltd. – Director
5. Subham Buildwell Pvt. Ltd. – Director
6. All India Foil Manufacturers Association – Director
7. Glowing Realty Pvt Ltd. – Director
8. Shyam Metalics Flat Product Pvt. Ltd. – Director
9. SS Alufoils Pvt. Ltd. – Director
10. Damodar Aluminium Pvt. Ltd. – Director
11. SMEL Steel Structural Private Ltd. – Director`,
  },
  {
    img: l6,
    name: "Dev Kumar Tiwari",
    role: "Whole-time Director",
    description: `Dev Kumar Tiwari is a Whole-Time Director of our Company. He has been a Director of our Company since April 10, 2009. He holds a bachelor's degree in arts (honours) from Bihar University, Muzaffarpur. Prior to his appointment as Director, he was a mechanical engineer in our Subsidiary, SSPL for 7 years. He has over 23 years of experience in the steel and ferro alloys industry. He is responsible for project implementation and operations of our Sambalpur manufacturing plant.

List of Directorship:
1. Shyam Greenfield Developer Private Limited – Director
2. Sygma Tubes & Pipes Private Limited – Director
3. Ramsarup Industries Limited – Director
4. Shyam Metalics and Energy Limited – Director
5. SMEL Steel Structural Private Limited – Director
6. Star Metalworks Private Limited – Director
7. Natural Resources Energy Private Limited – Additional Director`,
  },
  {
    img: l7,
    name: "Kishan Gopal Baldwa",
    role: "Independent Director",
    description: `Kishan Gopal Baldwa is an Independent Director of our company and has served in this role since May 15, 2018. He holds a bachelor's degree in commerce from the University of Rajasthan. He has been a fellow member of the Institute of Chartered Accountants of India for 38 years and has obtained a certificate of practice from the Institute of Chartered Accountants of India.

List of Directorship:
1. Meshal Metal Trading Private Limited – Director
2. Seatco Mercantile Private Limited – Director
3. Pradeep Realmart Private Limited – Director
4. Web Exposition Pvt Ltd – Director
5. Serampore Belting Works Private Limited – Director
6. Narantak Dealcomm Limited – Independent Director
7. Shyam Metalics And Energy Limited – Independent Director
8. Turtle Limited – Independent Director
9. Subham Capital Private Limited – Independent Director`,
  },
  {
    img: l8,
    name: "Rajni Mishra",
    role: "Independent Woman Director",
    description: `Rajni Mishra is an Independent Director of our company and has served in this role since February 12, 2021. She holds a bachelor's degree in Botany from Calcutta University and a master's degree in Business Administration from the West Bengal University of Technology. She is also an associate member of the Institute of Company Secretaries of India.

List of Directorship:
1. Shyam Metalics And Energy Limited – Independent Director
2. Alpine Commercial Co. Ltd. – Independent Director
3. Western Carriers (India) Ltd. – Independent Director`,
  },
  {
    img: l9,
    name: "Nand Gopal Khaitan",
    role: "Independent Director",
    description: `Nand Gopal Khaitan is an Independent Director of our Company. He has been a Director of our Company since February 14, 2023. He has been registered as an advocate with the bar council of West Bengal since June 20, 1974. He is currently a partner at Khaitan & Co.

List of Directorship:
1. AGI Greenpac Limited – Director
2. Mangalam Cement Limited – Director
3. Reliance Chemotex Industries Limited – Director
4. Hindware Home Innovation Limited – Independent Director
5. Shyam Metalics and Energy Limited – Independent Director
6. HEG Limited – Independent Director
7. Rowdon Business Pvt Ltd – Director
8. Xenix Servis Pvt Ltd – Director
9. Ushodaya Marketing Pvt Ltd – Director
10. Srijan Vinimay Pvt Ltd – Director
11. Bharat Chamber of Commerce – Director`,
  },
  {
    img: l10,
    name: "Malay Kumar De",
    role: "Independent Director",
    description: `Malay Kumar De is an Independent Director of our company. He has been a Director of our Company since July 27, 2023. He holds a masters' in science degree in organic chemistry from the University of North Bengal, Siliguri. A retired IAS officer, he served as Chief Secretary of West Bengal until his retirement on September 30, 2019.

List of Directorship:
1. Shyam Metalics And Energy Limited – Independent Director
2. Shyam Sel And Power Limited – Independent Director
3. Ramsarup Industries Limited – Independent Director`,
  },
  {
    img: l11,
    name: "Shashi Kumar",
    role: "Independent Director",
    description: `Shashi Kumar is an Independent Director of our company. He has been a Director of our Company since September 21, 2023. He holds a bachelor's degree in Science from Patna University and also holds a bachelor's degree in science (Honours) in Mining Engineering from the Indian School of Mines, Dhanbad, Ranchi University. Prior to joining our company, he was associated with Coal India Limited as chairman.

List of Directorship:
1. Shyam Metalics And Energy Limited – Independent Director
2. Indian Mining Consultancy Private Limited – Director
3. Ordnc 2024 000040 U14100GJ2005PTC045857 Private Limited – Director
4. Shyam SEL and Power Limited – Additional Director`,
  },
  {
    img: l12,
    name: "Chandra Shekhar Verma",
    role: "Independent Director",
    description: `Mr. Chandra Shekhar Verma was appointed as an Independent Director of our company on July 4, 2024. He is a Fellow Member of the Institute of Company Secretaries of India, a member of the Institute of Cost & Works Accountants of India. Additionally, he holds a Bachelor's degree in Law and Legislature as well as a master's degree in Commerce and Business Administration.

List of Directorship:
1. Welspun Corp Limited – Independent Director
2. SML Isuzu Limited – Independent Director
3. Shyam Metalics And Energy Limited – Independent Director
4. Multi Commodity Exchange of India Limited – Independent Director
5. Royalux Lighting Private Limited – Director
6. IKIO Technologies Limited – Independent Director
7. Firstadvantage Consulting Group Limited – Director`,
  },
  {
    img: "https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=BJ",
    name: "Birendra Kumar Jain",
    role: "Company Secretary",
    description:
      "Birendra Kumar Jain is the Company Secretary and Compliance Officer of our Company and has been associated with us since April 6, 2018. He holds a bachelor's degree in commerce from the University of Calcutta. He is also a member of the Institute of Company Secretaries of India. With over two decades of experience as a company secretary, he brings extensive expertise to the role.",
  },
];

const boardCommittees = [
  {
    name: "Audit Committee",
    members: [
      "Kishan Gopal Baldwa, Chairman, Non Executive Independent",
      "Sanjay Kumar Agarwal, Member, Executive",
      "Rajni Mishra, Member, Non Executive Independent",
    ],
  },
  {
    name: "Nomination and Remuneration Committee",
    members: [
      "Kishan Gopal Baldwa, Chairman, Non Executive Independent",
      "Shashi Kumar, Member, Non Executive Independent",
      "Mahabir Prasad Agarwal, Member, Non Executive",
    ],
  },
  {
    name: "Stakeholder Relationship Committee",
    members: [
      "Chandra Shekhar Verma, Chairman, Non Executive Independent",
      "Sanjay Kumar Agarwal, Member, Executive",
      "Rajni Mishra, Member, Non Executive Independent",
    ],
  },
  {
    name: "CSR Committee",
    members: [
      "Mahabir Prasad Agarwal, Chairman, Non Executive",
      "Brij Bhushan Agarwal, Member, Executive",
      "Rajni Mishra, Member, Non Executive Independent",
    ],
  },
  {
    name: "Risk Management Committee",
    members: [
      "Kishan Gopal Baldwa, Chairman, Non Executive Independent",
      "Brij Bhushan Agarwal, Member, Executive",
      "Deepak Agarwal, Member, Executive",
    ],
  },
  {
    name: "Executive Committee",
    members: [
      "Mahabir Prasad Agarwal, Chairman, Non Executive",
      "Brij Bhushan Agarwal, Member, Executive",
      "Sanjay Kumar Agarwal, Member, Executive",
      "Deepak Agarwal, Member, Executive",
    ],
  },
];

export default function LeadershipTeam() {
  const [selected, setSelected] = useState("BOARD OF DIRECTORS");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [selectedDirector, setSelectedDirector] = useState(null);

  const renderCard = (person, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y: -5 }} // This adds the upward movement on hover
      transition={{ duration: 0.3 }}
      className="flex flex-col bg-white rounded-xl p-4 shadow-md w-full border border-gray-200 cursor-pointer hover:shadow-lg transition-all"
      onClick={() => setSelectedDirector(person)}
    >
      <div className="flex items-center gap-4 mb-3">
        <img
          src={person.img}
          alt={person.name}
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
            {person.name}
          </h2>
          <h4 className="text-orange-600 text-xs md:text-sm font-medium leading-tight">
            {person.role}
          </h4>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3 whitespace-pre-line leading-relaxed">
        {person.description.substring(0, 120)}...
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setSelectedDirector(person);
        }}
        className="self-start text-sm text-orange-600 hover:text-orange-700 font-medium hover:underline transition-colors"
      >
        Read More →
      </button>
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 font-inter relative">
      {/* Centered Navigation Buttons */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="flex flex-row gap-4">
          {sidebarOptions.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`px-6 py-3 rounded-full border-2 transition-all font-medium text-sm whitespace-nowrap ${
                selected === item
                  ? "bg-orange-600 text-white border-orange-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-blue-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 md:space-y-10" ref={sectionRef}>
        {selected === "BOARD OF DIRECTORS" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Board of Directors
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {directors.map((person, index) => renderCard(person, index))}
            </div>
          </div>
        )}

        {selected === "BOARD COMMITTEES" && (
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Board Committees
            </h1>
            <div className="max-w-4xl mx-auto">
              {boardCommittees.map((committee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md mb-6 border border-gray-200"
                >
                  <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    {committee.name}
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
                    {committee.members.map((member, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {member}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal for Director Details */}
      <AnimatePresence>
        {selectedDirector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedDirector(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={selectedDirector.img}
                    alt={selectedDirector.name}
                    className="w-24 h-24 object-cover rounded-full flex-shrink-0"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {selectedDirector.name}
                    </h2>
                    <h4 className="text-blue-600 font-medium">
                      {selectedDirector.role}
                    </h4>
                  </div>
                  <button
                    onClick={() => setSelectedDirector(null)}
                    className="ml-auto text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
                  {selectedDirector.description}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
