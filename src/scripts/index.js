window.onload = function () {
    const nav = document.getElementById('nav');
    const menu = document.getElementById('menu');

    menu.onclick = function () {
        this.classList.toggle('close');
        nav.classList.toggle('open');
    }
}