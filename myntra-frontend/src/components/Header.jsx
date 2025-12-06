import { Link } from "react-router-dom";
import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
  IoSearch,
} from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Header() {
  const bagLength = useSelector((state) => state.bag.length);
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Main Header Container */}
      <div className="px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/">
              <img
                src="https://imgs.search.brave.com/5VF35XC9L4_A0YnY5D95J9524F9Iz5ShaPBq_xXFkVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWFs/Y2FzaC5pbi9pbWcv/dGhlLXNvdWxlZC1z/dG9yZS1sb2dvLnBu/Zw"
                alt="Myntra Logo"
                className="h-12 w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          {/* Categories */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            <Link
              to="/men"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm"
            >
              MEN
            </Link>
            <Link
              to="/women"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm"
            >
              WOMEN
            </Link>
            <Link
              to="/kids"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm"
            >
              KIDS
            </Link>
            <Link
              to="/home"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm"
            >
              HOME
            </Link>
            <Link
              to="/beauty"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm"
            >
              BEAUTY
            </Link>
            <Link
              to="/genz"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm"
            >
              GEN<span className="text-xs">Z</span>
            </Link>
            <Link
              to="/studio"
              className="text-gray-800 font-medium hover:text-red-500 transition-colors text-sm flex items-center gap-1"
            >
              STUDIO
              <sup className="text-xs bg-red-500 text-white px-1.5 py-0.5 rounded font-bold">
                NEW
              </sup>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xs">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 bg-gray-100 text-sm text-gray-800 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors">
                <IoSearch size={18} />
              </button>
            </div>
          </div>

          {/* Right Side Icons with Labels */}
          <div className="flex items-center gap-6">
            {/* Profile */}
            <button className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors group">
              <Link to="/profile">
                <IoPersonOutline
                  size={24}
                  className="text-gray-800 group-hover:text-red-500"
                />
                <span className="text-xs text-gray-800 group-hover:text-red-500 font-medium">
                  Profile
                </span>
              </Link>
            </button>

            {/* Wishlist */}
            <button className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors group">
              <Link to="/wishlist">
                <IoHeartOutline
                  size={24}
                  className="text-gray-800 group-hover:text-red-500"
                />
                <span className="text-xs text-gray-800 group-hover:text-red-500 font-medium">
                  Wishlist
                </span>
              </Link>
            </button>

            {/* Bag */}
            <button className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors group relative">
              <Link to="/bag">
                <IoCartOutline
                  size={24}
                  className="text-gray-800 group-hover:text-red-500"
                />
                <span className="text-xs text-gray-800 group-hover:text-red-500 font-medium">
                  Bag
                </span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {bagLength}
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
