/* ===========================================
   HAPPY MY GIRLFRIEND LIAA
   SCRIPT.JS - PART 3A
=========================================== */

// Ambil elemen
const loading = document.getElementById("loading");
const typing = document.getElementById("typing");

const bgm = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterBox = document.getElementById("letterBox");

// Status musik
let playing = false;

/* ===========================================
   LOADING SCREEN
=========================================== */

window.addEventListener("load", function () {

    setTimeout(function () {

        if (loading) {
            loading.style.opacity = "0";

            setTimeout(function () {
                loading.style.display = "none";
            }, 600);
        }

    }, 1800);

});

/* ===========================================
   TYPING EFFECT
=========================================== */

const message = "Happy My Girlfriend Liaa 💐🤍";

let i = 0;

function typeWriter() {

    if (!typing) return;

    if (i < message.length) {

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 90);

    }

}

setTimeout(typeWriter, 2000);

/* ===========================================
   MUSIC BUTTON
=========================================== */

if (musicBtn && bgm) {

    musicBtn.addEventListener("click", function () {

        if (!playing) {

            bgm.play();

            playing = true;

            musicBtn.innerHTML = "⏸ Pause Music";

        } else {

            bgm.pause();

            playing = false;

            musicBtn.innerHTML = "🎵 Play Music";

        }

    });

}

/* ===========================================
   OPEN LETTER
=========================================== */

if (openLetter && letterBox) {

    openLetter.addEventListener("click", function () {

        letterBox.style.display = "flex";

    });

}

/* ===========================================
   CLOSE LETTER
=========================================== */

if (closeLetter && letterBox) {

    closeLetter.addEventListener("click", function () {

        letterBox.style.display = "none";

    });

}

/* ===========================================
   CLOSE IF CLICK OUTSIDE
=========================================== */

if (letterBox) {

    letterBox.addEventListener("click", function (e) {

        if (e.target === letterBox) {

            letterBox.style.display = "none";

        }

    });

    }
/* ===========================================
   SCRIPT.JS - PART 3B
=========================================== */

// Container animasi
const flowers = document.querySelector(".flowers");
const hearts = document.querySelector(".hearts");
const shootingStars = document.querySelector(".shooting-stars");

/* ===========================================
   BUNGA SAKURA
=========================================== */

function createFlower() {

    if (!flowers) return;

    const flower = document.createElement("span");

    flower.innerHTML = "🌸";

    flower.style.left = Math.random() * 100 + "%";

    flower.style.fontSize = (16 + Math.random() * 18) + "px";

    flower.style.animationDuration = (8 + Math.random() * 6) + "s";

    flowers.appendChild(flower);

    setTimeout(function () {
        flower.remove();
    }, 14000);

}

setInterval(createFlower, 500);

/* ===========================================
   HATI MELAYANG
=========================================== */

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() *
      /* ===========================================
   SCRIPT.JS - PART 3C
=========================================== */

/* ===========================================
   MUSIK OTOMATIS SAAT SURAT DIBUKA
=========================================== */

if (openLetter && bgm) {

    openLetter.addEventListener("click", function () {

        if (!playing) {

            bgm.play().catch(() => {});

            playing = true;

            if (musicBtn) {
                musicBtn.innerHTML = "⏸ Pause Music";
            }

        }

    });

}

/* ===========================================
   EFEK KLIK TOMBOL
=========================================== */

document.querySelectorAll("button").forEach(function (btn) {

    btn.addEventListener("mousedown", function () {
        btn.style.transform = "scale(.95)";
    });

    btn.addEventListener("mouseup", function () {
        btn.style.transform = "scale(1)";
    });

    btn.addEventListener("mouseleave", function () {
        btn.style.transform = "scale(1)";
    });

});

/* ===========================================
   PARALLAX BULAN
=========================================== */

const moon = document.querySelector(".moon");

if (moon) {

    document.addEventListener("mousemove", function (e) {

        const x = (window.innerWidth / 2 - e.clientX) / 80;
        const y = (window.innerHeight / 2 - e.clientY) / 80;

        moon.style.transform = `translate(${x}px, ${y}px)`;

    });

}

/* ===========================================
   BINTANG KECIL TAMBAHAN
=========================================== */

const stars = document.querySelector(".stars");

if (stars {
        for (let i = 0; i < 30; i++) {

        const dot = document.createElement("div");

        dot.style.position = "absolute";
        dot.style.width = "2px";
        dot.style.height = "2px";
        dot.style.borderRadius = "50%";
        dot.style.background = "white";

        dot.style.left = Math.random() * 100 + "%";
        dot.style.top = Math.random() * 100 + "%";
        dot.style.opacity = Math.random();

        stars.appendChild(dot);

    }

}

/* ===========================================
   PESAN CONSOLE
=========================================== */

console.log("💐 Happy My Girlfriend Liaa 🤍");
console.log("Made with ❤️ by You");
