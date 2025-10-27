import React from 'react';
import { ShoppingCart, Search, Menu, X, User } from 'lucide-react';

const Navbar = ({ cartCount = 0 }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a href="#" className="flex items-center gap-2 font-bold text-lg tracking-tight">
              <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500" />
              <span className="font-extrabold">Otaku Threads</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#collections" className="text-sm font-medium hover:text-purple-600">Collections</a>
            <a href="#new" className="text-sm font-medium hover:text-purple-600">New</a>
            <a href="#best" className="text-sm font-medium hover:text-purple-600">Best Sellers</a>
            <a href="#about" className="text-sm font-medium hover:text-purple-600">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center rounded-full bg-black/5 px-3 py-1.5">
              <Search size={16} className="text-black/60" />
              <input
                type="text"
                placeholder="Search anime, series, or merch"
                className="ml-2 bg-transparent outline-none placeholder:text-black/40 text-sm w-64"
              />
            </div>
            <button className="relative inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5" aria-label="Account">
              <User size={20} />
            </button>
            <button className="relative inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5" aria-label="Cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 text-[10px] font-bold bg-purple-600 text-white rounded-full px-1.5 py-0.5">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              <a href="#collections" className="px-2 py-2 rounded-md hover:bg-black/5">Collections</a>
              <a href="#new" className="px-2 py-2 rounded-md hover:bg-black/5">New</a>
              <a href="#best" className="px-2 py-2 rounded-md hover:bg-black/5">Best Sellers</a>
              <a href="#about" className="px-2 py-2 rounded-md hover:bg-black/5">About</a>
              <div className="mt-2 flex items-center gap-2 rounded-md bg-black/5 px-3 py-2">
                <Search size={16} className="text-black/60" />
                <input
                  type="text"
                  placeholder="Search anime, series, or merch"
                  className="ml-2 bg-transparent outline-none placeholder:text-black/40 text-sm w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
