import { gsap } from "gsap";
// import { circleAni } from "./circleAnim";

// const mainTL = new gsap.timeline();

// window.addEventListener('load', menuListener);
window.addEventListener('click', imageRoll);


// }

function imageRoll(){

    const rollIn = new gsap.timeline({paused:true});

    rollIn.to("#section-images",{alpha:0});
    rollIn.to("#section-images li",{alpha:1,stagger:.2,duration:1,ease:"power3.out",x:0});
}
