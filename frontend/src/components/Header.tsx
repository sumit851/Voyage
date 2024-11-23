import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl  hover:text-red-500 color:#2e1065 font-bold tracking-tight">
          <Link to="/">Booking.Com</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in" // Changed to lowercase
            className="flex items-center color:#2e1065 bg-white text-blue-600 px-3 rounded-md font-bold hover:bg-gray-100 hover:text-green-500"
          >
            <CgProfile />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
