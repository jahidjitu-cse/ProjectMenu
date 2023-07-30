"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
      {
        name: "Shorshe Ilish (Hilsa Fish with Mustard Curry)",
        price: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/smoked_hilsa_cooked_with_mustard_seeds.png",
        type: "lunch",
      },
      {
        name: "Kacchi Biriyani (Mutton Biriyani)",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/download.png",
        type: "lunch",
      },
      {
        name: "Beef Kala Bhuna (Beef Curry)",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/download_1.png",
        type: "dinner",
      },
      {
        name: " Bhuna Khichuri with Dim Bhaji (Yellow Rice with Omelette)",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/Bhuna-khichuri-recipe.png",
        type: "breakfast",
      },
      {
        name: "Sheek Kebab with Naan (Kebab with Flatbread)",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/download_2.png",
        type: "lunch",
      },
      {
        name: "Dal (Lentil Soup)",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/download_3.png",
        type: "dinner",
      },
      {
        name: "Panta Ilish",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/panta_ilish.png",
        type: "dinner",
      },
      {
        name: "Fuchka",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/deshi_fuchka.png",
        type: "snacks",
      },
      {
        name: "Haleem (Mixed Lentil Soup and Meat)",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/haleem.png",
        type: "snacks",
      },
      {
        name: "Alu Bhorta",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/meshed_potato_alu_bharta.png",
        type: "breakfast",
      },
      {
        name: "Shobji (curry)",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/vegetable_curry.png",
        type: "breakfast",
      },
      {
        name: "Shing Mach with Fulkopi ( Cauliflower with Stinging catfish",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/images/shing_mach_with_fulkopi__cauliflower_with_stinging_catfish.png",
        type: "dinner",
      },
    ];
    res.json(foodData);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map