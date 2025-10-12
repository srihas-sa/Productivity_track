import React, { useState } from "react";
import Paneer from '../Images/Paneer.png';
import Eggs from '../Images/Eggs.png';
import Soyabean from '../Images/Soyabean.png';
import ChickenBreast from '../Images/ChickenBreast.png';
import GreekYogurt from '../Images/GreekYogurt.png';
import Rice from '../Images/Rice.png';
import Nuts from '../Images/Nuts.png';
import Banana from '../Images/Banana.png';
import Oats from '../Images/Oats.png';
import Pomogranate from '../Images/Pomogranate.png';
import OliveOil from '../Images/OliveOil.png';
import Lenttis from '../Images/Lenttis.png';
import DarkChocolate from '../Images/DarkChocolate.png';
import "./Nutrition.css";

/**
 * Nutrition.jsx
 *
 * Usage:
 *  - Place this file under src/, import into a page or App:
 *      import Nutrition from "./Nutrition";
 *      <Nutrition />
 *
 * - Also add the accompanying Nutrition.css file in the same folder.
 *
 * Notes:
 *  - Uses plain CSS (Nutrition.css) for dark theme and responsive layout.
 *  - Images are loaded from Unsplash example URLs; replace with local assets if you want.
 */

const FOOD_EXAMPLES = {
  protein: [
    { name: "Chicken breast (100 g)", protein_g: 31, kcal: 165, img: ChickenBreast },
    { name: "Paneer (100 g)", protein_g: 20, kcal: 132, img: Paneer },
    { name: "Greek yogurt (200 g)", protein_g: 20, kcal: 146, img: GreekYogurt },
    { name: "Eggs (3)", protein_g: 18, kcal: 240, img:Eggs },
    { name:"Soybeans (100 g)", protein_g: 36, kcal: 173, img: Soyabean },
  ],
  carbs: [
    { name: "Cooked rice (150 g)", carbs_g: 45, kcal: 205, img: Rice },
    { name: "Oats (50 g)", carbs_g: 33, kcal: 188, img: Oats },
    { name: "Banana (1 medium)", carbs_g: 27, kcal: 105, img: Banana },
  ],
  fats: [
    { name: "Olive oil (1 tbsp)", fats_g: 14, kcal: 119, img: OliveOil },
    { name: "Nuts (30 g)", fats_g: 15, kcal: 173, img: Nuts },
    { name: "Dark Chocolate (100gm )", fats_g: 32, kcal: 533, img: DarkChocolate },
  ],
  fiber: [
    { name: "Pomogranate (100 g)", fiber_g: 4, img: Pomogranate },
    { name: "Lentils (100 g cooked)", fiber_g: 7.9, img: Lenttis },
    { name: "Apple (1 medium)", fiber_g: 4.4, img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=60" },
  ],
};

function round(num, decimals = 1) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export default function Nutrition() {
  // Inputs
  const [weightKg, setWeightKg] = useState(70); // default weight
  const [goal, setGoal] = useState("maintenance"); // options: lose, maintain, gain
  const [calorieTarget, setCalorieTarget] = useState(""); // optional custom
  const [proteinPerKg, setProteinPerKg] = useState(1.8); // grams per kg default

  // Macro percentage defaults (if calorieTarget provided)
  // Typical distribution: protein 20-30%, carbs 40-55%, fats 20-30%
  const defaultMacroPct = { protein: 0.25, carbs: 0.50, fats: 0.25 };

  // Adjust calorie multiplier based on goal
  const goalMultiplier = {
    lose: 0.85,
    maintenance: 1.0,
    gain: 1.15,
  };

  // Calculate estimated calorie need (very simple method: 24 kcal/kg * goal multiplier)
  const baseCalories = 24 * weightKg; // rough basal-ish estimate
  const estimatedCalories = Math.round(baseCalories * goalMultiplier[goal]);

  // Effective calories to use (user-provided overrides estimated)
  const effectiveCalories = calorieTarget ? Number(calorieTarget) : estimatedCalories;

  // Protein calculation: grams = weight (kg) * proteinPerKg
  const proteinGrams = round(weightKg * proteinPerKg, 1);
  const proteinCalories = proteinGrams * 4;

  // If calorie target provided, compute carbs & fats from percentages
  const carbsPct = defaultMacroPct.carbs;
  const fatsPct = defaultMacroPct.fats;

  const carbsCalories = round(effectiveCalories * carbsPct, 0);
  const carbsGrams = round(carbsCalories / 4, 1);

  const fatsCalories = round(effectiveCalories * fatsPct, 0);
  const fatsGrams = round(fatsCalories / 9, 1);

  // Recommended fiber
  const fiberGrams = (weightKg < 60) ? 25 : (weightKg < 80 ? 30 : 35);

  // Helpful textual formulas
  const formulas = {
    calorieEstimate: `Estimated Calories ≈ 24 * weight(kg) * goalMultiplier (${goalMultiplier[goal]}) → ${round(baseCalories)} × ${goalMultiplier[goal]} = ${estimatedCalories} kcal`,
    protein: `Protein (g) = weight(kg) × protein-per-kg (${proteinPerKg}) → ${weightKg} × ${proteinPerKg} = ${proteinGrams} g`,
    carbs: `Carbs (g) = (calories × ${carbsPct * 100}%) / 4 → (${effectiveCalories} × ${carbsPct}) / 4 = ${carbsGrams} g`,
    fats: `Fats (g) = (calories × ${fatsPct * 100}%) / 9 → (${effectiveCalories} × ${fatsPct}) / 9 = ${fatsGrams} g`,
  };

  return (
    <div className="nutrition-root">
      <header className="nutrition-hero">
        <h1>Nutrition Calculator & Guide</h1>
        <p className="subtitle">
          Protein · Carbohydrates · Fats · Fiber — explanations, formulas and example food portions.
        </p>
      </header>

      <main className="nutrition-main container">
        <section className="panel calc-panel">
          <h2>Quick Macro Calculator</h2>

          <div className="row inputs">
            <label>
              Body weight (kg)
              <input
                type="number"
                min="30"
                max="300"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
              />
            </label>

            <label>
              Goal
              <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                <option value="lose">Lose weight</option>
                <option value="maintenance">Maintain</option>
                <option value="gain">Gain weight</option>
              </select>
            </label>

            <label>
              Protein per kg (g)
              <select value={proteinPerKg} onChange={(e) => setProteinPerKg(Number(e.target.value))}>
                <option value={1.2}>1.2 (sedentary)</option>
                <option value={1.6}>1.6 (active)</option>
                <option value={1.8}>1.8 (strength)</option>
                <option value={2.2}>2.2 (intense)</option>
              </select>
            </label>

            <label>
              Calorie target (optional)
              <input
                type="number"
                placeholder={String(estimatedCalories)}
                value={calorieTarget}
                onChange={(e) => setCalorieTarget(e.target.value)}
              />
            </label>
          </div>

          <div className="row results">
            <div className="result-card">
              <h3>Calories</h3>
              <p className="big">{effectiveCalories} kcal</p>
              <small>{formulas.calorieEstimate}</small>
            </div>

            <div className="result-card">
              <h3>Protein</h3>
              <p className="big">{proteinGrams} g</p>
              <small>{formulas.protein}</small>
              <div className="mini">Calories from protein: {proteinCalories} kcal</div>
            </div>

            <div className="result-card">
              <h3>Carbohydrates</h3>
              <p className="big">{carbsGrams} g</p>
              <small>{formulas.carbs}</small>
            </div>

            <div className="result-card">
              <h3>Fats</h3>
              <p className="big">{fatsGrams} g</p>
              <small>{formulas.fats}</small>
            </div>

            <div className="result-card">
              <h3>Fiber</h3>
              <p className="big">{fiberGrams} g/day</p>
              <small>General recommendation based on weight</small>
            </div>
          </div>
        </section>

        <section className="panel info-panel">
          <h2>Nutrition: Quick Explanations</h2>
          <div className="grid explainer">
            <article>
              <h4>Protein</h4>
              <p>
                Protein supports muscle repair and satiety. Aim for <strong>{proteinPerKg} g/kg</strong> depending on activity.
                Example formula: <code>Protein (g) = weight (kg) × protein-per-kg</code>.
              </p>
            </article>

            <article>
              <h4>Carbohydrates</h4>
              <p>
                Carbs provide energy. When using a calorie target, set <strong>{carbsPct * 100}%</strong> of calories to carbs,
                then convert to grams: <code>grams = (calories × %)/4</code>.
              </p>
            </article>

            <article>
              <h4>Fats</h4>
              <p>
                Fats are energy-dense and essential. Typical allocation is <strong>{fatsPct * 100}%</strong> of calories → grams = calories / 9.
              </p>
            </article>

            <article>
              <h4>Fiber</h4>
              <p>
                Dietary fiber supports digestion and metabolic health. Aim for <strong>{fiberGrams} g/day</strong> (adjust for personal needs).
              </p>
            </article>
          </div>
        </section>

        <section className="panel cards-panel">
          <h2>Food Examples (portion & macro content)</h2>

          <div className="cards-grid">
            <CategoryCards title="Protein Sources" items={FOOD_EXAMPLES.protein} label="protein_g" unit="g protein" />
            <CategoryCards title="Carbohydrate Sources" items={FOOD_EXAMPLES.carbs} label="carbs_g" unit="g carbs" />
            <CategoryCards title="Fat Sources" items={FOOD_EXAMPLES.fats} label="fats_g" unit="g fats" />
            <CategoryCards title="Fiber Sources" items={FOOD_EXAMPLES.fiber} label="fiber_g" unit="g fiber" />
          </div>
        </section>
      </main>

      <footer className="nutrition-footer">
        <small>
          ⚠️ This calculator provides rough estimates for educational purposes. For personalized advice consult a registered dietitian.
        </small>
      </footer>
    </div>
  );
}

function CategoryCards({ title, items, label, unit }) {
  return (
    <div className="cat-column">
      <h3 className="cat-title">{title}</h3>
      {items.map((it, idx) => (
        <article className="food-card" key={idx}>
          <div className="img-wrap">
            <img src={it.img} alt={it.name} />
          </div>
          <div className="food-body">
            <h4>{it.name}</h4>
            <p className="macro">{it[label]} {unit}{it.kcal ? ` · ${it.kcal} kcal` : ""}</p>
            <small>Approximate values</small>
          </div>
        </article>
      ))}
    </div>
  );
}
