const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    companyName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBakery: {
      type: Boolean,
      default: false,
    },
    desc: { type: String },
    city: { type: String },
    street: { type: String },
    zip: { type: String },
    img: { type: Array },
    phone: { type: Number },
    www: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    youtube: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
