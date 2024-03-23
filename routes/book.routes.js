const express = require("express");
const {
  bookService,
  getBookings,
  updateBooking,
} = require("../controllers/book.controller");
const router = express.Router();

// Route to book a service
router.post("/book", bookService);

// Route to get all bookings
router.get("/book", getBookings);

// Route to update a booking
router.put("/book/:id", updateBooking);

module.exports = router;
