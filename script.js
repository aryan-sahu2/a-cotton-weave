var img= document.querySelector("#img")

img.addEventListener("mousemove",function(details){
    gsap.to("#add-bag-cursor",{
        left: (details.clientX-60)+ "px",
        top: (details.clientY-60)+"px",
        ease: "bounce.out",
        duration:0.01
    });
});