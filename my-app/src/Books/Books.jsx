import { BookOpen, Star } from "lucide-react";

export default function BookStore() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      desc: "Practical guide to building good habits and breaking bad ones.",
    },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      desc: "Timeless principles for personal and professional success.",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      desc: "Focus without distraction in a noisy world.",
    },
    {
      title: "Can’t Hurt Me",
      author: "David Goggins",
      desc: "Lessons on mental toughness and resilience.",
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      desc: "A counterintuitive approach to living a good life.",
    },
    {
      title: "Stop Overthinking",
      author: "Nick Trenton",
      desc: "Practical ways to break free from endless thoughts and anxiety.",
    },
    {
      title: "The Procrastination Equation",
      author: "Piers Steel",
      desc: "How to stop delaying and start achieving.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <BookOpen className="mx-auto w-14 h-14 text-yellow-400" />
        <h1 className="text-3xl font-bold mt-4 text-white">
          The Power of Books 📚
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mt-2">
          Books are timeless mentors. They expand our minds, shape our thinking,
          and inspire us to become better every day.
        </p>
      </div>

      {/* Recommended Books Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              {book.title}
            </div>
            <p className="text-sm text-gray-400 mb-3">by {book.author}</p>
            <p className="text-gray-300 text-sm">{book.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
