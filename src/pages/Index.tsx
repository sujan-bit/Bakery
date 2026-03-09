import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cake, Heart, Clock, Award } from "lucide-react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { products, galleryImages } from "@/data/products";

const features = [
  { icon: Cake, title: "Handcrafted Daily", desc: "Every item baked fresh each morning with premium ingredients" },
  { icon: Heart, title: "Made with Love", desc: "Family recipes passed down through generations" },
  { icon: Clock, title: "Always Fresh", desc: "We never sell day-old products. Freshness guaranteed" },
  { icon: Award, title: "Award Winning", desc: "Recognized as the best bakery in town three years running" },
];

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Features */}
      <section className="section-padding">
        <div className="bakery-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-bakery-warm flex items-center justify-center mx-auto mb-4">
                  <f.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-bakery-warm">
        <div className="bakery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Our Bestsellers</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Featured Treats</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery Preview */}
      <section className="section-padding">
        <div className="bakery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Instagram</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Sweet Moments</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="image-zoom aspect-square"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="btn-outline-bakery">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="bakery-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Have a Special Occasion?
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
              Let us create a custom cake that makes your celebration unforgettable.
            </p>
            <Link to="/custom-cake" className="inline-flex items-center justify-center rounded-full px-10 py-4 font-medium bg-accent text-accent-foreground transition-all duration-300 hover:opacity-90 font-body">
              Design Your Cake
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
