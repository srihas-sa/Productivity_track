import React from "react";
import { motion } from "framer-motion";
import Journaling from "../Images/Journaling.png";
import Meditation from "../Images/Meditation.png";
import Imagination from "../Images/Imagination.png";
import Affirmations from "../Images/Affirmations.png";
export default function Mindfulness() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
        Mindfulness & Positive Thinking
      </h1>

      {/* Intro Section */}
      <section className="mb-10 max-w-3xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          Mindfulness and positive thinking are powerful practices that
          strengthen focus, reduce stress, and rewire your subconscious mind.
          By cultivating trust and faith, you align your thoughts with growth
          and resilience. A calm mind opens doors to clarity and inner peace.
        </p>
      </section>

      {/* Subconscious Mind Importance */}
      <motion.section
        className="bg-gray-800 rounded-2xl p-6 shadow-lg mb-10"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          Power of the Subconscious Mind
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Your subconscious mind stores beliefs and habits that guide your daily
          actions. Through repetition, affirmations, and visualization, you can
          program it to attract positivity and success. Trust and faith amplify
          this process, helping you overcome doubt and stay aligned with your
          goals.
        </p>
      </motion.section>

      {/* Exercises Section */}
      <h2 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
        Mindfulness & Positive Thinking Exercises
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {
            title: "Breathing Meditation",
            img: Meditation,
            desc: "Spend 5-10 minutes focusing on your breath to quiet your mind.",
          },
          {
            title: "Gratitude Journaling",
            img: Journaling,
            desc: "Write 3 things you’re grateful for daily to shift your mindset.",
          },
          {
            title: "Visualization",
            img: Imagination,
            desc: "Visualize your goals clearly to program your subconscious mind.",
          },
          {
            title: "Positive Affirmations",
            img: Affirmations,
            desc: "Repeat affirmations like ‘I am strong, I am capable’ every day.",
          },
        ].map((exercise, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src={exercise.img}
              alt={exercise.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-blue-300 font-semibold mb-2">
                {exercise.title}
              </h3>
              <p className="text-gray-300">{exercise.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resources */}
      <section className="mt-12 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
          Helpful Resources
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://www.headspace.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Headspace – Guided Meditations
            </a>
          </li>
          <li>
            <a
              href="https://www.calm.com/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Calm – Sleep & Relaxation
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/MindValley"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Mindvalley – Growth Mindset Videos
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
