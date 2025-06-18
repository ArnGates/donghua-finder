import { useState, useEffect } from "react";
import AnimeCard from "./components/AnimeCard";

const App = () => {
  const [query, setQuery] = useState("wanjie");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchDonghua = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
      const data = await res.json();
      setResults(data.data);
    } catch (error) {
      console.error("API Error:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchDonghua();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchDonghua();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">
        Donghua Finder
      </h1>

      <form onSubmit={handleSubmit} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for Donghua..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-64 sm:w-96 px-4 py-2 rounded-l-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-r-xl hover:bg-purple-700 transition"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p className="text-center text-lg text-white/80">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
