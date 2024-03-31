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
<<<<<<< HEAD
});
=======
})

let mobileBtn = document.getElementById("mobile-btn");
let startup = document.getElementById("startup");
mobileBtn.onclick = function(){
    head.innerHTML="";
}
>>>>>>> ae099d5b07312146c7cae441c09f938aa2c5531a
