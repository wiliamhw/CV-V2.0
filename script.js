let images = ['./img/background1.jpg',
    './img/background2.jpg',
    './img/background3.jpg',
]

let myBack = document.getElementById('main-title');
let x = 0;
carousel();

function carousel() {
    myBack.style.background = "url(" + images[x] + ")";
    myBack.style.backgroundSize = "cover";
    myBack.style.backgroundPosition = "center center"
    myBack.style.minHeight = "770px";

    x++;
    if (x >= images.length) x = 0;
    setTimeout(carousel, 5000);
}

function dropDown() {
    let x = document.getElementById('myTopnav');
    console.log(x.className);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Scrollspy
(function() {
    'use strict';

    let section = document.querySelectorAll(".section");
    let sections = {};
    let target = '';
    let i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (scrollPosition + 140 >= sections[i]) {
                document.querySelector('.current').setAttribute('class', 'link');
                if (i == "main-title") {
                    target = document.querySelectorAll('a[href*=' + i + ']')[1];
                } else {
                    target = document.querySelector('a[href*=' + i + ']');
                }
                target.setAttribute('class', 'link current');
            }
        }
    };
})();