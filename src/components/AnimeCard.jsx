import { motion } from "framer-motion";

const AnimeCard = ({ anime }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
    >
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 text-white">
        <h2 className="text-lg font-bold truncate">{anime.title}</h2>
        <p className="text-sm text-white/70 line-clamp-3 mb-2">{anime.synopsis}</p>
        <p className="text-sm">📺 Episodes: {anime.episodes || "?"}</p>
        <p className="text-sm">⭐ Score: {anime.score || "N/A"}</p>
      </div>
    </motion.div>
  );
};

export default AnimeCard;
