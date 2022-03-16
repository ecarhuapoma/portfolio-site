import { projects } from "./projects"
// import { brandProjects } from "./brandProjects"



// import { importingBranding } from "./brandingDetails"

// window.addEventListener('load', importingBranding);


//

window.addEventListener('load', function() {

        console.log(projects[localStorage.getItem("indexValue")].images[1]);

        //populate data
        let title = document.querySelector("#detail h1");
        title.innerHTML = projects[localStorage.getItem("indexValue")].title;

        let description = document.querySelector("#detail p");
        description.innerHTML = projects[localStorage.getItem("indexValue")].description;

        console.log("testinginging");

        let imgDetailsArray = this.document.querySelectorAll(".detail-imgs");

        imgDetailsArray.forEach((image, i) => {
            imgDetailsArray[i].style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[i] + ")";
        });

        // let heroImg = document.querySelector("#detail-hero");
        // heroImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[1] + ")";

        // let moreImg = document.querySelector("#moreImg");
        // moreImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[0] + ")";
        
});

// window.addEventListener('load', function() {

//     console.log(brandProjects[localStorage.getItem("indexValue")].images[1]);
//     console.log("yo")
//     //populate data
//     let title1 = document.querySelector("#brand-detail h1");
//     title1.innerHTML = brandProjects[localStorage.getItem("indexValue")].title;

//     let description1 = document.querySelector("#brand-detail p");
//     description1.innerHTML = brandProjects[localStorage.getItem("indexValue")].description;


// console.log("brand image details imported");
//     let imgDetailsArray1 = this.document.querySelectorAll(".brand-detail-imgs");

//     imgDetailsArray1.forEach((image, i) => {
//         imgDetailsArray1[i].style.backgroundImage = "url(" + brandProjects[localStorage.getItem("indexValue")].images[i] + ")";
//     });

//     // let heroImg = document.querySelector("#detail-hero");
//     // heroImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[1] + ")";

//     // let moreImg = document.querySelector("#moreImg");
//     // moreImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[0] + ")";
    
// });



// Back Button

var backBtn = document.querySelector("button");
backBtn.addEventListener("click", ()=>{
    location.href = "index.html";
    console.log("back button clicked")
})