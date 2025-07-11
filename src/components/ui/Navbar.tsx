import { ShoppingCart, MapPin, Menu } from 'lucide-react';
import { useState } from 'react';
import amazntLogo from '../../assets/amazont-logo-white.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-[#131921] text-white px-4 py-0.5">
      {/* Top row */}
      <div className="flex items-center justify-between gap-4">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile menu toggle */}
          <button
            className="sm:hidden"
            aria-label='menu'
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <NavLink to="/">
            <img
              src={amazntLogo}
              alt="logo"
              className="h-20 sm:h-20 w-auto object-contain"
            />
          </NavLink>


          {/* Delivery Info (hidden on mobile) */}
          <div className="hidden sm:flex flex-col text-xs leading-tight">
            <span className="text-gray-300">Deliver to</span>
            <span className="flex items-center font-semibold">
              <MapPin size={14} className="mr-1" />
              Mexico
            </span>
          </div>
        </div>

        {/* Center: Search (hidden on mobile) */}
        <div className="hidden sm:flex flex-grow max-w-xl">
          <input
            type="text"
            aria-label="search-input-desktop"
            placeholder="Search products, brands and more"
            className="flex-grow px-4 py-2 bg-white text-black rounded-l-md focus:outline-none"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md">
            🔍
          </button>
        </div>

        {/* Right: Account, Orders, Cart */}
        <div className="flex items-center gap-4 sm:gap-6 cursor-pointer">
          <div className="hidden sm:block">
            <p className="text-gray-300 text-xs">Hello, Gus</p>
            <p className="font-semibold hover:text-yellow-700">Account & Lists</p>
          </div>

          <div className="hidden sm:block">
            <p className="text-gray-300 text-xs">Returns</p>
            <p className="font-semibold hover:text-yellow-700">& Orders</p>
          </div>

          <div className="flex items-center relative cursor-pointer">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-1 rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Mobile search (only on small screens) */}
      <div className="mt-3 sm:hidden">
        <input
          type="text"
          placeholder="Search products, brands and more"
          className="w-full px-4 py-2 bg-white text-black rounded-md"
        />
      </div>

      {/* Mobile dropdown menu (future: add links or categories here) */}
      {isMobileOpen && (
        <div className="sm:hidden mt-4 space-y-2 text-sm border-t border-gray-700 pt-2">
          <p>Hello, Gus — Account & Lists</p>
          <p>Returns & Orders</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
