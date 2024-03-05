import ProductClass from "./ProductClass";

const products: ProductClass[] = [
  new ProductClass(
    1,
    "/images/elixir.webp",
    "Ultimate Health Elixir",
    "Description 1",
    10.99
  ),
  new ProductClass(
    2,
    "/images/elixir2.webp",
    "Nature's Boost",
    "Description 2",
    15.99
  ),
  new ProductClass(
    3,
    "/images/sereniTea.webp",
    "SereniTea",
    "A calming tea blend designed for relaxation and stress relief, featuring ingredients like chamomile, lavender, and lemon balm. The image evokes a sense of calm and tranquility, showing a warm, inviting cup of tea surrounded by soothing herbs, with steam rising gently to convey warmth and peace.",
    12.99
  ),
  new ProductClass(
    4,
    "/images/vitalityBoost.webp",
    "Vitality Boost",
    "An energizing essential oil blend aimed at invigorating the senses, with natural ingredients like peppermint, orange, and eucalyptus. The vibrant colors and imagery of the ingredients, alongside a sleek, modern bottle, capture the essence of vitality and energy.",
    9.99
  ),
  new ProductClass(
    5,
    "/images/glowEssence.webp",
    "Glow Essence",
    "A luxurious skincare serum that uses natural botanicals to enhance skin radiance and health. The image reflects the essence of natural beauty and rejuvenation, showcasing botanical ingredients and a sleek, elegant bottle.",
    14.99
  ),
];

export default products;
