import { gsap } from "gsap";

const mainTL = new gsap.timeline();

// window.addEventListener('load', menuListener);
window.addEventListener('click', imageRoll);



//'visibility: hidden' causes screen to open again
// these functions work when 'visibility: hidden' is not in _header.scss

gsap.set("#section-images",{alpha:0});
gsap.set("#section-images li",{alpha:0,x:"+=20"});

// function menuListener(){

// }

function imageRoll(){
    
    mainTL.to("#section-images",{alpha:1});
    mainTL.to("#section-images li",{alpha:1,stagger:.2,duration:1,ease:"power3.out",x:0});
}