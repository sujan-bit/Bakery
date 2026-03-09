import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="bakery-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">Contact Us</h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 space-y-5"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" required value={form.name} onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
                <input type="email" placeholder="Email" required value={form.email} onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              </div>
              <input type="text" placeholder="Subject" value={form.subject} onChange={(e) => update("subject", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" />
              <textarea placeholder="Your message..." rows={5} required value={form.message} onChange={(e) => update("message", e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
              <button type="submit" className="btn-primary w-full py-4">Send Message</button>
            </motion.form>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Visit Our Bakery</h3>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, text: "123 Baker Street, Sweet Town, ST 12345" },
                    { icon: Phone, text: "+1 (555) 123-4567" },
                    { icon: Mail, text: "hello@ammabakery.com" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-full bg-bakery-warm flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-accent" />
                      </div>
                      <span className="font-body text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock size={20} className="text-accent" /> Opening Hours
                </h3>
                <div className="bg-bakery-warm rounded-2xl p-6 space-y-3">
                  {[
                    { day: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 9:00 PM" },
                    { day: "Sunday", hours: "8:00 AM – 6:00 PM" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between font-body text-sm">
                      <span className="text-foreground font-medium">{item.day}</span>
                      <span className="text-muted-foreground">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-60 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353!3d-37.8162159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Bakery location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
