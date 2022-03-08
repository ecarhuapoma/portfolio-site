import { gsap } from "gsap";
import { projects } from "./projects"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

// import { circleAni } from "./circleAnim";

const mainTL = new gsap.timeline();

// window.addEventListener('load', function() {

//     let mainImgArray = document.querySelectorAll('#gallery li');

//     mainImgArray.forEach((heroImg, i) => { 
//     heroImg.style.backgroundImage = "url(" + projects[i].images[0] + ")";
//     });

//     let heroLinks = document.querySelectorAll("#gallery a");

//     heroLinks.forEach((link, i) => {
//         link.addEventListener("click",()=>{
//             localStorage.setItem("indexValue", i);
//             link.href = "detail.html?=" + projects[i].title;
//         });
//     });

// });


window.addEventListener('load', function() {

    // console.log(projects[0].title);

    // populate the hero images
    let heroImgArray = document.querySelectorAll('#gallery li');
    // iterate over the heroImgArray and populate the background images
    heroImgArray.forEach((heroImg, i) => {

        // first pass in the array
        // heroImg.style.backgroundImage = "url(./img/projects/turtles/turtle-1.jpg)";

        heroImg.style.backgroundImage = "url(" + projects[i].images[0] + ")";
    });

    let heroLinks = document.querySelectorAll("#gallery a");

    heroLinks.forEach((link, i) => {
        // console.log("hello");

        link.addEventListener("click", () =>{
            
            localStorage.setItem("indexValue", i);
            link.href = "detail.html?=" + projects[i].title;
        });
    });
})



// let navButtons = document.querySelectorAll(".nav-btns");

// for (const button of navButtons){
//     button.addEventListener("click", checkScrolling);
//     button.addEventListener("click", openCloseMenu);
// }

// function checkScrolling(e) {
    
//     const indexValue = [].indexOf.call(navButtons, e.target)
//     if (indexValue != -1) {
//         scrollPage(indexValue);
//     }
// }






// window.addEventListener('load', menuListener);
window.addEventListener('click', imageRoll);
// mainTL.set(".linedown",{drawSVG:"0%"});
mainTL.set(".linedown",{autoAlpha:0});
// }

function imageRoll(){

    // const rollIn = new gsap.timeline({paused:true});
    // mainTL.set(".linedown",{autoAlpha:1});
    mainTL.to(".linedown",{ drawSVG:"100%",duration:1,ease:"power3.inOut"});
    

    // rollIn.to("#section-images",{alpha:0});
    // rollIn.to("image-flex",{alpha:1,stagger:.2,duration:1,ease:"power3.out",x:0});
    // console.log("fjuck");
}
