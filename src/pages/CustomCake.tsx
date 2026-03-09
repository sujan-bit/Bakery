import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const flavors = ["Vanilla", "Chocolate", "Red Velvet", "Strawberry", "Lemon", "Carrot"];
const sizes = ["6 inch (8 servings)", "8 inch (12 servings)", "10 inch (20 servings)", "12 inch (30 servings)"];
const decorations = ["Buttercream Flowers", "Fondant Design", "Fresh Fruit", "Sprinkles", "Gold Leaf", "Minimalist"];

const CustomCake = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "",
    flavor: "", size: "", decoration: "", message: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Custom cake order submitted! We'll contact you shortly.");
    setForm({ name: "", email: "", phone: "", date: "", flavor: "", size: "", decoration: "", message: "" });
  };

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="bakery-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Custom Orders</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">Design Your Dream Cake</h1>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Tell us your vision, and our expert bakers will bring it to life.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-8 md:p-10 space-y-6"
            style={{ boxShadow: "var(--shadow-warm)" }}
          >
            {/* Contact info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required value={form.name} onChange={(e) => update("name", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <input type="email" placeholder="Email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <input type="tel" placeholder="Phone" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <input type="date" required value={form.date} onChange={(e) => update("date", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
            </div>

            {/* Flavor */}
            <div>
              <label className="font-display text-sm font-semibold text-foreground block mb-3">Choose Flavor</label>
              <div className="flex flex-wrap gap-2">
                {flavors.map((f) => (
                  <button key={f} type="button" onClick={() => update("flavor", f)}
                    className={`font-body text-sm px-4 py-2 rounded-full transition-all ${form.flavor === f ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-bakery-warm"}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="font-display text-sm font-semibold text-foreground block mb-3">Choose Size</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button key={s} type="button" onClick={() => update("size", s)}
                    className={`font-body text-sm px-4 py-2 rounded-full transition-all ${form.size === s ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-bakery-warm"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Decoration */}
            <div>
              <label className="font-display text-sm font-semibold text-foreground block mb-3">Decoration Style</label>
              <div className="flex flex-wrap gap-2">
                {decorations.map((d) => (
                  <button key={d} type="button" onClick={() => update("decoration", d)}
                    className={`font-body text-sm px-4 py-2 rounded-full transition-all ${form.decoration === d ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-bakery-warm"}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <textarea
              placeholder="Special instructions or message on cake..."
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
            />

            <button type="submit" className="btn-primary w-full py-4 text-base">
              Submit Custom Order
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default CustomCake;
