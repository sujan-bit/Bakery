import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Menu = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="bakery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Our Menu</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">Baked with Love</h1>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Every item is handcrafted daily using the finest ingredients. Discover your new favorite treat.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-all duration-300 ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-bakery-warm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
