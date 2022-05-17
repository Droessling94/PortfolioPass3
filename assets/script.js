
//Navbar Button Event Listeners for content switch//
const aboutBtn = document.querySelector("#aboutBtn")
const contactBtn = document.querySelector("#contactBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const workBtn = document.querySelector("#workBtn")
const projOne = document.querySelector("#projOne")
const leftDisplay =document.querySelector("#leftDisplayContainer")

aboutBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("Hello, My name is Donaldson but I prefer to go by Donnie. For the past ten years I've worked in the service & sales industry. During that time I developed valuable communication and organization skills. I have since left the service and sales industry to pursue a career in the tech industry. I am attending UCF's full time full-stack coding bootcamp to help this transition, and I am excited to see what team I can benefit.");
});

contactBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("links go here");
});

workBtn.addEventListener('click', function(){
    $("#leftDisplayContent").text("Also coming soon");
});
// Event listeners to redirect to project repositories//
projOne.addEventListener('click', function(){
    window.location.href="https://droessling94.github.io/IDunno/";
});