import React, { useState } from "react";
import BackgroundImageTry from '../Images/BackgroundImageTry.png';
const hobbyCategories = [
  {
    category: "Creative & Art",
    hobbies: ["Drawing", "Painting", "Graphic Design", "Crafting"],
  },
  {
    category: "Music & Performing",
    hobbies: ["Singing", "Guitar", "Dancing", "Acting"],
  },
  {
    category: "Fitness & Wellness",
    hobbies: ["Yoga", "Running", "Cycling", "Gym Training"],
  },
  {
    category: "Outdoor & Exploration",
    hobbies: ["Gardening", "Hiking", "Bird Watching"],
  },
  {
    category: "Tech & Building",
    hobbies: ["Coding", "Video Editing", "Photography", "Robotics"],
  },
  {
    category: "Mind & Learning",
    hobbies: ["Reading", "Journaling", "Language Learning"],
  },
];

const careerPaths = {
  Drawing: ["Illustrator", "Concept Artist", "Comic Artist"],
  Painting: ["Fine Artist", "Art Teacher"],
  "Graphic Design": ["Graphic Designer", "UI Designer"],
  Crafting: ["Product Maker", "Etsy Seller"],
  Singing: ["Vocalist", "Music Tutor"],
  Guitar: ["Musician", "Music Coach"],
  Dancing: ["Dancer", "Choreographer"],
  Acting: ["Actor", "Drama Coach"],
  Yoga: ["Yoga Trainer"],
  Running: ["Sports Coach"],
  Cycling: ["Fitness Trainer"],
  "Gym Training": ["Fitness Coach"],
  Gardening: ["Botanist", "Landscape Designer"],
  Hiking: ["Travel Blogger", "Tour Guide"],
  "Bird Watching": ["Wildlife Researcher"],
  Coding: ["Software Developer"],
  "Video Editing": ["Video Editor", "Content Creator"],
  Photography: ["Photographer", "Media Creator"],
  Robotics: ["Robotics Engineer"],
  Reading: ["Writer", "Editor"],
  Journaling: ["Author", "Life Coach"],
  "Language Learning": ["Translator", "Interpreter"],
};

export default function Hobbies() {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [satisfaction, setSatisfaction] = useState(3);
  const [history, setHistory] = useState([]);

  const saveProgress = () => {
    if (!selectedHobby) return;

    const entry = {
      hobby: selectedHobby,
      satisfaction,
      date: new Date().toLocaleDateString(),
    };

    setHistory([entry, ...history]);
  };

  return (
    <div className="p-6 w-full min-h-screen text-white outermostContainer" style={{
      backgroundImage: (BackgroundImageTry.png),
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}>
      <h1 className="text-3xl font-bold mb-6">Explore & Track Your Hobbies</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hobbyCategories.map((group) => (
          <div key={group.category} className="bg-black bg-opacity-40 p-4 rounded-lg border border-gray-400">
            <h2 className="text-xl font-semibold mb-3">{group.category}</h2>
            <ul className="space-y-2">
              {group.hobbies.map((h) => (
                <li
                  key={h}
                  onClick={() => setSelectedHobby(h)}
                  className={`cursor-pointer p-2 rounded hover:bg-white hover:text-black transition ${
                    selectedHobby === h ? "bg-white text-black" : ""
                  }`}
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedHobby && (
        <div className="mt-8 bg-black bg-opacity-50 p-6 rounded-lg border border-gray-500">
          <h2 className="text-2xl font-bold">You Selected: {selectedHobby}</h2>

          <label className="block mt-4 mb-1">Satisfaction (1-5):</label>
          <input
            type="range"
            min="1"
            max="5"
            value={satisfaction}
            onChange={(e) => setSatisfaction(Number(e.target.value))}
            className="w-full"
          />
          <p className="mt-2">Current: {satisfaction}</p>

          <button
            onClick={saveProgress}
            className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300"
          >
            Save Progress
          </button>

          {satisfaction >= 4 && careerPaths[selectedHobby] && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Possible Career Paths:</h3>
              <ul className="list-disc list-inside">
                {careerPaths[selectedHobby].map((career) => (
                  <li key={career}>{career}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div className="mt-10 bg-black bg-opacity-50 p-6 rounded-lg border border-gray-500">
          <h2 className="text-2xl font-bold mb-4">Your Progress</h2>
          <ul className="space-y-3">
            {history.map((h, index) => (
              <li key={index} className="border-b border-gray-400 pb-2">
                {h.date} — {h.hobby} — Satisfaction: {h.satisfaction}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
