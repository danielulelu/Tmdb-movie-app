import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-4 transition-shadow duration-200">
      <Link href={`movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.poster_path || result.backdrop_path
          }`}
          alt={result.title}
          width={300}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
          style={{ width: "auto", height: "auto" }}
          priority={true}
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-sm">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className="text-sm flex items-center justify-between">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1"/>
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
