import React,{act, useState} from 'react';
import axios from 'axios';
import Navbar_internal from '../Navbar_Internal/Navbar_internal';
import Footer from '../Footer/Footer';
//import './Workout.css';
import { Input } from 'postcss';


const Workout = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    gymavailable: '',
    goalDescription: ''
  });

  const [aiResponse, setAiResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  /*
    const getAIResponse = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/generate',
        {
          inputs: `Name: ${userData.name}, Age: ${userData.age}, Weight: ${userData.weight}, Height: ${userData.height}, Goals: ${userData.goalDescription}`
        }
      );
      setAiResponse(res.data[0].generated_text);
    } catch (err) {
      setAiResponse('Error: Try again later.');
    } finally {
      setLoading(false);
    }
  };
  */

    const getAIResponse = async (e) => {
      setLoading(true);
    e.preventDefault();
    /*
    if (!input.trim()) return;
    const mockedTasks = [
      "Wake up early and plan your day",
      "Read for 30 minutes",
      "Work deeply on one goal for 2 hours",
      "Exercise for 45 minutes",
      "Reflect and journal before bed",
    ];
    const initialChecked = {};
    mockedTasks.forEach((_, idx) => (initialChecked[idx] = false));
    setTasks(mockedTasks);
    setChecked(initialChecked);
    setIsSubmitted(true);
    */
    
    console.log('Submitting goal:', userData);
    const input = `Name: ${userData.name}, Age: ${userData.age}, Weight: ${userData.weight}, Height: ${userData.height}, Goals: ${userData.goalDescription},Active leve:${userData.activityLevel},Gym availability:${userData.gymavailable}.Give me a workout plan for this person based on the availability of gym for a week in the form 7 points for seven days.`;
    if (!input.trim()) return;
    try{
      const response = await axios.post('http://10.168.28.126:8080/api/ai-response', { 
      input
    });
      const mockedTasks = response.data.tasks; // Assuming the backend returns tasks
      const initialChecked = {};
      console.log('AI Response:', mockedTasks);
      mockedTasks.forEach((_, idx) => (initialChecked[idx] = false));
      setAiResponse(mockedTasks);
      setLoading(false);
    }
    catch(Exception){
      console.error('Error submitting goal:', e);
      return;
    }

  };

  const OnClickedPersonalData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that provides personalized workout plans.'
          },
          {
            role: 'user',
            content: `Name: ${userData.name}, Age: ${userData.age}, Weight: ${userData.weight}, Height: ${userData.height}, Goals: ${userData.goalDescription}`
          }
        ]
      }, {
        
      });
      setAiResponse(response.data.choices[0].message.content);
      console.log(response.data.choices[0].message.content);
    } catch (err) {
      setError('Failed to fetch AI response. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  
  const [error, setError] = useState('');
  return (
    <div className="outermostContainer flex flex-col min-h-screen bg-[#1C1C1C] text-[#F5E8D8]">
      
      {/* Navbar */}
      <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
        <Navbar_internal />
      </header>

      {/* Main Content */}
      <main className="pt-28 px-6 font-serif">
        <h3 className="text-xl font-bold text-center mb-8">
          To keep your body active and energized, it's important to include some form of physical workout in your morning routine. 
          Whether it's a full-body home workout, calisthenics, or a gym session, the goal is to stay physically engaged and healthy.
        </h3>

        <section className="text-center mb-12">
          <h1 className="text-2xl font-semibold mb-8">Choose the fitness goal you want to achieve:</h1>

          {/* Workout Options Side-by-Side on Medium+ */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-start mb-12">
            {/* Calisthenics */}
            <div className="flex-1 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Calisthenics</h3>
              <img 
                src="https://gymgeneration.ch/cdn/shop/articles/calisthenics-die-kunst-der-korperbeherrschung-445570_f2ae8215-2c61-46d1-9ea6-567b30dbb16b.jpg?v=1744042070&width=1100" 
                alt="Calisthenics Workout" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-4">
                Calisthenics uses bodyweight exercises to build functional strength, agility, and coordination.
              </p>
            </div>

            {/* Bodybuilding */}
            <div className="flex-1 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">Bodybuilding</h3>
              <img 
                src="https://media.istockphoto.com/id/612262390/photo/body-building-workout.jpg?s=612x612&w=0&k=20&c=zsRgRf3tuStA7dN5bdFS_x1ud-XdU-dJC7B6iuq_AZk=" 
                alt="Bodybuilding Workout" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-4">
                Bodybuilding emphasizes muscle growth, aesthetics, and strength through structured resistance training.
              </p>
            </div>
          </div>

          {/* User Input Form */}
          <div className="flex flex-col items-center gap-4">
            <p className="mb-2 font-medium">Enter your personal details so that AI can suggest the best workout plan for you:</p>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Enter your age" 
              className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
              value={userData.age}
              onChange={(e) => setUserData({ ...userData, age: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Enter your weight (kg)" 
              className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
              value={userData.weight}
              onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Enter your height (cm)" 
              className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
              value={userData.height}
              onChange={(e) => setUserData({ ...userData, height: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Enter your ActivityLevel (e.g., Sedentary, Active)" 
              className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
              value={userData.activityLevel}
              onChange={(e) => setUserData({ ...userData, activityLevel: e.target.value })}
            />

            <input 
              type="text" 
              placeholder="Do you have access to a gym? (yes/no)" 
              className="p-2 rounded-md w-full max-w-md bg-gray-700 text-white placeholder-gray-400"
              value={userData.gymavailable}
              onChange={(e) => setUserData({ ...userData, gymavailable: e.target.value })}
            />
            <label htmlFor="goalDescription" className="text-left w-full max-w-md mx-auto font-medium">
  Describe your fitness goals:
            </label>
            <textarea
              id="goalDescription"
              name="goalDescription"
              rows="4"
              placeholder="e.g. I want to build muscle and increase stamina."
              className="mt-2 mb-4 p-2 w-full max-w-md mx-auto rounded-md bg-gray-700 text-white placeholder-gray-400 resize-none"
              value={userData.goalDescription}
              onChange={(e) => setUserData({ ...userData, goalDescription: e.target.value })}
            />
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={getAIResponse} disabled={loading}>
              Submit
            </button>

            <h1 className=''>
              AI Response </h1>
              {loading ? <span className='Loading'>'Loading...'</span> : <ul className="space-y-3">
            {aiResponse.map((task, idx) => (
              <li key={idx} className="flex items-center gap-3">
                
                  {task}
              
              </li>
            ))}
          </ul>}
              
            
          </div>
        </section>
        <h1>sf</h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Workout;
