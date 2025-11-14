import { BookOpen, Star } from "lucide-react";
import Navbar_internal from "../Navbar_Internal/Navbar_internal";
import CantHurtMe from "../Images/BooksImages/CantHurtMe.png";
import SevenHabitOfHighEffecientMan from "../Images/BooksImages/SevenHabitOfHighEffecientMan.png";
import StopOverThinking from "../Images/BooksImages/StopOverThinking.png";
import TheProcastinationEquation from "../Images/BooksImages/TheProcastinationEquation.png";
import DeepWork from "../Images/BooksImages/DeepWork.png";

import Footer from "../Footer/Footer";

export default function BookStore() {

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      desc: "Practical guide to building good habits and breaking bad ones.",
      img: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      desc: "Timeless principles for personal and professional success.",
      img: SevenHabitOfHighEffecientMan,
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      desc: "Focus without distraction in a noisy world.",
      img:DeepWork,
    },
    {
      title: "Can’t Hurt Me",
      author: "David Goggins",
      desc: "Lessons on mental toughness and resilience.",
      img: CantHurtMe,
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      desc: "A counterintuitive approach to living a good life.",
      img: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    },
    {
      title: "Stop Overthinking",
      author: "Nick Trenton",
      desc: "Break free from endless thoughts and anxiety.",
      img: StopOverThinking,
    },
    {
      title: "The Procrastination Equation",
      author: "Piers Steel",
      desc: "How to stop delaying and start achieving.",
      img: TheProcastinationEquation,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 outermostContainer">

      {/* Navbar */}
      <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 w-full z-50 shadow-lg">
        <Navbar_internal />
      </header>

      {/* Hero Section */}
      <div className="text-center mb-12 pt-24 px-6">
        <BookOpen className="mx-auto w-14 h-14 text-yellow-400" />
        <h1 className="text-3xl font-bold mt-4 text-white">The Power of Books 📚</h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-2">
          Books are timeless mentors. They expand our minds, shape our thinking,
          and inspire us to become better every day.
        </p>
      </div>

      {/* Recommended Reads (Static Display) */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {books.map((book, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6">
            <div className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              {book.title}
            </div>
            <p className="text-sm text-gray-400 mb-3">by {book.author}</p>
            <p className="text-gray-300 text-sm">{book.desc}</p>
          </div>
        ))}
      </div>

      {/* Buy Books Section (3D Product Grid) */}
      <div className="max-w-6xl mx-auto mt-20 px-6 pb-20">
        <h2 className="text-2xl font-bold text-center mb-8 text-white">Buy Your Favorite Books 🛍️</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl shadow-xl p-5 transform transition-all duration-300 
              hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(255,255,255,0.25)] hover:rotate-[1deg]"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-48 w-full object-cover rounded-lg mb-4 shadow-lg"
              />

              <h3 className="text-lg font-semibold text-white">{book.title}</h3>
              <p className="text-sm text-gray-400 mb-3">by {book.author}</p>
              <p className="text-gray-300 text-sm line-clamp-2">{book.desc}</p>

              <button className="mt-auto w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold 
  hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Fixed Full Width */}
      <footer className="w-full bg-gray-900 border-t border-gray-700 mt-auto">
        <Footer />
      </footer>

    </div>
  );
}
