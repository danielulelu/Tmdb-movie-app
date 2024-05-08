const TMDB_API_KEY = process.env.TMDB_API_KEY;
import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error("Failed to fetch the data.");
  }
  const results = data.results;
  return (
    <div className="text-3xl">
      <Results results={results} />
    </div>
  );
}
