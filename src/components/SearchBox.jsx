"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  
  return (
    <form
      className="relative flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full h-14 pr-12 rounded-md placeholder-gray-500 outline-none bg-transparent border-2"
      />
      <button type="submit" className="text-blue-600 absolute top-0 right-0 h-full px-6 hover:bg-slate-400">Search</button>
    </form>
  );
}
