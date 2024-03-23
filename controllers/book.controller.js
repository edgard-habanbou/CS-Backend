const Book = require("../models/book.model");

// Function to book a service
const bookService = async (req, res) => {
  const { id, userName, serviceName, accepted } = req.body;
  if (!id || !userName || !serviceName || !accepted) {
    res.status(400).send({ message: "all fields are required" });
    return;
  }
  const book = new Book({
    id,
    userName,
    serviceName,
    accepted,
  });
  try {
    const data = await book.save();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

// Function to get all bookings
const getBookings = async (req, res) => {
  try {
    const data = await Book.find();
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
