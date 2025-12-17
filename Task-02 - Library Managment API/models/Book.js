const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      unique: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    publishedYear: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
