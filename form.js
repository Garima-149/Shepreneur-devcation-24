document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    let formData = new FormData(event.target);

    // Convert form data to JSON and store it in local storage
    localStorage.setItem("formData", JSON.stringify(Object.fromEntries(formData)));

    // Redirect to the other HTML file
    window.location.href = "Startups/empowerHer.html";
});
