

export const metadata = {
  title: "About TMDB",
  description:
    "TMDB is a website that provides information about movies and tv shows. It has strong breadth of data which is largely unmatched and very precise to the movie community and fraternity. Happy browsing",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl p-3 space-y-4">
      <h1 className="text-6xl md:text-8xl font-bold flex items-center justify-center pt-4 hover:text-cyan-500">
        Hi there
      </h1>

      <h2 className="flex items-center justify-center text-3xl pt-10">
        Lets talk about TMDB
      </h2>
      <p className="text-xl md:text-2xl font-light flex items-center justify-center pt-4">
        TMDB is a website that provides information about movies and tv shows.
        It has strong breadth of data which is largely unmatched and very
        precise to the movie community and fraternity. Happy browsing{" "}
      </p>
      <button className="rounded-lg px-4 py-2 bg-blue-500 text-red-700 uppercase hover:text-white hover:bg-red-800 font-bold text-2xl">
        contact tmdb
      </button>
    </div>
  );
}
