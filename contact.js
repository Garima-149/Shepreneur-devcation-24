const faqQuestion=document.querySelectorAll(".faq-question");

faqQuestion.forEach((faq)=>{
     faq.addEventListener("click",()=>{
        faq.nextElementSibling.classList.toggle("active");

        const open=document.querySelector(".open");
        const close=document.querySelector(".close");
        
        if(faq.nextElementSibling.classList.contains("active")) {
            open.classList.remove("active");
            close.classList.add("active");
        } else {
            open.classList.add("active");
            close.classList.remove("active");
        }
     });
});
    
const clickBar=document.querySelector(".mobile-btn");
const navHeader=document.querySelector(".header");
clickBar.addEventListener("click",()=>{
    navHeader.classList.toggle("active");
})

let mobileBtn = document.getElementById("mobile-btn");
let head = document.getElementById("head");
let box = document.getElementById("box");
mobileBtn.onclick = function(){
    head.innerHTML="";
    head.style.background="none";
    if(box)
    box.parentNode.removeChild(box);
}
