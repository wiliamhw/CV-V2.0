'use strict';

let images = ['./img/background1.jpg',
    './img/background2.jpg',
    './img/background3.jpg',
]

let myBack = document.getElementById('main-title');
let x = 0;
let width = window.innerWidth;

function dropDown() {
    let x = document.getElementById('myTopnav');
    // console.log(x.className);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Carousel
(function carousel() {
    myBack.style.background = "url(" + images[x] + ")";
    myBack.style.backgroundSize = "cover";
    myBack.style.backgroundPosition = "center center"
    myBack.style.minHeight = "770px";

    x++;
    if (x >= images.length) x = 0;
    setTimeout(carousel, 5000);
})();

// Navbar auto-close
(function() {
    let x = document.getElementById('myTopnav');

    // Get click position
    window.onclick = function(e) {
        if (width <= 554) {
            e = e || window.event;
            let target = e.target;
            let text = target.className;
            // console.log(text);

            if (text !== 'fa fa-bars' && x.className === 'topnav responsive') {
                x.className = 'topnav';
            }
        }
    };
})();

// Scrollspy
(function() {

    let section = document.querySelectorAll(".section");
    let sections = {};
    let target = '';
    let i = 0;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });

    // Change width and offsetTop on resize
    (function() {
        window.onresize = function() {
            Array.prototype.forEach.call(section, function(e) {
                sections[e.id] = e.offsetTop;
            });
            width = window.innerWidth;
            // console.log(width);
            // console.log(sections);
        };
    })();
    // console.log(sections);

    window.onscroll = function() {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollPosition + 140);

        for (i in sections) {
            if (scrollPosition + 140 >= sections[i]) {
                // console.log(i, sections[i]);

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