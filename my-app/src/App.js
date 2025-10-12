
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage/HomePage';
import Workout from './WorkOut/Workout.jsx';
import Login from './Login/Login.jsx';
import Books from './Books/Books.jsx';
import Grooming from './Grooming/Grooming.jsx';
import Signup from './Sign_up/Signup.jsx';
import Nutrition from './Nutrition/Nutrition.jsx';
import Mindfulness from './Mindfullness/Mindfullness.jsx';
import BrainActivity from './BrainActivity/BrainActivity.jsx';
//import Home from './pages/Home';
//import About from './pages/About';
//import Contact from './pages/Contact';

function App() {

  return (
    
    <Router>
      
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/Workout" element={<Workout></Workout>} />
        <Route path="/Books" element={<Books></Books>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/grooming" element={<Grooming></Grooming>} />
        <Route path="/nutrition" element={<Nutrition></Nutrition>}/>
        <Route path="/mindfullness" element={<Mindfulness></Mindfulness>}></Route>
        <Route path="/BrainTeasers" element={<BrainActivity></BrainActivity>}></Route>
      </Routes>
    </Router>
    
  );
}


export default App;