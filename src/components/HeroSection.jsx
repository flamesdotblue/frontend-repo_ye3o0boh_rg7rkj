import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

// Safe Spline loader: avoids breaking the app if the package or scene fails to load
const HeroSection = () => {
  const [SplineComp, setSplineComp] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;
    // Dynamically import Spline so the app still renders even if it fails
    import('@splinetool/react-spline')
      .then((mod) => {
        if (mounted) setSplineComp(() => mod.default);
      })
      .catch(() => {
        // If Spline fails to load (network/package), we gracefully skip it
        if (mounted) setSplineComp(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {SplineComp ? (
          <SplineComp
            scene="https://prod.spline.design/Rz9rYQ0Q8zV7Qy8g/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          // Fallback decorative gradient if Spline isn't available
          <div className="w-full h-full bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200" />
        )}
      </div>

      {/* Non-blocking overlay for readability over the 3D scene */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium">
            <Star size={14} className="text-yellow-500" />
            Limited Drop: Winter 2025
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Anime streetwear that lets your fandom shine
          </h1>
          <p className="mt-4 text-base md:text-lg text-black/70 max-w-xl">
            Premium tees, oversized hoodies, and statement jackets inspired by your favorite series. Designed for comfort. Built for the spotlight.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-purple-600 to-indigo-600 text-white font-semibold px-5 py-3 rounded-full shadow hover:opacity-95"
            >
              Shop Collections <ChevronRight size={18} />
            </a>
            <a
              href="#best"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold border border-black/10 hover:bg-black/5"
            >
              Best Sellers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
