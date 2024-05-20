import Image from "next/image";

export default async function MovieSearchPage({ params }) {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  );
  const movie = await res.json();

  // Check if backdrop_path or poster_path is available
  const imagePath = movie.backdrop_path || movie.poster_path;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${imagePath}`}
            alt=""
            width={500}
            height={300}
            className="rounded-lg"
          />
        ) : (
          <p className="text-sm">No image available</p> // Render a message if imagePath is not available
        )}
        <div className="p-2">
          <h2 className="text-lg font-semibold mb-3">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date}
          </p>
          <p className="mb-3"><span className="font-semibold mr-1">Votes:</span>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
}
