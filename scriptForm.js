let startup = document.getElementById("startup");
let product = document.getElementById("product");

startup.onclick = function(){
    console.log("Redirecting to services.html");
    window.location.href = "startupForm.html";
}

product.onclick = function(){
    console.log("Redirecting to services.html");
    window.location.href = "productForm.html";
}