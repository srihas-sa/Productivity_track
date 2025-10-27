import {React,useState} from 'react';
import Navbar from '../Navbar/Navbar';
import { Main } from '../Main/Main';
import { Sidebar } from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter ,faSquareInstagram} from "@fortawesome/free-brands-svg-icons";
import Practice1 from '../Practice1/Practice1';
import Mind from '../Mind/Mind';
import Phyical from '../BodY/Phyical';
import Footer from '../Footer/Footer';
import Tracker from '../Tracker/Tracker';
import IdeaSection from '../Idea/IdeaSection';
import './HomePage.css';

const HomePage = () => {
  const [msg, setMsg] = useState("");
  
  localStorage.getItem('email') || window.location.replace('/login');
  
  return (
    <div className="outermostContainer flex flex-col min-h-screen text-[#F5E8D8] font-serif w-full">
  <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
    <Navbar />
  </header>

  <div className="flex flex-col flex-1 pt-20 pb-16 min-h-screen">
    <div className="flex flex-col md:flex-row w-full flex-1">
      <aside className="p-4 w-full md:w-1/4 md:h-screen md:sticky md:top-20 bg-opacity-70 backdrop-blur-sm">
        <Sidebar />
      </aside>

      <main className="p-4 mb-5 w-full md:w-3/4 overflow-y-auto bg-opacity-60 backdrop-blur-sm">
        <Main />
      </main>
    </div>

    <section id="Mind">
      <Mind />
    </section>

    <section id="Phyical">
      <Phyical />
    </section>

    <section id="Tracker">
      <h1 className="ml-7">Track Your Progress by Setting the Goal</h1>
      <Tracker />
    </section>

    <section id="Idea">
      <IdeaSection />
    </section>
  </div>

  <Footer />
</div>

  );
};

export default HomePage;
