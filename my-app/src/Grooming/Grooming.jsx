import { Scissors, Shirt, Star } from "lucide-react";
import ColorWheel from '../Images/ColorWheel.png';
import BeltShoes from '../Images/BeltShoes.png';
export default function MensGrooming() {
  const products = {
    grooming: [
      {
        title: "Beard Trimmer",
        desc: "Essential for a clean, sharp look. Adjustable settings for perfect grooming.",
        img: "https://www.livemint.com/lm-img/img/2023/12/18/600x338/best_trimmer_for_men_1702893988671_1702893988910.jpg", // beard trimmer
      },
      {
        title: "Face Wash & Moisturizer",
        desc: "Know your Skin Type and use a good cleanser and moisturizer daily.",
        img: "https://i.pinimg.com/236x/d1/57/59/d15759714ec44b399d991951e89da035.jpg", // skincare
      },
      {
        title: "Hair Styling Gel / Wax",
        desc: "Hold your hairstyle all day while keeping it natural.Don't Overapply",
        img: "https://cdn.shopify.com/s/files/1/0255/2417/4922/files/man_applying_styling_gel_1.jpg?v=1711380010", // hair product
      },
    ],
    formalWear: [
      {
        title: "Classic White Shirt",
        desc: "A timeless formal wear essential for interviews and meetings.",
        img: "https://cdn.shopify.com/s/files/1/0163/4002/files/aef5cea85ddcbcbc4733ca849808f43cb54cd9cc-2000x2000.jpg?width=3840", // white shirt
      },
      {
        title: "Tailored Suit",
        desc: "Perfect fit suit that enhances confidence and sharpness.",
        img: "https://t3.ftcdn.net/jpg/10/62/73/20/360_F_1062732062_0BYhzTRai2Niat0ER9k4c6Uil2TSbAbT.jpg", // suit
      },
      {
        title: "Leather Belt & Shoes",
        desc: "Premium accessories that complete a polished look.",
        img: "https://www.voganow.com/cdn/shop/files/VNCO-3109-018-GM_1.jpg?v=1752278460&width=1946", // belt & shoes
      },
      {
        title: "Wrist Watch",
        desc: "A subtle but powerful accessory for men’s style.",
        img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1b100f27/images/Titan/Catalog/1733KL03_5.jpg?sw=360&sh=360", // watch
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

      {/* Clothing Color Wheel Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          🎨 Clothing Color Wheel: An Easy Guide
        </h2>
        <div className="bg-gray-800 rounded-2xl shadow-md p-6 space-y-6">
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

          <h3 className="text-xl font-semibold text-white">What is the Color Wheel?</h3>
          <p className="text-gray-400">
            The color wheel is a circular diagram showing the relationships
            between colors. It’s divided into{" "}
            <span className="text-yellow-400">Primary</span>,{" "}
            <span className="text-yellow-400">Secondary</span>, and{" "}
            <span className="text-yellow-400">Tertiary</span> colors.
          </p>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><b>Primary Colors:</b> Red, Yellow, Blue – foundation of all other colors.</li>
            <li><b>Secondary Colors:</b> Green, Orange, Purple – made by mixing primaries.</li>
            <li><b>Tertiary Colors:</b> Complex shades like teal, magenta, chartreuse.</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1607082349363-4a3d4f77e9fa"
            alt="Color Combinations"
            className="w-full h-60 object-cover rounded-lg"
          />

          <h3 className="text-xl font-semibold text-white mt-6">Examples of Color Combinations</h3>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><b>Monochromatic:</b> Different shades of the same color (light blue + navy).</li>
            <li><b>Analogous:</b> Colors next to each other (blue + green).</li>
            <li><b>Complementary:</b> Opposites on the wheel (red + green).</li>
            <li><b>Triadic:</b> Three evenly spaced colors (red, yellow, blue).</li>
            <li><b>Tetradic:</b> Two sets of complementary colors (blue + orange + green + red).</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
