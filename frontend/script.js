function handleBooking(event) {
  event.preventDefault(); // Prevent form submission and page reload
  alert('Booking button clicked!');
  const room = document.getElementById('room').value;

  if (room === 'Select a room') {
    document.getElementById('response').innerText = 'Please select a valid room.';
    return;
  }

  fetch(`http://localhost:3000/api/booking?roomInfo=${encodeURIComponent(room)}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'Available') {
        const confirmBooking = confirm(data.message);
        if (confirmBooking) {
          // Send POST request to confirm booking
          fetch('http://localhost:3000/api/confirm-booking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ roomInfo: room }),
          })
            .then(postResponse => postResponse.json())
            .then(postData => {
              document.getElementById('response').innerText = postData.message;
            })
            .catch(error => {
              console.error('POST error:', error);
              document.getElementById('response').innerText = 'Error confirming booking.';
            });
        }
      } else {
        // Update the div with the "Not Available" message
        document.getElementById('response').innerText = data.message;
      }
    })
    .catch(error => {
      console.error('GET error:', error);
      document.getElementById('response').innerText = 'Error fetching booking status.';
    });
}

function handleRoomSelection() {
  //alert('Room selection changed!');
  const selectedRoom = document.getElementById('room').value;
  const roomPreview = document.getElementById('room-preview');
  const roomCards = document.querySelectorAll('.room-card');

  // Hide all room cards
  roomCards.forEach(card => {
    card.style.display = 'none';
  });

  // Show the selected room card if a valid room is selected
  if (selectedRoom !== 'Select a room') {
    roomPreview.style.display = 'block';
    const selectedCard = document.getElementById(selectedRoom);
    if (selectedCard) {
      selectedCard.style.display = 'block';
    }
  } else {
    roomPreview.style.display = 'none';
  }
}

// Attach the event listener to the dropdown
document.getElementById('room').addEventListener('change', handleRoomSelection);
// Corrected event listener for the Submit button
document.getElementById('btnSubmit').addEventListener('click', handleBooking);