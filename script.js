var searchBtn=document.querySelector(".search-btn");
var searchInput=document.querySelector(".search-input");
var icon = searchBtn.querySelector('i');
var mobileNav=document.querySelector('.small-screen-nav');
var bars=mobileNav.querySelector('i');
var mobileMenu=document.querySelector('.small-screen-menu');
searchBtn.addEventListener("click",()=>{
    event.preventDefault();
    var windowWidth = window.innerWidth;
    var inputWidth = windowWidth <=992 ? 120 : 180;
    if(icon.classList.contains('fa-magnifying-glass')){
        gsap.to(searchInput,{
            width:inputWidth,
            duration:0.3,
            opacity: 1,
            ease: 'power2.inOut',
            onComplete:()=>{
                icon.classList.remove("fa-magnifying-glass")
                icon.classList.add("fa-xmark");
            }
        })
    }
    else{
        gsap.to(searchInput,{
            width:0,
            duration:0.3,
            opacity: 1,
            ease: 'power2.inOut',
            onComplete:()=>{
                icon.classList.add("fa-magnifying-glass")
                icon.classList.remove("fa-xmark");
            }
        })
    }
})
bars.addEventListener("click",()=>{
    event.preventDefault();
    if(bars.classList.contains('fa-bars')){
        gsap.to(mobileMenu,{
            opacity:1,
            duration:0.3,
            ease: 'power2.inOut',
            onComplete:()=>{
                bars.classList.add("fa-xmark");
                bars.classList.remove("fa-bars");
            }
        })
    }
    else{
        gsap.to(mobileMenu,{
            opacity:1,
            duration:0.3,
            ease: 'power2.inOut',
            onComplete:()=>{
                bars.classList.remove("fa-xmark");
                bars.classList.add("fa-bars");
            }
        })
    }
})