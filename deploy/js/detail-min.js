!function(){"use strict";let e=[{title:"Rise Experimental Publication",description:"this is a banger",images:["./projects/rise/box-img.jpg","./projects/rise/book-img.jpg"]},{title:"Cows",description:"Ut id dui sed sapien sagittis commodo. Ut semper facilisis arcu eu pretium. Vivamus sit amet pharetra erat. Curabitur a sem sed dui accumsan tincidunt. Aliquam felis mi, eleifend at urna vel, laoreet malesuada risus. Morbi pellentesque fringilla purus eu rutrum. Nullam convallis aliquam risus. Donec ex augue, semper et felis vel, tempor posuere erat.",images:["./projects/cows/cow-1.jpg","./projects/cows/cow-2.jpg"]},{title:"Zoo Animals",description:"Duis ultricies feugiat erat eget tempor. Vestibulum bibendum est eu posuere suscipit. Pellentesque tincidunt sapien vitae elit vulputate vestibulum. Proin vel molestie ex. Ut vehicula nibh eu laoreet commodo. Aenean volutpat, nibh in faucibus semper, ipsum est feugiat ex, in volutpat sapien lacus ac massa. Vivamus vel nisi et sapien ullamcorper luctus sit amet sed magna. Sed porttitor sem id eros rhoncus aliquam. Phasellus dapibus, purus a consequat venenatis, nunc diam aliquam tellus, eget congue ante risus a augue. Morbi ut massa ut turpis consequat tincidunt.",images:["./projects/zoo/zoo-1.jpg","./projects/zoo/zoo-2.jpg"]},{title:"Hamsters",description:"I love me some good hamsters yes I do",images:["./projects/hamsters/hamster1.jpg","./projects/hamsters/hamster2.jpg","./projects/hamsters/hamster3.jpg"]},{title:"Hamsters",description:"I love FALKSEme some good hamsters yes I do",images:["./projects/hamsters/hamster2.jpg","./projects/hamsters/hamster1.jpg","./projects/hamsters/hamster3.jpg"]}];window.addEventListener("load",(function(){console.log(e[localStorage.getItem("indexValue")].images[1]),document.querySelector("#detail h1").innerHTML=e[localStorage.getItem("indexValue")].title,document.querySelector("#detail p").innerHTML=e[localStorage.getItem("indexValue")].description,console.log("testinginging");let t=this.document.querySelectorAll(".detail-imgs");t.forEach(((s,i)=>{t[i].style.backgroundImage="url("+e[localStorage.getItem("indexValue")].images[i]+")"}))})),document.querySelector("button").addEventListener("click",(()=>{location.href="index.html",console.log("back button clicked")}))}();