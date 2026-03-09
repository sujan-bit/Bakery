import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="Beautiful bakery cake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="relative z-10 bakery-container px-4 md:px-8 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4"
          >
            Welcome to Amma Bakery House
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Freshly Baked{" "}
            <span className="text-gradient italic">Happiness</span>{" "}
            Everyday
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Handcrafted with love using the finest ingredients. Every bite tells a story of passion, tradition, and sweetness.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/menu" className="btn-primary text-base px-10 py-4">
              Order Now
            </Link>
            <Link to="/menu" className="btn-outline-bakery text-base px-10 py-4">
              Explore Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
