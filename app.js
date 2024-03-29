const rightBtn=document.querySelector(".right-btn");
rightBtn.addEventListener("click",function(event){
    const conet=document.querySelector(".slide-carousel");
    conet.scrollLeft+=1236;
     event.preventDefault();
});

const leftBtn=document.querySelector(".left-btn");
leftBtn.addEventListener("click",function(event){
    const conet=document.querySelector(".slide-carousel");
    conet.scrollLeft-=1236;
     event.preventDefault();
});

// Hamburger button

const clickBar=document.querySelector(".mobile-btn");
const navHeader=document.querySelector(".header");
clickBar.addEventListener("click",()=>{
    navHeader.classList.toggle("active");
})