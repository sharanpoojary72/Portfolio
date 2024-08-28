let lightmode = localStorage.getItem('lightmode');

const themeSwitch = document.getElementById('theme-switch');

let videoprop = document.querySelector("#background-video");
let aboutimg = document.querySelector('.aboutimg');

const enableLightMode =() => {
    document.body.classList.add('lightmode');
    localStorage.setItem('lightmode','active');
    videoprop.style.filter =" invert(0%) var(--video-color-hue) saturate(5) opacity(0.4)";
    document.body.style.transition = "all 0.4s ease-in-out";
    aboutimg.style.backgroundImage = "url(./images/aboutblack.png)";
}
const disableLightMode =() => {
    document.body.classList.remove('lightmode');
    localStorage.setItem('lightmode',null);
    videoprop.style.filter =" invert(100%) var(--video-color-hue) saturate(5) opacity(0.4)";
    document.body.style.transition = "all 0.4s ease-in-out";
    aboutimg.style.backgroundImage = "url(./images/aboutwhite.png)";

}

if(lightmode === 'active') enableLightMode();

themeSwitch.addEventListener('click',()=>{
    lightmode = localStorage.getItem('lightmode');
    lightmode !="active" ? enableLightMode(): disableLightMode();
})


//Checks and applies the mode to video
if(lightmode === 'active'){
    videoprop.style.filter =" invert(0%) var(--video-color-hue) saturate(5) opacity(0.4)";
    
}
else{
    videoprop.style.filter =" invert(100%) var(--video-color-hue) saturate(5) opacity(0.4)";
}