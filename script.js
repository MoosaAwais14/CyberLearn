$(document).ready(function () { // runs when document is loaded/ready
    $("#navbar").slideDown("slow"); // applies slide down animation at slow speed to navbar 
});


function typewriter(text) {
    /* 
    Used mattboldt's repo/library, typed.js 
    */

    // Defining constants
    const typer = document.querySelector(".auto-type");
    const fonts = ["Arial", "Courier New", "Orbitron"];

    let i = 0; // will be used as a counter to alternate fonts

    var typed = new Typed(".auto-type", {
        strings: [text], // string being typed
        typeSpeed: 60, // typer speed
        backSpeed: 30, // speed of backspace
        loop: true,
        loopCount: 3, // will loop three times

        preStringTyped: () => {  //runs before every type
            if (i < 3)
                typer.style.fontFamily = fonts[i]; // alternating font for the first two iterations
            i++;
        },

        onComplete: () => { // runs everytime a type is completed
            if (i >= 3) {
                let t = document.querySelector(".auto-type");
                t.style.color = "goldenrod"; // changing font color when final iteration is reached
            }
        },

    });
}

const currentPage = window.location.pathname; // determing the current page

// passing in different arguments to be typed out depending on current page
if (currentPage.includes("index.html"))
    typewriter("CyberLearn!");

if (currentPage.includes("phish.html"))
    typewriter("Phising?")

if (currentPage.includes("threats.html"))
    typewriter("Potential Threats?")

if (currentPage.includes("triad.html"))
    typewriter("CIA Triad?")

if (currentPage.includes("pw.html"))
    typewriter("Password?")

if (currentPage.includes("authen.html"))
    typewriter("Authentication?")

if (currentPage.includes("3states.html"))
    typewriter("3 States of Data?")