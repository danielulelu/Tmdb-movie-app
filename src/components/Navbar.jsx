import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex bg-blue-400 p-4 lg:text-lg justify-center gap-4">
      <NavbarItem title="Trending" param='fetchTrending' />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
