import "./App.css";
import Random from "./component/Random";
import Tag from "./component/Tag";
import Portfolio from "./component/Portfolio";
import { useState } from "react";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="App">
      {showPortfolio ? (
        <Portfolio onBack={() => setShowPortfolio(false)} />
      ) : (
        <div className="background w-full min-h-screen flex flex-col items-center py-4 md:py-8 px-3 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          
          <div className="w-full max-w-4xl relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h1 className="glass-card text-center px-4 py-3 md:px-10 md:py-4 text-3xl md:text-5xl font-bold title-animate shadow-xl">
                🎬 RANDOM GIFS
              </h1>
              <button 
                onClick={() => setShowPortfolio(true)}
                className="professional-btn text-white font-semibold py-3 px-6 rounded-full ml-4 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View Portfolio</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
            <div className="flex flex-col w-full items-center gap-6 md:gap-8 mt-6 md:mt-8">
              <Random />
              <Tag />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;