import { Scissors, Shirt, Star } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ColorWheel from "../Images/ColorWheel.png";

export default function MensGrooming() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const stateToken = useSelector((state) => state.token);
  console.log("Token in Grooming:", stateToken);
  // Open hidden file input
  const clickedUploadButton = () => {
    document.getElementById("fileInput").click();
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const SaveToDB = async () => {
    try{
      const response=await axios.post("http://localhost:8000/api/uploadImage",
      { images: selectedFiles },
      {  headers: { Authorization: `Bearer ${stateToken}` },
    }
      );
      console.log(response);
    }
    catch(err){
      console.error("Error uploading images:", err);
    }

  }

  // Remove image
  const removeImage = (indexToRemove) => {
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const products = {
    grooming: [
      {
        title: "Beard Trimmer",
        desc: "Essential for a clean, sharp look. Adjustable settings for perfect grooming.",
        img: "https://www.livemint.com/lm-img/img/2023/12/18/600x338/best_trimmer_for_men_1702893988671_1702893988910.jpg",
      },
      {
        title: "Face Wash & Moisturizer",
        desc: "Know your Skin Type and use a good cleanser and moisturizer daily.",
        img: "https://i.pinimg.com/236x/d1/57/59/d15759714ec44b399d991951e89da035.jpg",
      },
      {
        title: "Hair Styling Gel / Wax",
        desc: "Hold your hairstyle all day while keeping it natural. Don't overapply.",
        img: "https://cdn.shopify.com/s/files/1/0255/2417/4922/files/man_applying_styling_gel_1.jpg?v=1711380010",
      },
    ],
    formalWear: [
      {
        title: "Classic White Shirt",
        desc: "A timeless formal wear essential for interviews and meetings.",
        img: "https://cdn.shopify.com/s/files/1/0163/4002/files/aef5cea85ddcbcbc4733ca849808f43cb54cd9cc-2000x2000.jpg?width=3840",
      },
      {
        title: "Tailored Suit",
        desc: "Perfect fit suit that enhances confidence and sharpness.",
        img: "https://t3.ftcdn.net/jpg/10/62/73/20/360_F_1062732062_0BYhzTRai2Niat0ER9k4c6Uil2TSbAbT.jpg",
      },
      {
        title: "Leather Belt & Shoes",
        desc: "Premium accessories that complete a polished look.",
        img: "https://www.voganow.com/cdn/shop/files/VNCO-3109-018-GM_1.jpg?v=1752278460&width=1946",
      },
      {
        title: "Wrist Watch",
        desc: "A subtle but powerful accessory for men’s style.",
        img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1b100f27/images/Titan/Catalog/1733KL03_5.jpg?sw=360&sh=360",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-6 space-y-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center gap-4">
          <Scissors className="w-12 h-12 text-yellow-400" />
          <Shirt className="w-12 h-12 text-yellow-400" />
        </div>
        <h1 className="text-3xl font-bold mt-4 text-white">
          Men’s Grooming & Formal Wear ✨
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          Grooming is not just about looks — it’s about confidence, discipline,
          and presence. Explore essential grooming tips and formal wear products
          every man should know.
        </p>
      </div>

      {/* Grooming Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          🧴 Grooming Essentials
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.grooming.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  {item.title}
                </div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formal Wear Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          👔 Formal Wear Must-Haves
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.formalWear.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-lg font-semibold text-white mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  {item.title}
                </div>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upload Section */}
      <section>
        <div className="bg-gray-800 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          <p>
            Upload some color combinations you like to derive your unique taste
            and get a glimpse afterwards.
          </p>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <input
            type="button"
            value="Add Image"
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl shadow hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 cursor-pointer"
            onClick={clickedUploadButton}
            
          />
          <button onClick={SaveToDB} className="bg-green-600 hover:bg-blue-700 px-3 py-2 rounded-lg flex items-center gap-1">Save</button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="relative group bg-gray-700 rounded-lg overflow-hidden"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`Uploaded ${index}`}
                className="w-full h-40 object-cover rounded"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 bg-black/60 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-red-400 hover:text-red-600"
                />
              </button>
              
            </div>
          ))}
        </div>
      </section>

      {/* Color Wheel Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          🎨 Clothing Color Wheel: An Easy Guide
        </h2>
        <div className="bg-gray-800 rounded-xl shadow-md p-6 space-y-6">
          <img
            src={ColorWheel}
            alt="Color Wheel"
            className="w-full h-70 object-cover rounded-xl"
          />
          <p className="text-gray-300">
            Understanding the clothing color wheel is a must for those who want
            to elevate their fashion game. By knowing how to mix and match
            colors, you can create stylish and eye-catching outfits.
          </p>

          <h3 className="text-xl font-semibold text-white">
            What is the Color Wheel?
          </h3>
          <p className="text-gray-400">
            The color wheel shows relationships between colors —{" "}
            <span className="text-yellow-400">Primary</span>,{" "}
            <span className="text-yellow-400">Secondary</span>, and{" "}
            <span className="text-yellow-400">Tertiary</span>.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <b>Primary:</b> Red, Yellow, Blue
            </li>
            <li>
              <b>Secondary:</b> Green, Orange, Purple
            </li>
            <li>
              <b>Tertiary:</b> Teal, Magenta, Chartreuse
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6">
            Examples of Color Combinations
          </h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>
              <b>Monochromatic:</b> Different shades of the same color
            </li>
            <li>
              <b>Analogous:</b> Colors next to each other
            </li>
            <li>
              <b>Complementary:</b> Opposites on the wheel
            </li>
            <li>
              <b>Triadic:</b> Three evenly spaced colors
            </li>
            <li>
              <b>Tetradic:</b> Two sets of complementary colors
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
