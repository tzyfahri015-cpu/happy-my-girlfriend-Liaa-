/* ========================================= */
/* Happy My Girlfriend Liaa */
/* SCRIPT.JS - PART 3A */
/* ========================================= */

const loading = document.getElementById("loading");
const typing = document.getElementById("typing");

const music = document.getElementById("bgm");
const musicBtn = document.getElementById("musicBtn");

const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterBox = document.getElementById("letterBox");

/* ========================================= */
/* Loading */
/* ========================================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},800);

},1800);

});

/* ========================================= */
/* Typing */
/* ========================================= */

const text="Happy My Girlfriend Liaa 💐🤍";

let index=0;

function typeEffect(){

if(index<text.length){

typing.inner

  /* ========================================= */
/* SCRIPT.JS - PART 3B */
/* ========================================= */

const flowers=document.querySelector(".flowers");
const hearts=document.querySelector(".hearts");
const shooting=document.querySelector(".shooting-stars");

/* ========================================= */
/* Sakura Flowers */
/* ========================================= */

function createFlower(){

const flower=document.createElement("span");

flower.innerHTML="🌸";

flower.style.left=Math.random()*100+"%";

flower.style.fontSize=(16+Math.random()*18)+"px";

flower.style.animationDuration=(8+Math.random()*8)+"s";

flowers.appendChild(flower);

setTimeout(()=>{

flower.remove();

},16000);

}

setInterval(createFlower,500);

/* ========================================= */
/* Hearts */
/* ========================================= */

function createHeart(){

const heart=document.createElement("span");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize

  /* ========================================= */
/* SCRIPT.JS - PART 3C */
/* ========================================= */

/* Fade saat membuka surat */

openLetter.addEventListener("click",()=>{

letterBox.style.opacity="0";

setTimeout(()=>{

letterBox.style.opacity="1";

},50);

});

/* Musik otomatis saat membuka surat */

openLetter.addEventListener("click",()=>{

if(!playing){

music.play().catch(()=>{});

playing=true;

musicBtn.innerHTML="⏸ Pause Music";

}

});

/* Efek klik tombol */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.95)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="scale(1)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

/* Parallax Bulan */

document.addEventListener("mousemove",(e)=>{

const moon=document.querySelector(".moon");

const x=(window.innerWidth/2-e.clientX)/80;

const y=(window.innerHeight/2-e.clientY)/80;

moon.style.transform=`translate(${x}px,${y}px)`;

});

/* Bintang Tambahan */

const stars=document.querySelector(".stars");

for(let i=0;i<30;i++){

const dot=document.createElement("div");

dot.style.position="absolute";

dot.style.width="2px";

dot.style.height="2px";

dot.style.borderRadius="50%";

dot.style
