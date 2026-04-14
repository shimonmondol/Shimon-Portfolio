import { motion } from "framer-motion";
import img from "../assets/Image.png";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Roles for typing animation
const roles = ["Frontend Developer", "MERN Stack Developer"];

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing effect logic
  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500); // delay before switching role
      return () => clearTimeout(pause);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0b0f14] overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:mt-0 mt-24"
        >
          <p className="inline-block text-white text-2xl font-semibold ">
            <span className="wave">👋</span> Hello, I am
          </p>

          <motion.h1
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-teal-500"
          >
            Shimon Kumar <br />
            <span className="text-gray-300">Mondol</span>
          </motion.h1>

          {/* Typing Role Animation */}
          <h2 className="text-teal-400 text-xl  md:text-2xl  min-h-[1.5rem]">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-400 max-w-lg"
          >
            I craft modern and responsive frontend web applications using React,
            Nextjs and the MERN stack, focusing on clean code, intuitive
            interfaces, and scalable solutions that drive real-world impact.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            <motion.a
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              href="/src/assets/Shimon Kumar Mondol.pdf"
              download
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-gray-300 hover:border-teal-400 hover:text-teal-400 hover:shadow-teal-400/10 shadow-[0_0_0px_0px_rgba(168,85,247,0)]
  hover:shadow-[0_0_35px_10px_rgba(168,85,247,0.8)] transition"
            >
              <Download size={18} /> Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Glow Ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute md:w-[500px] md:h-[500px] w-[400px] h-[400px] rounded-full bg-teal-500/20 blur-3xl"
          />

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full p-2 bg-white/5 backdrop-blur-xl border border-teal-400/40 shadow-xl"
          >
            <img
              src={img}
              alt="Profile"
              className="w-full h-full rounded-full object-cover  transition duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
