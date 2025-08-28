const MovieCard = ({ movie }) => (
  <div className="min-w-[150px] sm:min-w-[180px] md:min-w-[200px] flex-shrink-0 bg-gray-800 rounded-lg p-2">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
      className="w-full h-40 object-cover rounded"
    />
    <h3 className="text-sm mt-2 text-white truncate">{movie.title}</h3>
  </div>
);
export default MovieCard;
