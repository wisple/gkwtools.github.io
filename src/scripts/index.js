window.onload = function () {
    // Responsive Menu
    const nav = document.getElementById('nav');
    const menu = document.getElementById('menu');

    menu.onclick = function () {
        this.classList.toggle('close');
        nav.classList.toggle('open');
    }

    // Features
    const featureSection = document.getElementById('features');
    const featureBtns = featureSection.querySelectorAll('.list div');
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

    featureBtns[0].classList.add('active');
    featureFrames[0].classList.add('active');
}