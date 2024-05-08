import MenuItem from "./MenuItem";
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill} from 'react-icons/bs';


export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-2xl font-bold bg-blue-500">TMDB</span>
        <span className="text-xl hidden sm:inline">Movie App</span>
      </div>
    </div>
  );
}
