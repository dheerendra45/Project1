import { motion } from "framer-motion";
import a1 from "../../assets/Lifeshyam/ourvalues1.jpg";
import a2 from "../../assets/Lifeshyam/ourvalues2.jpg";
import a3 from "../../assets/Lifeshyam/ourvalues3.jpg";
import a4 from "../../assets/Lifeshyam/ourvalues4.jpg";

const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const valuesData = [
  {
    title: "Integrity",
    text: "Lorem ipsum dolor sit amet consectetur. Vitae aliquam vitae vel cursus. Ut tortor sociis in lectus tincidunt etiam feugiat ut aliquam. Integer facilisi varius duis scelerisque augue semper. Nisl pellentesque lacus lobortis sit nec sapien.",
    img: a1,
  },
  {
    title: "Ownership",
    text: "Lorem ipsum dolor sit amet consectetur. Aliquet laoreet egestas sit congue mauris dolor nulla iaculis. Mattis elit tincidunt hac a ullamcorper eget faucibus. Fames eget orci elit sit nullam. Sed eleifend semper.",
    img: a2,
  },
  {
    title: "Collaboration",
    text: "Lorem ipsum dolor sit amet consectetur. Sit viverra diam amet mauris scelerisque. Lacinia mattis malesuada eu facilisi at diam ornare mattis diam.",
    img: a3,
  },
  {
    title: "Commitment",
    text: "Lorem ipsum dolor sit amet consectetur. Lacus quam nulla eget praesent est. Ultrices nulla aliquam aliquam purus sollicitudin morbi tortor. Etiam phasellus quisque amet nulla amet dui nunc malesuada.",
    img: a4,
  },
];

export default function Ourvalues() {
  return (
    <div className="px-6 py-12 space-y-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-8">
        Our Values
      </h1>

      {valuesData.map((item, index) => {
        const reverse = index % 2 === 1;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Animation */}
            <motion.img
              src={item.img}
              alt={item.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-[350px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={reverse ? rightVariant : leftVariant}
            />

            {/* Text Animation */}
            <motion.div
              className="md:w-1/2 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={reverse ? leftVariant : rightVariant}
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-orange-600">{item.title}</h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.text}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
