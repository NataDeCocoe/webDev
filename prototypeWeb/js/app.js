document.addEventListener("DOMContentLoaded", function () {

    const rform = document.getElementById("r-form");
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("confirmPass");

    const firstNameError = document.getElementById("fnameError");
    const lastNameError = document.getElementById("lnameError");
    const remailError = document.getElementById("remailError");
    const phoneError = document.getElementById("pError");
    const addError = document.getElementById("addError");
    const passError = document.getElementById("rPass");
    const conPass = document.getElementById("conPass");

    rform.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;


        if (email.value.trim() === "") {
            email.classList.add("is-invalid");
            remailError.textContent = "Email is required";
            remailError.style.display = "block";
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
            remailError.style.display = "none";
        }


        if (password.value.trim() === "") {
            password.classList.add("is-invalid");
            passError.textContent = "Password is required";
            passError.style.display = "block";
            isValid = false;
        } else if (password.value.trim().length < 6) {
            password.classList.add("is-invalid");
            passError.textContent = "Password must be at least 6 characters";
            passError.style.display = "block";
            isValid = false;
        } else {
            password.classList.remove("is-invalid");
            password.classList.add("is-valid");
            passError.style.display = "none";
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


    password.addEventListener("input", function () {
        if (password.value.trim().length >= 6) {
            password.classList.remove("is-invalid");
            passError.classList.add("is-valid");
            passError.style.display = "none";
        }
    });
});
