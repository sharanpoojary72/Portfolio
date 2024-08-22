
document.getElementById('color-switch').addEventListener('click', function() {
    const themeColorContainer = document.querySelector('.theme-color-container');
    
    themeColorContainer.classList.toggle('active');
});


let themeButtons = document.querySelectorAll('.theme-buttons')
let savedThemeColor  = localStorage.getItem('themeColor');
if(savedThemeColor ){
    document.querySelector(':root').style.setProperty('--bg-theme-color',savedThemeColor );
    document.querySelector(':root').style.setProperty('--prf-img-ring-blur',`0px 0px 25px ${savedThemeColor}, 0px 0px 15px ${savedThemeColor} inset`);

    if (lightmode === 'active') {
        switch (savedThemeColor) {
            case 'rgb(0, 94, 255)':
                document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(0deg)');
                break;
            case 'rgb(255, 0, 0)':
                document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(140deg)');
                break;
            case 'rgb(128, 0, 255)':
                document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(50deg)');
                break;
            case 'rgb(0, 179, 21)':
                document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(260deg)');
                break;
            case 'rgb(255, 132, 0)':
                document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(180deg)');
                break;

            default:
                break;
        }

    } else if(lightmode!=='active'){
        switch (savedThemeColor) {
            case 'rgb(0, 94, 255)':
                document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(160deg)');
                break;
            case 'rgb(255, 0, 0)':
                document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(310deg)');
                break;
            case 'rgb(128, 0, 255)':
                document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(220deg)');
                break;
            case 'rgb(0, 179, 21)':
                document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(60deg)');
                break;
            case 'rgb(255, 132, 0)':
                document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(0deg)');
                break;

            default:
                break;
        }
    }
}

themeButtons.forEach(color=>{
    color.addEventListener('click',()=>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(':root').style.setProperty('--bg-theme-color',dataColor);
        localStorage.setItem('themeColor',dataColor);
        document.querySelector(':root').style.setProperty('--prf-img-ring-blur',`0px 0px 25px ${dataColor}, 0px 0px 15px ${dataColor} inset`);


        if (lightmode === 'active') {
            switch (dataColor) {
                case 'rgb(0, 94, 255)':
                    document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(0deg)');
                    break;
                case 'rgb(255, 0, 0)':
                    document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(140deg)');
                    break;
                case 'rgb(128, 0, 255)':
                    document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(50deg)');
                    break;
                case 'rgb(0, 179, 21)':
                    document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(260deg)');
                    break;
                case 'rgb(255, 132, 0)':
                    document.querySelector('.lightmode').style.setProperty('--video-color-hue', 'hue-rotate(180deg)');
                    break;

                default:
                    break;
            }

        } else if(lightmode!=='active'){
            switch (dataColor) {
                case 'rgb(0, 94, 255)':
                    document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(160deg)');
                    break;
                case 'rgb(255, 0, 0)':
                    document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(310deg)');
                    break;
                case 'rgb(128, 0, 255)':
                    document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(220deg)');
                    break;
                case 'rgb(0, 179, 21)':
                    document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(60deg)');
                    break;
                case 'rgb(255, 132, 0)':
                    document.querySelector(':root').style.setProperty('--video-color-hue', 'hue-rotate(0deg)');
                    break;

                default:
                    break;
            }
        }
    })
})

// if(lightmode === 'active'){

// }