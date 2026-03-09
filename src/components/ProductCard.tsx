import { motion } from "framer-motion";
import type { Product } from "@/data/products";

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-bakery group"
    >
      <div className="image-zoom aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
          <span className="font-display text-lg font-bold text-accent shrink-0">{product.price}</span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
        <span className="inline-block font-body text-xs uppercase tracking-wider text-accent font-medium bg-bakery-warm px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
