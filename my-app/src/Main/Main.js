import { motion } from "framer-motion";
import Practice1 from "../Practice1/Practice1";
import "./Main.css";

export function Main() {
  return (
    <div>
      {/* Heading */}
      <motion.h1
        className="Heading text-5xl font-extrabold text-yellow-400 mb-6 mt-3 text-center tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Productivity+
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        className="text-gray-300 text-lg max-w-2xl text-center mb-10 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Build <span className="text-yellow-400 font-semibold">habits</span> that
        last a lifetime. Every second counts — small, consistent steps lead to
        big changes. Start improving{" "}
        <span className="text-yellow-400 font-semibold">1% each day</span>.
      </motion.p>

      {/* Quote Section */}
      <motion.div
        className="mt-10 max-w-2xl text-center mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <p className="text-gray-400 italic">
          “If you had a single car for your entire life, how well would you take
          care of it?”
        </p>
        <p className="text-yellow-400 font-semibold mt-2">— Warren Buffett</p>
      </motion.div>

      {/* Button Section */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-500 hover:scale-105 transition-transform duration-300" 
        onClick={() => {
    const mindSection = document.getElementById("Mind");
    if (mindSection) {
      mindSection.scrollIntoView({ behavior: "smooth" });
    }
  }}>
          Start Your Journey 🚀
        </button>
      </motion.div>

      {/* <Practice1 /> */}
    </div>
  );
}
