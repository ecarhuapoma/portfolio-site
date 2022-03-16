import { gsap } from "gsap";
import { projects } from "./projects"
import { brandProjects } from "./brandProjects";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import { naviOpen, naviClose } from "./naviAnim";
import { naviTL } from "./naviAnim";
import { settingBranding, importingBranding } from "./brandingDetails";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".PATHCLASS",{alpha:0});
gsap.set(".stagger-btns",{alpha:0});



// gsap.set("#projects header",{autoAlpha:0});
// gsap.set("#gallery",{autoAlpha:0})

// window.addEventListener('click', function(){
//     let changeTL = new gsap.timeline();

//     changeTL.to("#projects header",{autoAlpha:1});
//     changeTL.to("#gallery",{autoAlpha:1,duration:2});
// })

//IJADOWIJDWAKLD
// var projectButton = document.querySelectorAll(".sectionOpener");
// projectButton.addEventListener('click')


// window.addEventListener('click',naviOpen);

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

window.addEventListener('load', settingBranding);
window.addEventListener('load', importingBranding);

window.addEventListener('load', function(){

        // console.log(projects[0].title);
    
        // populate the hero images
        let heroImgArray1 = document.querySelectorAll('#brandingGallery li');
        // iterate over the heroImgArray and populate the background images
        heroImgArray1.forEach((heroImg1, i) => {
    
            // first pass in the array
            // heroImg.style.backgroundImage = "url(./img/projects/turtles/turtle-1.jpg)";
    
            heroImg1.style.backgroundImage = "url(" + brandProjects[i].images[0] + ")";
        });
    
        let heroLinks1 = document.querySelectorAll("#brandingGallery a");
    
        heroLinks1.forEach((link1, i) => {
            // console.log("hello");
    
            link1.addEventListener("click", () =>{
                console.log("clicked");
                localStorage.setItem("indexValue", i);
                link1.href = "detail.html?=" + brandProjects[i].title;
            });
        });
});





let canISeeMenu = false;
var headerButton = document.querySelector(".nameCircle");
headerButton.addEventListener('click', openCloseMenu);

function openCloseMenu(){
    if(canISeeMenu === false){
        naviTL.play();
        canISeeMenu = true;
    }
    else{
        naviTL.reverse();
        canISeeMenu = false;
    }
}
//