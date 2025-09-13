import { useState, useEffect } from "react";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const imageUrl = data.data.images.downsized_large.url;
      setGif(imageUrl);
    } catch (error) {
      console.error("Error fetching gif:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-md glass-card p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6">
      <h1 className="text-xl md:text-2xl font-bold text-white text-center">
        🎲 Random GIF
      </h1>

      <div className="w-full h-48 md:h-64 flex items-center justify-center">
        {loading ? (
          <Spinner/>
        ) : (
          gif && (
            <div className="gif-container w-full h-full">
              <img 
                src={gif} 
                alt="Random gif" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )
        )}
      </div>

      <button
        onClick={fetchData}
        className="glass-button text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full w-full transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
      >
        <span>✨ Generate</span>
      </button>
    </div>
  );
}

export default Random;