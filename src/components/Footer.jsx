import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-8 h-8 rounded-md bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500" />
              <span className="font-extrabold">Otaku Threads</span>
            </div>
            <p className="mt-3 text-sm text-black/60">
              Curated anime-inspired streetwear for fans, by fans.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-md hover:bg-black/5"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-md hover:bg-black/5"><Twitter size={18} /></a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-md hover:bg-black/5"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><a href="#collections" className="hover:text-black">All Collections</a></li>
              <li><a href="#new" className="hover:text-black">New Arrivals</a></li>
              <li><a href="#best" className="hover:text-black">Best Sellers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-sm text-black/70">
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-black/60">Get updates on drops and exclusive deals.</p>
            <form className="mt-3 flex items-center gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="rounded-md bg-black text-white px-4 py-2 font-semibold hover:bg-black/90">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 text-xs text-black/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Otaku Threads. All rights reserved.</p>
          <p>Made with ❤️ for anime fans.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
