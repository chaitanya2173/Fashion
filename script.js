// Contact form submission handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('exampleInputPassword1').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const message = document.getElementById('textarea').value;

  // Use EmailJS to send the email
  emailjs.send("your_service_id", "your_template_id", {
    name: name,
    email: email,
    message: message
  })
  .then((response) => {
    console.log('Message sent successfully!', response);
    // Display a success message to the user
    document.getElementById('contact-form').innerHTML = '<p>Thank you for contacting us! We will get back to you soon.</p>';
  })
  .catch((error) => {
    console.log('Error sending message:', error);
    // Display an error message to the user
    document.getElementById('contact-form').innerHTML = '<p>Sorry, there was an error sending your message. Please try again.</p>';
  });
});