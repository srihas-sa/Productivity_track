import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function GoalAndInvestmentPlanner() {
  // 🧠 Goal Planner states
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 💰 Investment Planner states
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [investment, setInvestment] = useState('');
  const [largeCap, setLargeCap] = useState('');
  const [midCap, setMidCap] = useState('');
  const [smallCap, setSmallCap] = useState('');
  const [investmentPlan, setInvestmentPlan] = useState([]);
  const [investmentSubmitted, setInvestmentSubmitted] = useState(false);

  // 🧠 Load Goal checklist from localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    const savedChecked = JSON.parse(localStorage.getItem('checked'));
    if (savedTasks && savedChecked) {
      setTasks(savedTasks);
      setChecked(savedChecked);
      setIsSubmitted(true);
    }
  }, []);

  // 🧠 Save Goal checklist
  useEffect(() => {
    if (isSubmitted) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('checked', JSON.stringify(checked));
    }
  }, [tasks, checked, isSubmitted]);

  const handleSubmit = async (e) => {
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
    if (!input.trim()) return;
    console.log('Submitting goal:', input);
    try{
      const response = await axios.post('http://10.168.28.126:8080/api/ai-response', {
      input
    });
      const mockedTasks = response.data.tasks; // Assuming the backend returns tasks
      const initialChecked = {};
      mockedTasks.forEach((_, idx) => (initialChecked[idx] = false));
      setTasks(mockedTasks);
      setChecked(initialChecked);
      setIsSubmitted(true);
    }
    catch(Exception){
      console.error('Error submitting goal:', e);
      return;
    }

  };

  const handleCheck = (index) => {
    setChecked((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleReset = () => {
    setInput('');
    setTasks([]);
    setChecked({});
    setIsSubmitted(false);
    localStorage.removeItem('tasks');
    localStorage.removeItem('checked');
    console.log(tasks)
  };

  const handleInvestmentSubmit = (e) => {
    e.preventDefault();
    if (!age || !salary || !investment || !largeCap || !midCap || !smallCap) return;

    const plan = [
      `Invest ₹${(investment * (largeCap / 100)).toFixed(0)} in Large Cap Index Funds`,
      `Invest ₹${(investment * (midCap / 100)).toFixed(0)} in Mid Cap Growth Funds`,
      `Invest ₹${(investment * (smallCap / 100)).toFixed(0)} in Small Cap High Risk Funds`,
      "Review portfolio every 6 months",
      "Ensure emergency fund is maintained before investing"
    ];

    setInvestmentPlan(plan);
    setInvestmentSubmitted(true);
  };

  const handleInvestmentReset = () => {
    setAge('');
    setSalary('');
    setInvestment('');
    setLargeCap('');
    setMidCap('');
    setSmallCap('');
    setInvestmentPlan([]);
    setInvestmentSubmitted(false);
  };

  return (
    <div className=" text-white p-6 space-y-16 ">
      <div className="min-h-screen md:flex md:items-center ">
      {/* 🧠 Goal Planner Section */}
      <section className="bg-white text-black mb-2 rounded-xl shadow-md p-6 w-full max-w-xl md:mr-2">
          <h1 className="text-xl font-bold mb-4">Enter Your Long-Term Goal or If already done please go to checklist</h1>
          <p>This Checklist Given by Ai will be convered to checklist!!</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Build focus and physical strength"
              className="flex-1 p-3 rounded-md border border-gray-300"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </section>

      {/*The list input will be gettng from th backed call */}
        <section className="bg-white text-black rounded-xl shadow-md p-6 w-full max-w-xl">
          <h2 className="text-lg font-semibold mb-4">Your Daily Checklist </h2>
          <ul className="space-y-3">
            {tasks.map((task, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={checked[idx]}
                  onChange={() => handleCheck(idx)}
                  className="w-5 h-5 text-blue-600"
                />
                <span className={checked[idx] ? 'line-through text-gray-500' : 'text-gray-800'}>
                  {task}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-green-600 font-medium">Please Send Request To Generate Checklist</p>
          <button
            onClick={handleReset}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Save
          </button>

        </section>
      </div>

      {/* 💰 Investment Tracker Section */}
      <section className="bg-white text-black rounded-xl shadow-md p-6 w-full max-w-xl">
        <h1 className="text-xl font-bold mb-4">Investment Planner</h1>
        {!investmentSubmitted ? (
          <form onSubmit={handleInvestmentSubmit} className="space-y-4">
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Your Age"
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Monthly Salary (₹)"
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              placeholder="Investment Amount Per Month (₹)"
              className="w-full p-3 rounded-md border border-gray-300"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="number"
                value={largeCap}
                onChange={(e) => setLargeCap(e.target.value)}
                placeholder="Large Cap %"
                className="p-3 rounded-md border border-gray-300 w-full"
              />
              <input
                type="number"
                value={midCap}
                onChange={(e) => setMidCap(e.target.value)}
                placeholder="Mid Cap %"
                className="p-3 rounded-md border border-gray-300 w-full"
              />
              <input
                type="number"
                value={smallCap}
                onChange={(e) => setSmallCap(e.target.value)}
                placeholder="Small Cap %"
                className="p-3 rounded-md border border-gray-300 w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700"
            >
              Get Investment Plan
            </button>
          </form>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-4">Your Investment Plan</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {investmentPlan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <button
              onClick={handleInvestmentReset}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Start Over
            </button>
          </div>
        )}
      </section>

      
    </div>
  );
}
