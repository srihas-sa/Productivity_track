import { useNavigate } from 'react-router-dom';
import BookImage from '../Images/BookImage.png';
import PeopleImage from '../Images/PeopleImage.png';
import SocialMediaImage from '../Images/SocialMediaImage.png';
import Technologmage from '../Images/Technologmage.png';
import MindfullnessCover1 from '../Images/MindfullnessCover1.png';
import MindfullnessCover2 from '../Images/MindfullnessCover2.png';
import BrainImage from '../Images/BrainImage.png';

export default function Mind() {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/Books');
  };

  const handleClick2 = () => {
    navigate('/mindfullness');
  };

  const handleClick3 = () => {
    navigate('/BrainTeasers');
  };

  const mindTopics = [
    {
      title: 'Books and Positive Mindset',
      desc: `"A reader lives a thousand lives before he dies. The man who never reads lives only one.
And in every story, he finds a new piece of himself he never knew was missing."`,
      img: BookImage,
      buttonAction: handleClick1,
    },
    {
      title: 'Mindfulness and positive thinking',
      desc: `"Your mind is a garden—what you plant, you will harvest. Cultivate thoughts of growth, resilience, and gratitude. A positive mindset is the soil where success takes root.Be positive and Calm."`,
      img: MindfullnessCover2,
      buttonAction: handleClick2,
    },
    {
      title: 'Put your mind to work.',
      desc: `"If you were boed and want to solve and train your brain click on learn more based on the level it will ask you question and try solving the question give 100per focus and get better every day."`,
      img: BrainImage,
      buttonAction: handleClick3,
    },
    {
      title: 'Goals',
      desc: `"With every click, ask: is this building or breaking my focus? Technology should speed you up, not scatter you. Use it as a compass, not a distraction — let it guide your goals, not pull you from them."`,
      img: Technologmage,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br   bg-fixed text-gray-100 p-6 space-y-12">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Mental Health
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        {mindTopics.map((topic, idx) => (
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
