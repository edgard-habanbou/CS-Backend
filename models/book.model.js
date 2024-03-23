const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    serviceTime: {
      type: String,
    },
    accepted: {
      type: Integer,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
