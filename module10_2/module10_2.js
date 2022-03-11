butt.onclick = function () {

    const userDisplayWidth = window.screen.width;
    const userDisplayHeight = window.screen.height;
    const userBrowserWidth = window.innerWidth;
    const userBrowserHeight = window.innerHeight;
    const UserWindowWidth = document.documentElement.clientWidth;
    const UserWindowHeight = document.documentElement.clientHeight;

    alert(`
    Ширина монитора - ${userDisplayWidth} px
    Высота монитора -${userDisplayHeight} px
    Ширина браузера - ${userBrowserWidth} px
    Высота браузера - ${userBrowserHeight} px
    Ширина поля просмотра - ${UserWindowWidth} px
    Высота поля просмотра - ${UserWindowHeight} px`);
}