import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import pastries from "@/assets/pastries.jpg";
import cookies from "@/assets/cookies.jpg";
import bread from "@/assets/bread.jpg";
import macarons from "@/assets/macarons.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
};

export const categories = ["All", "Cakes", "Cupcakes", "Pastries", "Cookies", "Bread"] as const;

export const products: Product[] = [
  { id: "1", name: "Belgian Chocolate Cake", category: "Cakes", price: "$45", description: "Rich dark chocolate layers with ganache drip and gold leaf", image: cakeChocolate },
  { id: "2", name: "Red Velvet Dream", category: "Cakes", price: "$42", description: "Classic red velvet with cream cheese frosting and rose petals", image: cakeRedvelvet },
  { id: "3", name: "Strawberry Shortcake", category: "Cakes", price: "$38", description: "Fresh strawberries layered with whipped cream and sponge", image: cakeStrawberry },
  { id: "4", name: "Pink Buttercream Cupcakes", category: "Cupcakes", price: "$4", description: "Vanilla cupcakes topped with silky pink buttercream swirl", image: cupcakes },
  { id: "5", name: "French Pastry Collection", category: "Pastries", price: "$28", description: "Assorted croissants, eclairs, and fruit tarts", image: pastries },
  { id: "6", name: "Chocolate Chip Cookies", category: "Cookies", price: "$12", description: "Crispy edges, chewy center, loaded with chocolate chips", image: cookies },
  { id: "7", name: "Artisan Sourdough", category: "Bread", price: "$8", description: "Slow-fermented sourdough with a golden crusty exterior", image: bread },
  { id: "8", name: "French Macarons Box", category: "Pastries", price: "$24", description: "12 pastel macarons in assorted flavors", image: macarons },
];

export const testimonials = [
  { name: "Sarah Mitchell", text: "The most exquisite cakes I've ever tasted. Amma Bakery made our wedding truly magical!", rating: 5 },
  { name: "James Cooper", text: "Their sourdough bread is a daily ritual for our family now. Absolutely addictive!", rating: 5 },
  { name: "Priya Sharma", text: "Custom birthday cake was beyond expectations. Beautiful, delicious, and delivered on time.", rating: 5 },
  { name: "Emily Watson", text: "The French pastries transport you straight to Paris. A gem of a bakery!", rating: 5 },
];

export const galleryImages = [
  { src: cakeChocolate, alt: "Chocolate cake", height: "tall" },
  { src: cupcakes, alt: "Pink cupcakes", height: "short" },
  { src: pastries, alt: "French pastries", height: "medium" },
  { src: cakeRedvelvet, alt: "Red velvet cake", height: "tall" },
  { src: cookies, alt: "Chocolate chip cookies", height: "short" },
  { src: bread, alt: "Artisan bread", height: "medium" },
  { src: cakeStrawberry, alt: "Strawberry cake", height: "short" },
  { src: macarons, alt: "Macarons", height: "tall" },
];
