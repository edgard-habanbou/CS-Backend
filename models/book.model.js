const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
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
      type: Number,
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
