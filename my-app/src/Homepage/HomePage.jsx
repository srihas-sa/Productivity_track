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


const HomePage = () => {
  const [msg, setMsg] = useState("");
  
  localStorage.getItem('token') || window.location.replace('/login');
  
  return (
    <div className="outermostContainer flex flex-col min-h-screen bg-[#1C1C1C] text-[#F5E8D8] font-serif">
     
      <header className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
        <Navbar></Navbar>
      </header>

      <div className="flex flex-col flex-1 pt-20 pb-16 min-h-screen">
  {/* Container flex direction changes for desktop */}
  <div className="flex flex-col md:flex-row w-full flex-1">
    
    {/* Sidebar visible on all screens, sticky only on md+ */}
    <aside className="p-4 w-full md:w-1/4 md:h-screen md:sticky md:top-20">
      <Sidebar />
    </aside>

    {/* Main content fills remaining space */}
    <main className=" p-4 mb-5 w-full md:w-3/4 overflow-y-auto">
      <div className="">
        <Main />
        
      </div>
    </main>
  </div>
  <section id="Mind">
  <div>
    <Mind></Mind>
  </div>
    </section>

    <section id="Phyical">
  <div>
    <Phyical></Phyical>
  </div>
  </section>
  <section id="Tracker">
  <div>
    <h1 class="ml-7">Track Your Progress by Setting the Goal </h1>
    <Tracker></Tracker>
  </div>
  
  </section>
  <section id="Idea">
  <div>
    <IdeaSection></IdeaSection> 
    </div>
    </section>
  
</div>


    
     <Footer></Footer>
    </div>
  );
};

export default HomePage;
