import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import a1 from '../../assets/Jobopportunity/join1.jpg';
import a2 from '../../assets/Jobopportunity/join2.jpg'; // Ensure this image exists

export default function Join() {
  const refJoin = useRef(null);
  const refLogin = useRef(null);

  const isJoinInView = useInView(refJoin, { amount: 0.3 });
  const isLoginInView = useInView(refLogin, { amount: 0.3 });

  const animationVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="px-6 md:px-16 py-12 space-y-16 text-gray-900 bg-gray-50">
      {/* Intro Paragraphs */}
      <div className="max-w-4xl mx-auto space-y-4 text-center">
        <p>
          A drive for innovation and continuous improvement is at the heart of our company's purpose: <strong>Finding better ways™</strong> to provide the materials the world needs.
        </p>
        <p>
          Here, you’ll find a home for curious people who care about their work and colleagues, are courageous about finding better ways to do things, and are empowered to adapt quickly to solve problems and meet opportunities.
        </p>
        <p>
          We are committed to an inclusive environment where people feel comfortable to be themselves. And we want our people to feel that all voices are heard, all cultures respected, and that a variety of perspectives are not only welcome – they are essential to our success.
        </p>
        <p>
          Our values – <strong>care, courage and curiosity</strong> – guide how we work and how we treat each other.
        </p>
      </div>

      {/* Join Our Team Section */}
      <motion.div
        ref={refJoin}
        variants={animationVariants}
        initial="hidden"
        animate={isJoinInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row items-center gap-8 bg-white shadow-md rounded-xl p-6"
      >
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Join our team</h1>
          <p>
            If you are curious and creative, ingenious and hard working, join us – we want you on our team. Search jobs and join our Talent Network to receive updates.
          </p>
          <div className="space-x-4 mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Search Jobs
            </button>
            <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
              Talent Network
            </button>
          </div>
        </div>
        <img src={a1} alt="Join team" className="md:w-1/2 w-full rounded-xl object-cover" />
      </motion.div>

      {/* Application Login Section */}
      <motion.div
        ref={refLogin}
        variants={animationVariants}
        initial="hidden"
        animate={isLoginInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white shadow-md rounded-xl p-6"
      >
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Application Login</h1>
          <p>
            Log in or register to apply online, view your status and update your profile.
          </p>
          <div className="space-x-4 mt-4">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Login
            </button>
            <button className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
              Register
            </button>
          </div>
        </div>
        <img src={a2} alt="Application login" className="md:w-1/2 w-full rounded-xl object-cover" />
      </motion.div>
    </div>
  );
}
