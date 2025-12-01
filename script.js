const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="number"]').value.trim();
    const danceStyle = form.querySelector('select:nth-of-type(1)').value;
    const batch = form.querySelector('select:nth-of-type(2)').value;

    // Validation
    if (!name || !email || !phone || !danceStyle || !batch) {
        alert("Please fill in all fields.");
        return;
    }

    // EmailJS parameters
    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        dance_style: danceStyle,
        batch: batch
    };

    emailjs.send("service_sparkle", "template_re0st2l", templateParams)
        .then(function(response) {
            alert("🎉 Thank you for registration! A confirmation email has been sent to your inbox.");
            form.reset();
        }, function(error) {
            alert("Failed to send email. Please try again.");
            console.log("Error:", error);
        });
});
