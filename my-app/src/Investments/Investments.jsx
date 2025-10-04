import './Mind.css'
import BookImage from '../Images/BookImage.png'
import PeopleImage from '../Images/PeopleImage.png'
import SocialMediaImage from '../Images/SocialMediaImage.png'
import Technologmage  from '../Images/Technologmage.png'
export default function Mind(){
  return (
    <div class="">
      <h1 className="highlights ml-5">Investment</h1>
    <div class="OuterMostMindCont grid grid-cols-1 md:grid-cols-2 md:place-items-center gap-4 p-4 mb-3 MindOuter">
      <div class="w-full md:w-2/5">
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb:14">
            <img class="object-cover w-full rounded-t-lg h-60  md:w-48 md:rounded-none md:rounded-s-lg md:display" src={BookImage} alt="Books" />
            
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Books and Positive Meindset</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"A reader lives a thousand lives before he dies. The man who never reads lives only one.
And in every story, he finds a new piece of himself he never knew was missing.".</p>
                <button class="highlights12">Learn More</button>
            </div>
            
        </a>
      </div>
      <div class=" w-full md:w-2/5" >
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb:14">
            <img class="object-cover w-full rounded-t-lg h-60  md:w-48 md:rounded-none md:rounded-s-lg" src={SocialMediaImage} alt="Social-Media" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Goal</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"Set a Goal, work on it backward . Figure-out Your goal and trace back to qualities u need to achive that goal, and in ur dailY routine Incorporate those qualities u need. "</p>
                <button class="highlights12">Learn More</button>
            </div>
        </a>
      </div>
      <div class="w-full md:w-2/5 ">
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb:14">
            <img class="object-cover w-full rounded-t-lg h-60  md:w-48 md:rounded-none md:rounded-s-lg" src={PeopleImage} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FamilY and People</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"Everyone you meet knows something you don’t — stay curious, stay humble. You don’t need the perfect moment; start with what you have, where you are, and keep showing up."</p>
                <button class="highlights12">Learn More</button>
            </div>
        </a>
      </div>
      <div class=" w-full md:w-2/5">
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb:14">
            <img class="object-cover w-full rounded-t-lg h-60  md:w-48 md:rounded-none md:rounded-s-lg" src={Technologmage} alt="Technolog" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">"With every click, ask: is this building or breaking my focus?
Technology should speed you up, not scatter you.
Use it as a compass, not a distraction — let it guide your goals, not pull you from them."</p>
                <button class="highlights12">Learn More</button>
            </div>
        </a>
      </div>
    </div>
    </div>
  )
}