import { motion } from "framer-motion";

export default function Customer() {
  const items = [
    { title: "900WA", subtitle: "Capacity" },
    { title: "$16.8 billion", subtitle: "2024 Revenues" },
    { title: "31,800", subtitle: "Craft and staff employees" },
  ];

  return (
    <div className="w-full px-6 py-16 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row gap-10 md:gap-8">
        {/* Left: 70% width */}
        <div className="md:w-[70%]">
          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-black font-space-grotesk leading-tight"
          >
            Always close to our <br /> Customers
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-16 h-1 origin-left bg-orange-500 my-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-sm md:text-base text-gray-700 leading-relaxed"
          >
            At Shyam Metallics, we believe  that delivering excellence  requires being close to our clients. By strategically locating our manufacturing plants in key industrial hubs, we ensure timely delivery, reduce logistics costs, and maintain a seamless supply chain. Our robust regional presence enables us to comprehend the needs of the local market and deliver customised solutions with unparalleled effectiveness. As a leader in the iron and steel industry in India, our Integrated Steel Plant facilities set industry benchmarks for quality and innovation.<br></br>
Whether you require premium ferroalloys, steel, or other metallurgical goods, our customer-focused approach ensures that you always receive the best on schedule. Investors can track our growth through Shyam Metallics share price performance.
          </motion.p>
        </div>

        {/* Right: 30% width and centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:w-[30%] flex flex-col justify-center items-center gap-6"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4 w-full"
            >
              <div className="w-1 h-10 bg-orange-500 rounded-sm" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base text-gray-600">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
