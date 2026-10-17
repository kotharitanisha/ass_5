document.getElementById("employeeForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";
    document.getElementById("success").innerHTML = "";

    // Name validation
    if (name == "") {
        document.getElementById("nameError").innerHTML =
            "Please enter your name";
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML =
            "Name should contain only letters";
        valid = false;
    }

    // Email validation
    if (email == "") {
        document.getElementById("emailError").innerHTML =
            "Please enter your email";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Enter a valid email";
        valid = false;
    }

    // Password validation
    if (password == "") {
        document.getElementById("passwordError").innerHTML =
            "Please enter a password";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML =
            "Password must contain at least 6 characters";
        valid = false;
    }

    // Phone validation
    if (phone == "") {
        document.getElementById("phoneError").innerHTML =
            "Please enter phone number";
        valid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML =
            "Phone number must contain 10 digits";
        valid = false;
    }

    // Department validation
    if (department == "") {
        document.getElementById("departmentError").innerHTML =
            "Please select a department";
        valid = false;
    }

    // If all details are valid
    if (valid) {

        document.getElementById("success").innerHTML =
            "Employee registered successfully!";

        document.getElementById("employeeForm").reset();
    }

});