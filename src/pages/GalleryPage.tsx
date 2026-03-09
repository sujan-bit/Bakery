import { motion } from "framer-motion";
import { galleryImages } from "@/data/products";
import bakeryInterior from "@/assets/bakery-interior.jpg";
import galleryBaking from "@/assets/gallery-baking.jpg";

const allImages = [
  ...galleryImages,
  { src: bakeryInterior, alt: "Bakery interior", height: "medium" },
  { src: galleryBaking, alt: "Baker at work", height: "tall" },
];

const heightMap: Record<string, string> = {
  short: "row-span-1",
  medium: "row-span-1 md:row-span-2",
  tall: "row-span-1 md:row-span-2",
};

const GalleryPage = () => {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="bakery-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent font-medium mb-3">Gallery</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">A Feast for the Eyes</h1>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {allImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="image-zoom break-inside-avoid"
              >
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
