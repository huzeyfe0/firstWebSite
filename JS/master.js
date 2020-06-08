// toggle spin calss

document.querySelector(".toggle-setting .fa-cog").onclick=function(){
//inorder to rotate
this.classList.toggle("fa-spin");
//toggle calss open on main setting
document.querySelector(".setting-box").classList.toggle("open");

};



// switch colors
const colorsli=document.querySelectorAll(".colors-list li");
colorsli.forEach(li => {
   li.addEventListener("click",(e)=>{
        // loop on list item
        // console.log(e.target.dataset.color);

       // set color
       document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
});






// select the landing page
let landingPage = document.querySelector(".landing-page");
// get array of images
let imgsArray = [ "03.jpg", "06.jpg","07.jpg","08.jpg","09.jpg"];

// change img url backgorund



   setInterval( ()=> {
        //set random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        // console.log(randomNumber);
        landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber]+'")';
    },10000);


