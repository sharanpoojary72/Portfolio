window.addEventListener('load', function () {
    const loader = document.getElementById('loader');
    const content = document.querySelector('main');
    const topbtnEl = document.querySelector("#backtotop");



    content.style.display = 'none';
    content.style.opacity = '0';

    setTimeout(() => {

        loader.style.opacity = '0';


        loader.addEventListener('transitionend', function () {

            loader.style.display = 'none';


            content.style.display = 'block';
            setTimeout(() => {
                content.style.opacity = '1';
                topbtnEl.style.display = "none";
            }, 50);
        });
    }, 2000);
});


function showSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active'); // Add the 'active' class
}

function closeSidebar(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active'); // Remove the 'active' class
}


// async function showSidebar(event) {
//     event.preventDefault();  // Prevent default action (e.g., if it's a link)
//     event.stopPropagation(); // Stop event from bubbling up to window

//     const sidebar = document.querySelector('.sidebar');
//     sidebar.style.right = '0px'; // Show the sidebar
//     sidebar.classList.add('active'); // Mark sidebar as active

//     // Add an event listener to close the sidebar when clicking outside of it
//     window.addEventListener('click', closeSidebar);
// }

// async function closeSidebar(event) {
//     const sidebar = document.querySelector('.sidebar');

//     // Check if the sidebar is active and the click occurred outside the sidebar
//     if (sidebar.classList.contains('active') && !sidebar.contains(event.target)) {
//         sidebar.style.right = '-300px'; // Hide the sidebar
//         sidebar.classList.remove('active'); // Remove active state

//         // Remove the event listener after closing the sidebar
//         window.removeEventListener('click', closeSidebar);
//     }
// }

// // Prevent closing the sidebar when clicking inside it
// document.querySelector('.sidebar').addEventListener('click', function(event) {
//     event.stopPropagation(); // Stop the sidebar's click event from closing it
// });

// // Example trigger for showing the sidebar (like a hamburger menu)
// document.getElementById('hamburger').addEventListener('click', showSidebar);


//------------------ TYPING EFFECT--------

const dynamicText = document.querySelector("#multitext span");
// console.log(dynamicText);


const words = ["Full Stack Developer", "3D Artist", "Gamer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingEffect = () => {

    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    // console.log(currentChar, currentWord);

    dynamicText.textContent = currentChar;

    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        //if condition is true, type the next character
        charIndex++;
        setTimeout(typingEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        //if condition is true, remove the previous character
        charIndex--;
        setTimeout(typingEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");

        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typingEffect, 1200);
    }
}

setTimeout(() => { typingEffect(); }, 7000);

//----------------- BACKTOTOP--------------------- 
const topbtnEl = document.querySelector("#backtotop");


window.addEventListener("scroll", function () {
    console.log(this.window.scrollY)
    if (this.window.scrollY > 500) {
        topbtnEl.style.display = "inline-block";
        topbtnEl.style.animation = "slideUpTop 500ms ease-in-out backwards";
    }
    else {
        topbtnEl.style.animation = "slideDownReverse 500ms ease-in-out backwards";
        topbtnEl.style.display = "none";

    }
})

//---------------- SKILL DATA ----------------


let barValue = { html: 90, css: 70, javascript: 50, nodejs: 10, react: 10, angular: 10 };
let skillBarAnim = document.querySelectorAll('.skill-per');

let value = { comm: 55, probsol: 70, creativity: 60, teamwork: 75 };
let scrollTriggered = false;

window.addEventListener('scroll', () => {

    const sectionElement = document.querySelector('.skill');
    const sectionTop = sectionElement.offsetTop;
    const sectionBottom = sectionTop + sectionElement.offsetHeight;
    const currentScrollY = window.scrollY;

    const tolerance = 100;
    const isInView = (currentScrollY >= (sectionTop - tolerance) && currentScrollY <= (sectionBottom + tolerance));


    if (isInView && !scrollTriggered) {
        scrollTriggered = true

        for (let key in barValue) {
            let skillprogress = document.getElementById(key);
            console.log(skillprogress);
            skillprogress.style.width = `${barValue[key]}%`;
            skillprogress.style.animation = 'progress 0.4s ease-in-out forwards';
        }



        for (let key in value) {
            // console.log(`${key}: ${value[key]}`);


            let circularProgress = document.getElementById(key);
            // console.log(circularProgress);

            let progressValue = circularProgress
                .querySelector(".prodata h5:first-child")

            let progressStartValue = 0,
                progressEndValue = value[key],
                speed = 50;

            let progress = setInterval(() => {
                progressStartValue++;

                progressValue.textContent = `${progressStartValue}%`;
                circularProgress.style.background = `conic-gradient(var(--bg-theme-color) ${progressStartValue}%,var(--bg-text-color) 0deg)`;

                if (progressStartValue == progressEndValue) {
                    clearInterval(progress);
                }
            }, speed)

        }
    } else if (!isInView) {
        scrollTriggered = false;
    }
});



// const skillAnimation = document.querySelector('.skill');
// window.addEventListener("scroll",()=>{
//     console.log(this.window.scrollY);
//     if(this.window.scrollY>1566 && this.window.scrollY<1800){
//         progress()
//     }
// })
