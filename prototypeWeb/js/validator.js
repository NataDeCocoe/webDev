document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("l-form");
  const emailInput = document.getElementById("floatingInput");
  const passwordInput = document.getElementById("floatingPassword");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;


    if (emailInput.value.trim() === "") {
      emailInput.classList.add("is-invalid");
      emailError.textContent = "Email is required";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
      emailError.style.display = "none";
    }


    if (passwordInput.value.trim() === "") {
      passwordInput.classList.add("is-invalid");
      passwordError.textContent = "Password is required";
      passwordError.style.display = "block";
      isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
      passwordInput.classList.add("is-invalid");
      passwordError.textContent = "Password must be at least 6 characters";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordInput.classList.remove("is-invalid");
      passwordInput.classList.add("is-valid");
      passwordError.style.display = "none";
    }

    if (isValid) {
      window.location.href = "404.html";
    }
  });


  emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "") {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
      emailError.style.display = "none";
    }
  });

  // Hide error message when typing (Password)
  passwordInput.addEventListener("input", function () {
    if (passwordInput.value.trim().length >= 6) {
      passwordInput.classList.remove("is-invalid");
      passwordInput.classList.add("is-valid");
      passwordError.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".nav-link");
  let currentPage = window.location.pathname.split("/aboutUs.html").pop(); // Get current page filename

  if (currentPage === "") currentPage = "index.html"; // Default to index.html if on root

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Add "active" class to matching link
    }
  });
});
