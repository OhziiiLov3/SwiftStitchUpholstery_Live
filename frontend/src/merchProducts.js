import merchCard1 from "./images/ComboLogo01.png";
import merchCard2 from "./images/MetallicLogoPromoImage.jpg";
import merchCard3 from "./images/ComboLogo01.png";

const merchProducts = [
  {
    _id: "1",
    name: "Swift Stitch Tee",
    image: merchCard1,
    description: "Pre-washed SS Hero Tee",
    price: 30.0,
    countInStock: 30,
    color: "Black",
  },
  {
    _id: "2",
    name: "Swift Stitch Hoodie",
    image: merchCard2,
    description: "Custom embrodied Hoodies",
    material: "Carbon fiber, Ployuerthane Resin",
    price: 100.0,
    countInStock: 30,
    color: "Black and Yellow",
  },
  {
    _id: "3",
    name: "Swift Stitich Tank Tops",
    image: merchCard3,
    description: "Swift Stitch Og Tees",
    material: "Carbon fiber, Ployuerthane Resin",
    price: 30.0,
    countInStock: 5,
    color: "VW Blue",
  },
];

export default merchProducts;
