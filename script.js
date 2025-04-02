// script.js
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from refreshing the page
      
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      
      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }
      
      alert("Thank you, " + name + "! Your message has been received.");
      
      // Clear the form fields after submission
      form.reset();
  });
});
