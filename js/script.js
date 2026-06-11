/* =====================================
   STEPHANIE XV AÑOS 2026
===================================== */

/* ==========================
   PARTICULAS MAGICAS
========================== */

const particlesContainer =
document.getElementById("particles");

function createParticle() {

    if (!particlesContainer) return;

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.top =
    "110%";

    const size =
    Math.random() * 4 + 2;

    particle.style.width =
    size + "px";

    particle.style.height =
    size + "px";

    particle.style.animation =
    `floatParticle ${Math.random()*8+8}s linear`;

    particlesContainer.appendChild(
    particle
    );

    setTimeout(() => {

        particle.remove();

    }, 16000);
}

setInterval(createParticle, 250);

/* ==========================
   KEYFRAME DINAMICO
========================== */

const style =
document.createElement("style");

style.innerHTML = `
@keyframes floatParticle{

0%{
transform:translateY(0);
opacity:0;
}

20%{
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}

}
`;

document.head.appendChild(style);

/* ==========================
   CUENTA REGRESIVA
========================== */

const targetDate =
new Date(
"July 18, 2026 19:00:00"
).getTime();

function updateCountdown(){

const now =
new Date().getTime();

const distance =
targetDate - now;

if(distance <= 0){

document.getElementById("days").innerText="00";
document.getElementById("hours").innerText="00";
document.getElementById("minutes").innerText="00";
document.getElementById("seconds").innerText="00";

return;

}

const days =
Math.floor(
distance /
(1000*60*60*24)
);

const hours =
Math.floor(
(distance %
(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(distance %
(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(distance %
(1000*60))
/
1000
);

document.getElementById("days").innerText=days;
document.getElementById("hours").innerText=hours;
document.getElementById("minutes").innerText=minutes;
document.getElementById("seconds").innerText=seconds;

}

updateCountdown();

setInterval(
updateCountdown,
1000
);

/* ==========================
   BOTON COMENZAR
========================== */

const startJourney =
document.getElementById(
"startJourney"
);

if(startJourney){

startJourney.addEventListener(
"click",
()=>{

document
.getElementById("shoe-scene")
.scrollIntoView({
behavior:"smooth"
});

playBell();

}
);

}

/* ==========================
   SONIDO CAMPANA
========================== */

function playBell(){

const bell =
new Audio(
"audio/bells.mp3"
);

bell.volume = 0.5;

bell.play()
.catch(()=>{});

}

/* ==========================
   ZAPATO MAGICO
========================== */

const slipper =
document.querySelector(
".glass-slipper"
);

if(slipper){

slipper.addEventListener(
"click",
()=>{

magicExplosion();

setTimeout(()=>{

document
.getElementById("castle-scene")
.scrollIntoView({
behavior:"smooth"
});

},900);

}
);

}

/* ==========================
   EXPLOSION MAGICA
========================== */

function magicExplosion(){

for(let i=0;i<70;i++){

const spark =
document.createElement("div");

spark.style.position="fixed";

spark.style.left=
(window.innerWidth/2)+"px";

spark.style.top=
(window.innerHeight/2)+"px";

spark.style.width="8px";
spark.style.height="8px";

spark.style.background="#9fdcff";

spark.style.borderRadius="50%";

spark.style.pointerEvents="none";

spark.style.zIndex="99999";

spark.style.boxShadow=
"0 0 15px white";

document.body.appendChild(
spark
);

const angle =
Math.random()*360;

const distance =
Math.random()*250;

const x =
Math.cos(angle)
* distance;

const y =
Math.sin(angle)
* distance;

spark.animate(

[
{
transform:"translate(0,0)",
opacity:1
},
{
transform:
`translate(${x}px,${y}px)`,
opacity:0
}
],

{
duration:1500,
easing:"ease-out"
}

);

setTimeout(()=>{
spark.remove();
},1500);

}

}

/* ==========================
   REVELAR SECCIONES
========================== */

const sections =
document.querySelectorAll(
".scene"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

},

{
threshold:.15
}

);

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform=
"translateY(80px)";

section.style.transition=
"all 1.2s ease";

observer.observe(section);

});

/* ==========================
   MUSICA
========================== */

const music =
document.getElementById(
"bgMusic"
);

function startMusic(){

if(!music) return;

music.play()
.catch(()=>{});

}

document.addEventListener(
"click",
startMusic,
{
once:true
}
);

/* ==========================
   BRILLO CURSOR
========================== */

if(window.innerWidth > 768){

const glow =
document.createElement("div");

glow.style.position="fixed";

glow.style.width="25px";
glow.style.height="25px";

glow.style.borderRadius="50%";

glow.style.background=
"rgba(180,220,255,.35)";

glow.style.filter=
"blur(12px)";

glow.style.pointerEvents=
"none";

glow.style.zIndex=
"999999";

document.body.appendChild(
glow
);

document.addEventListener(
"mousemove",
e=>{

glow.style.left=
e.clientX-12+"px";

glow.style.top=
e.clientY-12+"px";

}
);

}

/* ==========================
   FUEGOS ARTIFICIALES
========================== */

function firework(){

const centerX =
Math.random() *
window.innerWidth;

const centerY =
Math.random() *
(window.innerHeight/2);

for(let i=0;i<35;i++){

const p =
document.createElement("div");

p.style.position="fixed";

p.style.left=
centerX+"px";

p.style.top=
centerY+"px";

p.style.width="5px";
p.style.height="5px";

p.style.background=
"#9fdcff";

p.style.borderRadius=
"50%";

p.style.zIndex=
"99999";

document.body.appendChild(p);

const angle =
Math.random()*360;

const distance =
Math.random()*180;

const x =
Math.cos(angle)
* distance;

const y =
Math.sin(angle)
* distance;

p.animate(

[
{
transform:"translate(0,0)",
opacity:1
},
{
transform:
`translate(${x}px,${y}px)`,
opacity:0
}
],

{
duration:1500
}

);

setTimeout(()=>{
p.remove();
},1500);

}

}

const finalSection =
document.getElementById(
"final"
);

let fireworksStarted =
false;

const finalObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting &&
!fireworksStarted
){

fireworksStarted = true;

setInterval(
firework,
1800
);

}

});

}

);

if(finalSection){

finalObserver.observe(
finalSection
);

}
