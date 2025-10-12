import React, { useState } from "react";
import "./BrainActivity.css";

/**
 * QuestionChef.jsx
 *
 * Simple dark UI for asking category-based brain questions.
 * - Place in src/components/
 * - Import into App.jsx: import QuestionChef from "./components/QuestionChef";
 * - <QuestionChef />
 *
 * This uses no external libraries.
 */

const SAMPLE_QUESTIONS = {
  Chess: [
    { q: "What's the best opening move for White in classical theory?", a: "1.e4 or 1.d4 — both are main classical moves." },
    { q: "What is 'castling' in chess?", a: "A move involving king and rook to improve king safety and connect rooks." },
    { q: "Name a basic checkmate pattern with two rooks.", a: "The 'ladder' (or 'rook roller') where rooks force the king to the edge." }
  ],
  Coding: [
    { q: "What is Big-O of binary search?", a: "O(log n)." },
    { q: "What's the difference between var, let and const in JS?", a: "'var' is function-scoped, 'let' and 'const' are block-scoped; 'const' cannot be reassigned." },
    { q: "Name one use-case for a hash map.", a: "Fast lookups (average O(1)) such as caching and frequency counting." }
  ],
  "General Knowledge": [
    { q: "Which planet is closest to the Sun?", a: "Mercury." },
    { q: "Who wrote '1984'?", a: "George Orwell." },
    { q: "What is the chemical symbol for water?", a: "H₂O." }
  ],
  Memory: [
    { q: "Try to remember these words for 20s: apple, rocket, green, elephant.", a: "Recall them after a short distraction." },
    { q: "Repeat the following digits backwards: 7 2 9 4", a: "Try reversing: 4 9 2 7." },
    { q: "Look at this list for 10s then close eyes: cat, train, river, phone.", a: "See how many you recall." }
  ],
  Logic: [
    { q: "If all bloops are razzies and some razzies are zips, can you conclude any bloops are zips?", a: "Not necessarily — only 'some' razzies are zips; bloops could be outside the zip subset." },
    { q: "A bat and a ball cost $1.10. Bat costs $1.00 more than ball. How much is the ball?", a: "Ball = $0.05; Bat = $1.05." },
    { q: "You have a 3 and 5 litre jug and unlimited water. How to get exactly 4 litres?", a: "Classic pour puzzle; one solution: fill 5, pour into 3 (left 2), empty 3, pour 2 into 3, fill 5, pour into 3 (now 4 in 5)." }
  ]
};

const BRAIN_ACTIVATIONS = [
  { title: "Micro Meditation", desc: "2 minutes: close eyes, breathe slowly, count inhales/exhales." },
  { title: "Dual N-Back Lite", desc: "Try remembering the last 2 positions of a moving dot." },
  { title: "20-Second Walk", desc: "Move around to wake up your body — then recall 3 things you saw." },
  { title: "Pattern Spotting", desc: "Find the odd one out in a grid of shapes for 60 seconds." }
];

export default function BrainActivity() {
  const categories = Object.keys(SAMPLE_QUESTIONS);
  const [selected, setSelected] = useState(categories[0]);
  const [current, setCurrent] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [history, setHistory] = useState([]);

  function pickQuestion(cat) {
    const pool = SAMPLE_QUESTIONS[cat] || [];
    if (pool.length === 0) return null;
    const idx = Math.floor(Math.random() * pool.length);
    return { ...pool[idx], id: `${cat}-${idx}-${Date.now()}` };
  }

  function handleEnter(e) {
    if (e) e.preventDefault();
    const q = pickQuestion(selected);
    if (q) {
      setCurrent(q);
      setShowAnswer(false);
      setHistory((h) => [q, ...h].slice(0, 10));
    }
  }

  function handleNext() {
    const q = pickQuestion(selected);
    if (q) {
      setCurrent(q);
      setShowAnswer(false);
      setHistory((h) => [q, ...h].slice(0, 10));
    }
  }

  return (
    <div className="qc-root">
      <header className="qc-hero">
        <h1>Brain Q — quick category questions</h1>
        <p className="qc-sub">Pick a category, activate your mind — simple, fast, focused.</p>
      </header>

      <main className="qc-grid">
        <section className="qc-left">
          <form className="qc-form" onSubmit={handleEnter}>
            <label className="qc-label">Choose category</label>
            <div className="qc-cats" role="radiogroup" aria-label="question categories">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c}
                  className={`qc-chip ${selected === c ? "qc-chip--active" : ""}`}
                  onClick={() => setSelected(c)}
                  aria-pressed={selected === c}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="qc-actions">
              <button className="qc-enter" type="submit">Enter</button>
              <button
                type="button"
                className="qc-next"
                onClick={handleNext}
                disabled={!selected}
                title="Get another question from the same category"
              >
                Next
              </button>
              <button
                type="button"
                className="qc-clear"
                onClick={() => { setCurrent(null); setShowAnswer(false); }}
              >
                Clear
              </button>
            </div>
          </form>

          <div className="qc-card">
            <h3 className="qc-card-title">Question</h3>

            {!current ? (
              <div className="qc-empty">No question yet — choose a category and press Enter.</div>
            ) : (
              <>
                <div className="qc-question">{current.q}</div>
                <div className="qc-controls">
                  <button className="qc-reveal" onClick={() => setShowAnswer((s) => !s)}>
                    {showAnswer ? "Hide Answer" : "Reveal Answer"}
                  </button>
                  <button className="qc-next-mini" onClick={handleNext}>Another</button>
                </div>
                {showAnswer && <div className="qc-answer">{current.a}</div>}
              </>
            )}
          </div>

          <div className="qc-history">
            <h4>Recent</h4>
            {history.length === 0 ? (
              <div className="qc-small">No recent questions</div>
            ) : (
              <ul>
                {history.map((h) => (
                  <li key={h.id} className="qc-history-item">
                    <strong>{h.q}</strong>
                    <div className="qc-small">[{h.a}]</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <aside className="qc-right">
          <div className="qc-activations">
            <h3>Brain Activation Ideas</h3>
            {BRAIN_ACTIVATIONS.map((b, i) => (
              <div key={i} className="qc-activation">
                <h5>{b.title}</h5>
                <p>{b.desc}</p>
                <button className="qc-do">Do it now</button>
              </div>
            ))}
          </div>

          <div className="qc-tips">
            <h4>Tips</h4>
            <ul>
              <li>Time yourself for extra focus (e.g., 60s per question).</li>
              <li>Mix categories to keep the brain flexible.</li>
              <li>Use a notebook to track improvements weekly.</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className="qc-foot">
        <small>Designed for quick mind warmups — lightweight and private.</small>
      </footer>
    </div>
  );
}
