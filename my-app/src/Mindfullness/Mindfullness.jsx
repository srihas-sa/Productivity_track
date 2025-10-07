import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Mindfulness() {
  const exercises = [
    {
      title: "Breathing Meditation",
      videoId: "FGO8IWiusJo",
      desc: "Spend 5–10 minutes focusing on your breath to quiet your mind and center yourself.",
    },
    {
      title: "Gratitude Journaling",
      videoId: "KVjfFN89qvQ",
      desc: "Write 3 things you’re grateful for daily to shift your mindset toward positivity.",
    },
    {
      title: "Visualization",
      videoId: "Jyy0ra2WcQQ",
      desc: "Visualize your goals clearly to program your subconscious mind and attract success.",
    },
    {
      title: "Positive Affirmations",
      videoId: "qtD1MKEVZz8",
      desc: "Repeat affirmations like ‘I am strong, I am capable’ every day to rewire your thoughts.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
        Mindfulness & Positive Thinking
      </h1>

      <section className="mb-10 max-w-3xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          Mindfulness and positive thinking are powerful practices that
          strengthen focus, reduce stress, and rewire your subconscious mind.
          By cultivating trust and faith, you align your thoughts with growth
          and resilience. A calm mind opens doors to clarity and inner peace.
        </p>
      </section>

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

      <h2 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
        Mindfulness & Positive Thinking Exercises
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {exercises.map((exercise, i) => (
          <VideoCard key={i} exercise={exercise} />
        ))}
      </div>

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

function VideoCard({ exercise }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const getVideoURL = () => {
    if (clicked) {
      // Unmuted + controls visible after click
      return `https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&controls=1`;
    } else if (hovered) {
      // Autoplay muted on hover
      return `https://www.youtube.com/embed/${exercise.videoId}?autoplay=1&mute=1&controls=0`;
    } else {
      return null;
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setClicked(false);
      }}
      onClick={() => setClicked(true)}
    >
      <div className="w-full h-52 relative">
        {hovered ? (
          <iframe
            className="w-full h-full"
            src={getVideoURL()}
            title={exercise.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={`https://img.youtube.com/vi/${exercise.videoId}/hqdefault.jpg`}
            alt={exercise.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl text-blue-300 font-semibold mb-2">
          {exercise.title}
        </h3>
        <p className="text-gray-300">{exercise.desc}</p>
      </div>
    </motion.div>
  );
}
