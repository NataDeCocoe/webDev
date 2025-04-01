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



        if(firstName.value.trim() === ""){
            firstName.classList.add("is-invalid");
            firstNameError.textContent = "First name is required";
            firstNameError.style.display = "block"
            isValid = false;
        } else {
            firstName.classList.remove("is-invalid");
            firstName.classList.add("is-valid");
            firstNameError.style.display = "none";
        }

        if(lastName.value.trim() === ""){
            lastName.classList.add("is-invalid");
            lastNameError.textContent = "Last name is required";
            lastNameError.style.display = "block"
            isValid = false;
        } else {
            lastName.classList.remove("is-invalid");
            lastName.classList.add("is-valid");
            lastNameError.style.display = "none";
        }


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

        if(phone.value.trim() === ""){
            phone.classList.add("is-invalid");
            phoneError.textContent = "Phone is required";
            phoneError.style.display = "block"
            isValid = false;
        } else {
            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");
            phoneError.style.display = "none";
        }

        if(address.value.trim() === ""){
            address.classList.add("is-invalid");
            addError.textContent = "Address is required";
            addError.style.display = "block"
            isValid = false;
        } else {
            address.classList.remove("is-invalid");
            address.classList.add("is-valid");
            addError.style.display = "none";
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


        if (confirmPass.value.trim() === "") {
            confirmPass.classList.add("is-invalid");
            conPass.textContent = "Password is required";
            conPass.style.display = "block";
            isValid = false;
        } else if (confirmPass.value.trim().length < 6) {
            confirmPass.classList.add("is-invalid");
            conPass.textContent = "Password must be at least 6 characters";
            conPass.style.display = "block";
            isValid = false;
        } else {
            confirmPass.classList.remove("is-invalid");
            confirmPass.classList.add("is-valid");
            conPass.style.display = "none";
        }

        if (isValid) {
            Swal.fire({
                title: "Temporary!",
                icon: "success",
                draggable: false
            });

       
            setTimeout(() => {
                window.location.href = "homepage.html";
            }, 2000);
        }
    });


    // emailInput.addEventListener("input", function () {
    //     if (emailInput.value.trim() !== "") {
    //         emailInput.classList.remove("is-invalid");
    //         emailInput.classList.add("is-valid");
    //         emailError.style.display = "none";
    //     }
    // });


    // password.addEventListener("input", function () {
    //     if (password.value.trim().length >= 6) {
    //         password.classList.remove("is-invalid");
    //         passError.classList.add("is-valid");
    //         passError.style.display = "none";
    //     }
    // });
});


const resizeMenu = document.getElementById('menu');
resizeMenu.addEventListener('click', function (e){
    e.preventDefault();
    document.body.classList.toggle('sb-collapse');
})