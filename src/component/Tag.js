import { useState, useEffect, useCallback } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
  const [tag, setTag] = useState("funny");
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
  }, [tag]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div className="w-full max-w-md glass-card p-4 md:p-6 flex flex-col items-center gap-4 md:gap-6">
      <h1 className="text-xl md:text-2xl font-bold text-white text-center">
        🏷️ #{tag || "GIF"}
      </h1>

      <div className="w-full h-48 md:h-64 flex items-center justify-center">
        {loading ? (
          <Spinner />
        ) : (
          gif && (
            <div className="gif-container w-full h-full">
              <img 
                src={gif} 
                alt="Tag gif" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )
        )}
      </div>

      <input
        className="glass-input w-full py-2 md:py-3 px-4 rounded-full text-center placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-white focus:ring-opacity-30 text-sm md:text-base"
        onChange={changeHandler}
        value={tag}
        placeholder="Enter a tag..."
      />

      <button
        onClick={fetchData}
        className="glass-button text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full w-full transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
      >
        <span>🎯 Generate</span>
      </button>
    </div>
  );
}

export default Tag;