
document.getElementById('color-switch').addEventListener('click', function() {
    const themeColorContainer = document.querySelector('.theme-color-container');
    
    themeColorContainer.classList.toggle('active');
});


let themeButtons = document.querySelectorAll('.theme-buttons')
let savedThemeColor  = localStorage.getItem('themeColor');
if(savedThemeColor ){
    document.querySelector(':root').style.setProperty('--bg-theme-color',savedThemeColor );
}

themeButtons.forEach(color=>{
    color.addEventListener('click',()=>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--bg-theme-color',dataColor);
        localStorage.setItem('themeColor',dataColor);
    })
})

// if(lightmode === 'active'){

// }