document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      message.classList.remove("d-none");
      form.reset();
    });
  }
});
