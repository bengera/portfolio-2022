const h1 = document.querySelector('h1');
const tagLine = document.querySelector('.hero__tagline');
const cta = document.querySelector('.hero__cta');


window.addEventListener('load', () => {
    console.log('loaded');
    h1.classList.add('show');
    tagLine.classList.add('show');
    cta.classList.add('show');
})


function scrollWork() {
    let workSection = document.querySelector(".work");
    workSection.scrollIntoView(true);

    
}

function scrollAbout() {
    let aboutSection = document.querySelector(".about");
    aboutSection.scrollIntoView(true);

    
}