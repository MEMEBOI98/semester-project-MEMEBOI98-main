// app.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());

// Updated GET route with roomInfo query parameter
app.get('/api/booking', (req, res) => {
  const roomInfo = req.query.roomInfo; // Get roomInfo from query parameters
  const randomNumber = Math.floor(Math.random() * 2);

  // Simulate a booking response
  const bookingResponse = {
    bookingId: '12345',
    status: randomNumber === 0 ? 'Not Available' : 'Available',
    message: randomNumber === 0 ? 'Sorry, the booking is not available.' : 'Do you want to proceed with the booking?',
    roomInfo: roomInfo || 'No room info provided' // Include roomInfo in the response
  };

  res.json(bookingResponse);
});

// POST route to confirm booking
app.post('/api/confirm-booking', express.json(), (req, res) => {
  const roomInfo = req.body.roomInfo;

  if (!roomInfo) {
    return res.status(400).json({ message: 'Room information is required to confirm booking.' });
  }

  // Simulate booking confirmation
  const confirmationResponse = {
    bookingId: '12345',
    status: 'Confirmed',
    message: `Your booking for ${roomInfo} has been confirmed!`,
  };

  res.json(confirmationResponse);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
