import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'tee-nezuko',
    name: 'Nezuko Blossom Tee',
    price: 32,
    category: 'Tees',
    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'hoodie-akatsuki',
    name: 'Akatsuki Cloud Hoodie',
    price: 62,
    category: 'Hoodies',
    img: 'https://images.unsplash.com/photo-1548883354-94bcfe321c99?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'jacket-scout',
    name: 'Scout Regiment Bomber',
    price: 98,
    category: 'Jackets',
    img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'tee-pirate',
    name: 'Straw Hat Skull Tee',
    price: 34,
    category: 'Tees',
    img: 'https://images.unsplash.com/photo-1602810318383-3c8a0a6d220d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'hoodie-demon',
    name: 'Hashira Oversized Hoodie',
    price: 70,
    category: 'Hoodies',
    img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'cap-oni',
    name: 'Oni Crest Cap',
    price: 24,
    category: 'Accessories',
    img: 'https://images.unsplash.com/photo-1542343638-3f7fd28a83f2?q=80&w=1200&auto=format&fit=crop',
  },
];

const CATEGORIES = ['All', 'Tees', 'Hoodies', 'Jackets', 'Accessories'];

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="group rounded-xl border border-black/10 overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
        <button
          aria-label="Like"
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow"
        >
          <Heart size={18} className="text-pink-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold tracking-tight">{product.name}</h3>
          <span className="font-bold">${product.price}</span>
        </div>
        <p className="mt-1 text-sm text-black/60">{product.category}</p>
        <button
          onClick={() => onAdd(product)}
          className="mt-4 inline-flex items-center gap-2 w-full justify-center bg-black text-white rounded-lg py-2.5 font-semibold hover:bg-black/90"
        >
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ onAddToCart }) => {
  const [active, setActive] = React.useState('All');

  const items = React.useMemo(() => {
    if (active === 'All') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="collections" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Explore Collections</h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white hover:bg-black/5 border-black/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
