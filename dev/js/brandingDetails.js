import { brandProjects } from "./brandProjects"

export function importingBranding(){
    console.log("this shit workin");
    console.log(brandProjects[localStorage.getItem("indexValue")].images[1]);

    //populate data
    let title1 = document.querySelector("#detail h1");
    title1.innerHTML = brandProjects[localStorage.getItem("indexValue")].title;

    let description1 = document.querySelector("#detail p");
    description1.innerHTML = brandProjects[localStorage.getItem("indexValue")].description;



    let imgDetailsArray1 = this.document.querySelectorAll(".detail-imgs");

    imgDetailsArray1.forEach((image, i) => {
        imgDetailsArray1[i].style.backgroundImage = "url(" + brandProjects[localStorage.getItem("indexValue")].images[i] + ")";
    });

    // let heroImg = document.querySelector("#detail-hero");
    // heroImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[1] + ")";

    // let moreImg = document.querySelector("#moreImg");
    // moreImg.style.backgroundImage = "url(" + projects[localStorage.getItem("indexValue")].images[0] + ")";
    
}

export function settingBranding(){
    {

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
    
        heroLinks1.forEach((link, i) => {
            // console.log("hello");
    
            link.addEventListener("click", () =>{
                console.log("clicked");
                localStorage.setItem("indexValue", i);
                link.href = "detail.html?=" + brandProjects[i].title;
            });
        });
    }
    
}