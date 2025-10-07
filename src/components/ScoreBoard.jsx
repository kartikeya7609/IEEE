import React, { useState } from "react";
import "./ScoreBoard.css";
export default function App() {
  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);

  const [blueIncrement, setBlueIncrement] = useState({ value: 0, visible: false });
  const [redIncrement, setRedIncrement] = useState({ value: 0, visible: false });

  const handleAddScore = (team, points) => {
    if (team === "blue") {
      setBlueScore((prev) => prev + points);
      setBlueIncrement({ value: points, visible: true });
      setTimeout(() => setBlueIncrement({ value: 0, visible: false }), 1000);
    } else {
      setRedScore((prev) => prev + points);
      setRedIncrement({ value: points, visible: true });
      setTimeout(() => setRedIncrement({ value: 0, visible: false }), 1000);
    }
  };

  const handleReset = () => {
    setBlueScore(0);
    setRedScore(0);
  };

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const ResetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
      <path d="M3 3v5h5"></path>
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
      <path d="M21 21v-5h-5"></path>
    </svg>
  );

  const TeamPanel = ({ teamColor, teamName, score, onAddScore, incrementData }) => {
    const colorVariants = {
      blue: { text: "text-blue-400", button: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/40", border: "border-blue-500/30", shadow: "shadow-blue-500/50" },
      red: { text: "text-red-400", button: "bg-red-600 hover:bg-red-700 shadow-red-500/40", border: "border-red-500/30", shadow: "shadow-red-500/50" },
    };
    const team = colorVariants[teamColor];

    return (
      <div
        className={`flex flex-col items-center justify-center bg-gray-900/60 backdrop-blur-sm case2 p-5 rounded-3xl w-full max-w-lg shadow-2xl ${team.shadow} border ${team.border} transition-all duration-300`}
      >
        <h2 className={`text-4xl font-black uppercase tracking-wider mt-6  ${team.text}`}>{teamName}</h2>

        <div className="relative my-10 flex flex-col items-center">
          {incrementData.visible && (
            <span className={`absolute -top-20 text-8xl font-extrabold ${team.text} animate-blink`}>
              +{incrementData.value}
            </span>
          )}
          <p className="text-[13rem] leading-none font-black text-white font-mono transition-transform duration-300 transform hover:scale-105">
            {score}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full case2">
          {[1, 5, 10].map((points) => (
            <button
              key={points}
              onClick={() => onAddScore(teamColor, points)}
              className={`flex items-center justify-center gap-2 text-white text-2xl font-semibold py-2 mb-4 mx-3rounded-xl ${team.button} transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <PlusIcon /> {points}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
<div>
<style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap');
          body {
            font-family: 'Orbitron', sans-serif;
            background-color: #0d1117;
            background-image:
              radial-gradient(circle at 15% 50%, rgba(13, 71, 161, 0.3), transparent 30%),
              radial-gradient(circle at 85% 30%, rgba(183, 28, 28, 0.3), transparent 30%);
            animation: pulse-glow 10s infinite alternate;
            display:flex;
            justify-content:center;
            align-items:center;
            
          }

          @keyframes pulse-glow {
            0% {
              background-image:
                radial-gradient(circle at 15% 50%, rgba(13, 71, 161, 0.2), transparent 40%),
                radial-gradient(circle at 85% 30%, rgba(183, 28, 28, 0.2), transparent 40%);
            }
            100% {
              background-image:
                radial-gradient(circle at 20% 55%, rgba(13, 71, 161, 0.4), transparent 50%),
                radial-gradient(circle at 80% 35%, rgba(183, 28, 28, 0.4), transparent 50%);
            }
          }

          @keyframes blink {
            0%, 100% { opacity: 0; transform: scale(1); }
            25%, 75% { opacity: 1; transform: scale(1.4); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }

          .animate-blink {
            animation: blink 0.8s ease-in-out;
          }
        `}
      </style>

      <main className="min-h-screen w-full flex flex-col justify-center items-center text-center ">
        <header className="mb-14 mt-10">
          <h1 className="text-7xl md:text-[6rem] font-black text-white tracking-wider case2">SCOREBOARD</h1>
          <p className="text-gray-400 mt-3 text-2xl case2 ">THE ULTIMATE BATTLE</p>
        </header>

        <div className="flex flex-row  case1 justify-around items-stretch w-full max-w-7xl gap-12 ">
          <TeamPanel teamColor="blue" teamName="Blue Team" score={blueScore} onAddScore={handleAddScore} incrementData={blueIncrement} />
          <TeamPanel teamColor="red" teamName="Red Team" score={redScore} onAddScore={handleAddScore} incrementData={redIncrement} />
        </div>

        <div className="mt-14 mb-10">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-3 text-white bg-gray-100 hover:bg-gray-600 text-3xl font-semibold  rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <ResetIcon /> Reset Game
          </button>
        </div>
      </main>
    </div>
  );
}
