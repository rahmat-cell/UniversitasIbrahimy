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

document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name		= document.getElementById("name").value;
    var email 		= document.getElementById("email").value;
    var message 	= document.getElementById("message").value;
    let contact 	= '+6285147194415';

    var encodedMessage = encodeURIComponent(
        "Nama Depan	: " + name + "\n" +
        "Email		: " + email + "\n" +
        "Pesan		: " + message
    );

    var link;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        link = `whatsapp://send?phone=${contact}&text=${encodedMessage}`;
    } else {
        link = `https://api.whatsapp.com/send?phone=${contact}&text=${encodedMessage}`;
    }

    window.open(link, '_blank');
});