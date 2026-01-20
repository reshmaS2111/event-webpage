javascript
const form = document.getElementById("regForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  message.textContent = "Thank you for registering!";
  form.reset();
});