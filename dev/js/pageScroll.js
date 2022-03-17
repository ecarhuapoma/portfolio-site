import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#projects","#about-section","#motion-section"];

export function scrollPage(index){
    gsap.to(window, {duration: 1, scrollTo:idArray[index]});
    console.log("fciuj");
}