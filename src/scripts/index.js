// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js');
}

// Responsive Menu
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');

let smoothtries = 0;
let timeout = null;
function setSmoothScroll () {
    if (SmoothScroll in window) {
        new window.SmoothScroll('a[href*="#"]', {
            speed: 500,
            speedAsDuration: true,
        });
    } else {
        if (smoothtries < 3) {
            smoothtries = smoothtries + 1;
            setTimeout(function () {
                setSmoothScroll();
            }, 1000)
        } else {
            clearTimeout(timeout);
        }
    }
}

menu.onclick = function () {
    this.classList.toggle('close');
    nav.classList.toggle('open');
}

// Features
const featureSection = document.getElementById('vantagens');
const featureBtns = featureSection.querySelectorAll('.list > .btn');
const featureMobileNext = featureSection.querySelector('.list > .after');
const featureMobilePrevious = featureSection.querySelector('.list > .before');
const featureFrames = featureSection.querySelectorAll('.content div');

featureBtns.forEach((btn) => {
    btn.onclick = function () {
        featureBtns.forEach((otherBtns) => {
            otherBtns.classList.remove('active');
        });

        this.classList.add('active');

        featureFrames.forEach((frame) => {
            if (frame.dataset.frame === this.dataset.select) {
                frame.classList.add('active')
            } else {
                frame.classList.remove('active')
            }
        });
    }
});

featureMobileNext.addEventListener('click', function () {
    let activeButton = null;

    featureBtns.forEach((button, idx) => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            activeButton = idx + 1;

            if (activeButton === featureBtns.length) {
                activeButton = 0
            }
        } 
    });

    featureFrames.forEach((frame) => {
        frame.classList.remove('active');
    })

    featureBtns[activeButton].classList.add('active');
    featureFrames[activeButton].classList.add('active');
});

featureMobilePrevious.addEventListener('click', function () {
    let activeButton = null;

    featureBtns.forEach((button, idx) => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            activeButton = idx - 1;

            if (activeButton === -1) {
                activeButton = featureBtns.length - 1;
            }
        } 
    });

    featureFrames.forEach((frame) => {
        frame.classList.remove('active');
    });

    featureBtns[activeButton].classList.add('active');
    featureFrames[activeButton].classList.add('active');
});


featureBtns[0].classList.add('active');
featureFrames[0].classList.add('active');