import mushroomPizzaImg from "../assets/smoked-mushroom-pizza.jpg";
// Menu data — dish, category, price, rating, and a short tasting note.
// Images use themed placeholder photography (food/wood-fire subjects).

const menuData = [
  {
    id: "d1",
    name: "Charred Octopus",
    category: "Starters",
    price: 18,
    rating: 4.5,
    note: "Smoked paprika, white beans, salsa verde.",
    img: "https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?w=600&q=80",
  },
  {
    id: "d2",
    name: "Burnt Honey Carrots",
    category: "Starters",
    price: 12,
    rating: 4.5,
    note: "Whipped feta, dukkah, chili oil.",
    img: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=600&q=80",
  },
  {
    id: "d3",
    name: "Wood-Fired Ribeye",
    category: "Mains",
    price: 42,
    rating: 5,
    note: "Bone marrow butter, roasted shallots.",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
  },
  {
    id: "d4",
    name: "Ember-Roasted Half Chicken",
    category: "Mains",
    price: 29,
    rating: 4.5,
    note: "Charred lemon, herb jus, embered skin.",
   img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80",
  },
  {
    id: "d5",
    name: "Hearth Flatbread",
    category: "Wood-Fired",
    price: 16,
    rating: 4,
    note: "Charred fig, gorgonzola, walnut, honey.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
  },
  {
    id: "d6",
    name: "Smoked Mushroom Pizza",
    category: "Wood-Fired",
    price: 19,
    rating: 4.5,
    note: "Taleggio, thyme, oak-smoked oil.",
     img: mushroomPizzaImg,
  },
  {
    id: "d7",
    name: "Charred Fig Tart",
    category: "Desserts",
    price: 11,
    rating: 4.5,
    note: "Mascarpone, brown-butter crumble.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
  },
  {
    id: "d8",
    name: "Smoked Chocolate Pot",
    category: "Desserts",
    price: 10,
    rating: 5,
    note: "Sea salt, toasted hazelnut, embers.",
    img: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&q=80",
  },
  {
    id: "d9",
    name: "Barrel-Aged Old Fashioned",
    category: "Drinks",
    price: 14,
    rating: 4.5,
    note: "Oak bitters, smoked orange peel.",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
  },
  {
    id: "d10",
    name: "Sage & Honey Fizz",
    category: "Drinks",
    price: 11,
    rating: 4,
    note: "Garden sage, honey, soda, lemon.",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
  },
];

export const categories = ["All", "Starters", "Mains", "Wood-Fired", "Desserts", "Drinks"];

export default menuData;
