document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("chat-btn").addEventListener("click", function() {
        var chatContainer = document.getElementById("chat-container");
        // Check if the element is visible or not using computed style
        var computedStyle = window.getComputedStyle(chatContainer);
        if (computedStyle.display === "none") {
            chatContainer.style.display = "block";
        } else {
            chatContainer.style.display = "none";
        }
    });
});