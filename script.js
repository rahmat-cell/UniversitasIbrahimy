function toggleDarkTheme(){
    if(localStorage.getItem('theme') === 'dark'){
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove("dark");
    }else{
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add("dark")
    }
}
document.querySelector('#toggle').addEventListener('click', toggleDarkTheme);
if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark")
}

//navbar-fixed
window.onscroll = function(){
    const nav = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if(window.pageYOffset > fixedNav){
        nav.classList.add('navbar-fixed')
    }else{
        nav.classList.remove('navbar-fixed')
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
});