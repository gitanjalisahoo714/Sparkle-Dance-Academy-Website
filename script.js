const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission

      // Get form values
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const phone = form.querySelector('input[type="number"]').value.trim();
      const danceStyle = form.querySelector('select:nth-of-type(1)').value;
      const batch = form.querySelector('select:nth-of-type(2)').value;

      // Simple validation
      if (!name || !email || !phone || !danceStyle || !batch) {
          alert("Please fill in all fields.");
          return;
      }

      // Optional: further validation (email format, phone number length)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (phone.length < 10) {
          alert("Please enter a valid phone number.");
          return;
      }

      // If all is good
      alert(`Thank you ${name}!\nYou have successfully registered for the ${danceStyle} batch (${batch}).`);

      // Log details to console (optional)
      console.log({ name, email, phone, danceStyle, batch });

      // Clear form
      form.reset();
  });