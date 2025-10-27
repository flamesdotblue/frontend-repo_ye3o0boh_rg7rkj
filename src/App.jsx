import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = React.useState(0);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar cartCount={cartCount} />
      <main>
        <HeroSection />
        <section id="new" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-indigo-600 p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">New Arrivals</h3>
                  <p className="text-white/80">Fresh prints and heavyweight fabrics just landed.</p>
                </div>
                <a
                  href="#collections"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-5 py-2 hover:opacity-90"
                >
                  Explore now
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProductGrid onAddToCart={handleAddToCart} />

        <section id="best" className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-black/10 p-6">
                <h4 className="font-bold text-lg">Premium fabrics</h4>
                <p className="mt-2 text-black/70">Ultra-soft cotton blends and durable stitching for everyday wear.</p>
              </div>
              <div className="rounded-xl border border-black/10 p-6">
                <h4 className="font-bold text-lg">Officially inspired</h4>
                <p className="mt-2 text-black/70">Designs that celebrate iconic series with a modern streetwear twist.</p>
              </div>
              <div className="rounded-xl border border-black/10 p-6">
                <h4 className="font-bold text-lg">Fast shipping</h4>
                <p className="mt-2 text-black/70">Trackable worldwide delivery and hassle-free returns.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
