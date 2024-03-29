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