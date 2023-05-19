const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    bakeryId: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true },
    categories: { type: Array },
    price: { type: Number, required: true },
    weight: { type: Number },
    quantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
