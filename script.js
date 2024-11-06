$(document).ready(function () { // runs when document is loaded/ready
    $("#navbar").slideDown("slow"); // applies slide down animation at slow speed to navbar 
});


$(document).ready(function () {
    // Show the expanded content when the placeholder is clicked
    $('#ph').on('click', function () {
        $('#content').addClass('show');
    });

    // Hide the expanded content when the close button is clicked
    $('#close').on('click', function () {
        $('#content').removeClass('show');
    });
});



function typewriter(text, className) {
    /* 
    Used mattboldt's repo/library, typed.js 
    */

    // Defining constants
    const typer = document.querySelector(className);
    const fonts = ["Arial", "Courier New", "Orbitron", "Fantasy"];

    let i = 0; // will be used as a counter to alternate fonts

    var typed = new Typed(className, {
        strings: [text], // string being typed
        typeSpeed: 60, // typer speed
        backSpeed: 30, // speed of backspace
        loop: true,
        loopCount: 3, // will loop three times

        preStringTyped: () => {  // runs before every type
            if (i < 3) {
                typer.style.color = "#fff";
                typer.style.fontFamily = fonts[i]; // alternating font for the first two iterations       
                i++;
            }
        },

        onComplete: () => { // runs everytime a type is completed
            if (i == 3)
                typer.style.color = "goldenrod"; // changing font color when final iteration is reached
        },

    });
}


$(document).ready(function () {
    // Show the expanded content when the placeholder is clicked
    $('#ph').on('click', function () {
        $('#content').addClass('show'); 
    });

    // Hide the expanded content when the close button is clicked
    $('#close').on('click', function () {
        $('#content').removeClass('show');
    });
});

const currentPage = window.location.pathname; // determining the current page

// passing different arguments to be typed out depending on current page
if (currentPage === "/CyberLearn/" || currentPage.includes("index.html"))
    typewriter("CyberLearn!", ".auto-type");

if (currentPage.includes("phish.html")){
    typewriter("Phishing?", ".auto-type");
    typewriter("Phishing?", ".auto");
}

if (currentPage.includes("threats.html")){
    typewriter("Potential Threats?", ".auto-type");
    typewriter("Potential Threats?", ".auto");
}

if (currentPage.includes("triad.html")){
    typewriter("CIA Triad?", ".auto-type");
    typewriter("CIA Triad?", ".auto");
}

if (currentPage.includes("pw.html")){
    typewriter("Password?", ".auto-type");
    typewriter("Password?", ".auto");
}

if (currentPage.includes("authen.html")){
    typewriter("Authentication?", ".auto-type");
    typewriter("Authentication?", ".auto");
}

if (currentPage.includes("3states.html")){
    typewriter("3 States of Data?", ".auto-type");
    typewriter("3 States of Data?", ".auto");
}


