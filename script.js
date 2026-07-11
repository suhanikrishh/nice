/* =====================================================
   PRIVATE LINK HUB
   NOTE:
   This is only client-side protection.
   The username and password are visible in the JS file.
   For real security, use a backend.
===================================================== */

// ===== CHANGE THESE =====
const USERNAME = "gamer";
const PASSWORD = "iamnotokbutitsfin";

// Show login every time the page opens/refeshes
window.onload = () => {
    sessionStorage.clear();

    document.getElementById("loginScreen").classList.remove("hidden");
    document.getElementById("website").classList.add("hidden");
};

// Login
function login() {

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;

    const error = document.getElementById("error");

    if (user === USERNAME && pass === PASSWORD) {

        sessionStorage.setItem("loggedIn", "true");

        document.getElementById("loginScreen").classList.add("hidden");
        document.getElementById("website").classList.remove("hidden");

        error.textContent = "";

    } else {

        error.textContent = "Invalid username or password.";

        document.getElementById("password").value = "";

    }

}

// Logout
function logout() {

    sessionStorage.clear();

    document.getElementById("website").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

}

// Press Enter to login
document.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {

        login();

    }

});

/* ===========================
   ADD YOUR LINKS HERE
=========================== */

const links = [
    "https://photos.app.goo.gl/iSNUPbktr3rRxjME9",
    "https://photos.app.goo.gl/VBdWM8AWJn1PfADX6",
    "https://photos.app.goo.gl/sqLAevs9Htcpe7NC6",
    "https://photos.app.goo.gl/JLZmdyVPPXc9Uc5b6",
    "#",
    "#",
    "#",
    "#"
];
/* ==========================
      AUTO SLIDESHOW
========================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide,3000);
