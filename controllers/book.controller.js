const validator = require("validator");
const Book = require("../models/book.model");

// Function to book a service
const bookService = async (req, res) => {
  const { userName, serviceName } = req.body;
  if (!userName || !serviceName) {
    res.status(400).send({ message: "all fields are required" });
    return;
  }
  if (!validator.isAlpha(userName)) {
    res
      .status(400)
      .send({ message: "User name should contain only alphabets" });
    return;
  }
  if (!validator.isAlpha(serviceName)) {
    res
      .status(400)
      .send({ message: "Service name should contain only alphabets" });
    return;
  }
  const book = new Book({
    userName,
    serviceName,
  });
  try {
    const data = await book.save();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ message: "something went wrong", error: err });
  }
};

// Function to get all bookings
const getBookings = async (req, res) => {
  try {
    const data = await Book.find().select("-__v");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

// Function to update a booking
const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { accepted, serviceTime } = req.body;
  if (!accepted) {
    res.status(400).send({ message: "accepted field is required" });
    return;
  }
  try {
    const data = await Book.findByIdAndUpdate(
      id,
      {
        accepted,
        serviceTime,
      },
      { new: true }
    );
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

module.exports = {
  bookService,
  getBookings,
  updateBooking,
};
