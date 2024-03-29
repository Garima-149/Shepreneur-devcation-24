document.addEventListener("DOMContentLoaded", function() {
    // Retrieve form data from local storage
    let formData = JSON.parse(localStorage.getItem("formData"));

    // Display form data on the other page
    let formDataDisplay = document.getElementById("formDataDisplay");
    if (formData) {
        for (let [name, value] of Object.entries(formData)) {
            let fieldElement = document.createElement("p");
            fieldElement.textContent = `${name} : ${value}`;
            formDataDisplay.appendChild(fieldElement);
            // formDataDisplay.appendChild("\n");
        }
    } else {
        formDataDisplay.textContent = "No form data available.";
    }
});
