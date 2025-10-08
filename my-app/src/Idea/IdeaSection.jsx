import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import axios from "axios";

export default function IdeasAndBlog() {
  const [ideas, setIdeas] = useState([]);
  const [input, setInput] = useState("");

  const addIdea = () => {
    if (input.trim() !== "") {
      setIdeas([...ideas, input]);
      setInput("");
    }
  };

  const SaveIdeas = async () => {
    // Save ideas to local storage
    localStorage.setItem("ideas", JSON.stringify(ideas));
    alert("Ideas saved!");
    const userid=localStorage.getItem("email");
    console.log(userid);
    try{
      const res=await axios.post("http://localhost:8000/ideas/save", 
        {ideas,userid}
      );    
      console.log(res);
      if(res.data.success){
        alert("Ideas saved to server!");    
      }
      else{
        alert("Error saving ideas to server!");
      }

  }
  catch(err){
    alert("Server error. Please try later.");
  }
  };

  const deleteIdea = (index) => {
    setIdeas(ideas.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Space</h1>

      {/* Grid Layout: 1 col on small, 2 cols on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 🧠 Ideas Section */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4">💡 Ideas</h2>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write your idea..."
              className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addIdea}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg flex items-center gap-1"
            >
              <Plus size={18} /> Add
            </button>
            <button
              onClick={SaveIdeas}
              className="bg-green-600 hover:bg-blue-700 px-3 py-2 rounded-lg flex items-center gap-1"
            >
               Save
            </button>
          </div>

          <ul className="space-y-3">
            {ideas.length === 0 && (
              <li className="text-gray-400 text-sm">No ideas yet...</li>
            )}
            {ideas.map((idea, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span>{idea}</span>
                <button
                  onClick={() => deleteIdea(index)}
                  className="text-red-400 hover:text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 📝 Blog Section */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4">📝 Blog (Medium)</h2>
          <p className="text-gray-300 mb-4">
            Share your thoughts in detail and post them to your blog.
          </p>
          <textarea
            className="w-full h-40 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your blog here..."
          ></textarea>
          <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg shadow-md transition">
            Publish to Medium
          </button>
        </div>
      </div>

      
    </div>
  );
}
