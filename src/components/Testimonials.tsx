import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

const Testimonials = () => {
  return (
    <section className="section-padding bg-bakery-warm">
      <div className="bakery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Why Customers Love Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-bakery-gold text-bakery-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <p className="font-display font-semibold text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
