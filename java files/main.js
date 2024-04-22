let check = document.getElementById("check");
let ul = document.getElementById("nav");
console.log(ul);
check.addEventListener('change', function(){
    if (this.checked) {
        ul.style.display = `inline`;

    }
    else {
        ul.style.display = `none`;

    }
});


let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let CurrentTime = new Date();
    hrs.innerHTML = (CurrentTime.getHours() < 10 ? "0" : "") + CurrentTime.getHours();
    min.innerHTML = (CurrentTime.getMinutes() < 10 ? "0" : "") + CurrentTime.getMinutes();
    sec.innerHTML = (CurrentTime.getSeconds() < 10 ? "0" : "") + CurrentTime.getSeconds();
}, 1000);
// -----------cards------------
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll(".img"),
    buttons = document.querySelectorAll(".button");

let imageIndex = 1,
    intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
    // Start the slideshow by calling slideImage() every 2 seconds
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);

};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
    // Calculate the updated image index
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 50}%)`;

};

//a function that uptade the carousel display to show the next or prev
const uptadeClick = (e) => {
    //stop the outo maticslide show
    clearInterval(intervalId);
    //calculate the uptade image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
};
//add event listener to the navagation btns
buttons.forEach((buttons) => buttons.addEventListener("click",uptadeClick))
//add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", ()=> clearInterval(intervalId));

//add mouseleave event listener to wrapper element to start auto sliding
wrapper.addEventListener("mouseleave", autoSlide);

// --------login---------
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var progress = document.getElementById("progress");

next1.onclick = function () {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
};
back1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "120px";

}
next2.onclick = function () {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";

}
back2.onclick = function () {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "240px";

};

const myTextara = document.getElementById("my-textarea");
const remaningcharText = document.getElementById("my-text-reamanig-char");
const max_char = 250;

myTextara.addEventListener('input', () => {
    const reamanig = max_char - myTextara.value.length;
    const color = reamanig < max_char * 0.1 ? 'red' : null;
    
    remaningcharText.textContent = `${reamanig} characters remaning`;
    remaningcharText.style.color = color;
});