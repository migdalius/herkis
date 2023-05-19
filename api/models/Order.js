const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    bakeryId: { type: String, required: true },
    code: { type: String },
    products: [
      {
        productId: {
          type: String,
        },
        productName: {
          type: String,
        },
        productPrice: {
          type: Number,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        weight: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "w przygotowaniu" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
