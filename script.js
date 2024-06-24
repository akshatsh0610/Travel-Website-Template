const searchIcon=document.querySelector('.search-icon');
const searchBox=document.querySelector('.search-box');
const crossIcon=document.querySelector('.cross-icon');
var tl1=gsap.timeline();
var tl2=gsap.timeline();
searchIcon.addEventListener('click',()=>{
    event.preventDefault();
    tl1.to(searchIcon,{
        duration:0.8,
        opacity:0,
        rotation:360,
        ease:"power2.out",
    })
    tl1.to(searchBox,{
        opacity:1,
        duration:0.3,
        ease:"power2.out",
        onComplete:()=>{
            searchBox.classList.toggle('active');
        }
    })
    tl1.to(crossIcon,{
        duration:0.8,
        opacity:1,
        rotation:-360,
        ease:"power2.out"
    })
})
crossIcon.addEventListener('click',()=>{
    event.preventDefault();
    tl2.to(crossIcon,{
        duration:0.8,
        rotation:360,
        opacity:0,
        ease:"power2.out",
    })
    tl2.to(searchBox,{
        opacity:0,
        duration:0.3,
        ease:"power2.out",
        onComplete:()=>{
            searchBox.classList.toggle('active');
        }
    })
    tl2.to(searchIcon,{
        duration:0.8,
        opacity:1,
        rotation:-360,
        ease: "power2.out",
    })
})