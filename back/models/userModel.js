const mongoose = require("mongoose");

const UserModel = mongoose.Schema(
  {
    id: { type: Number },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
    },
    income: {
      type: String,
    },
    city: {
      type: String,
    },
    car: {
      type: String,
    },
    quote: {
      type: String,
    },
    phone_price: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserModel);
module.exports = { User };
