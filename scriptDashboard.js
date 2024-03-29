let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let identity = document.getElementById("identity");
let count = 0;

signinBtn.onclick = function () {
    count++;
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

    console.log("Sign-in button clicked. Count: ", count);

    if (count >= 2) {
        let selectedOption = null; // Declare selectedOption outside the if block
        if (identity != null) {
            selectedOption = identity.value; // Assign value to selectedOption
        }
        console.log("Selected option: ", selectedOption);
        console.log(areAllFieldsFilled());
        if ((selectedOption === "Investor" || selectedOption === "Contributor") && areAllFieldsFilled()) {
            console.log("Redirecting to services.html");
            window.location.href = "services.html";
        }
        else if ((selectedOption === "Presenter") && areAllFieldsFilled()) {
            console.log("Redirecting to form.html");
            window.location.href = "form.html";
        }
    }
}

signupBtn.onclick = function () {
    nameField.style.maxHeight = "55px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

function areAllFieldsFilled() {
    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;
    return email.trim() !== "" && password.trim() !== "";
}
