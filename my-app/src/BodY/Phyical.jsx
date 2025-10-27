import { useNavigate } from 'react-router-dom';
import Grooming from '../Images/Grooming.png';
import Workout from '../Images/Workout.png';
import Nutrition from '../Images/Nutrition.png';
import Sleep from '../Images/Sleep.png';

export default function Phyical() {
  const navigate = useNavigate();

  const physicalTopics = [
    {
      title: 'Grooming',
      desc: `"How you present yourself is how you’re remembered — grooming is the first handshake without a word. Grooming is not about impressing others, it's about honoring yourself."`,
      img: Grooming,
      buttonAction: () => navigate('/grooming'),
    },
    {
      title: 'Work-Out',
      desc: `"Workout isn't about lifting heavy once — it's about consistent activation to build definition and stay lean. One heavy day won’t sculpt you — steady workouts keep you lean and defined."`,
      img: Workout,
      buttonAction: () => navigate('/workout'),
    },
    {
      title: 'Nutrition',
      desc: `"Fitness begins in the kitchen—cook your own meals, track your calories, and balance your macros. Real control starts with your plate, so let your food reflect your goals."`,
      img: Nutrition,
      buttonAction: () => navigate('/nutrition'),
    },
    {
      title: 'Sleep',
      desc: `"Sleep powers more than your dreams—it sharpens your mind, heals your body, and resets your focus. Skip it, and even your best efforts fall short."`,
      img: Sleep,
      buttonAction: () => navigate('/sleep'),
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br bg-cover bg-fixed text-gray-100 p-6 space-y-12">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Body
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {physicalTopics.map((topic, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 md:flex-row md:max-w-xl overflow-hidden"
          >
            <img
              src={topic.img}
              alt={topic.title}
              className="w-full h-60 md:w-48 object-cover md:rounded-none md:rounded-l-2xl"
            />
            <div className="flex flex-col justify-between p-6">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {topic.title}
              </h5>
              <p className="mb-4 text-gray-300">{topic.desc}</p>
              {topic.buttonAction && (
                <button
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-500 transition-all duration-300"
                  onClick={topic.buttonAction}
                >
                  Learn More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
