/* =====================================
STEPHANIE XV AÑOS
SCRIPT PRINCIPAL
===================================== */

/* PARTICULAS MAGICAS */

const particlesContainer = document.getElementById("particles");

function createParticle() {

```
const particle = document.createElement("div");

particle.classList.add("particle");

particle.style.left = Math.random() * 100 + "%";

particle.style.animationDuration =
    (Math.random() * 8 + 6) + "s";

particle.style.opacity =
    Math.random();

particle.style.width =
    Math.random() * 4 + 2 + "px";

particle.style.height =
    particle.style.width;

particlesContainer.appendChild(particle);

setTimeout(() => {

    particle.remove();

}, 14000);
```

}

setInterval(createParticle, 250);

/* =====================================
CUENTA REGRESIVA
===================================== */

const targetDate = new Date(
"July 18, 2026 19:00:00"
).getTime();

function updateCountdown() {

```
const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
);

const minutes = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
);

const seconds = Math.floor(
    (distance % (1000 * 60))
    / 1000
);

document.getElementById("days").textContent =
    days < 0 ? 0 : days;

document.getElementById("hours").textContent =
    hours < 0 ? 0 : hours;

document.getElementById("minutes").textContent =
    minutes < 0 ? 0 : minutes;

document.getElementById("seconds").textContent =
    seconds < 0 ? 0 : seconds;
```

}

updateCountdown();

setInterval(updateCountdown, 1000);

/* =====================================
BOTON COMENZAR
===================================== */

const startBtn =
document.getElementById("startJourney");

if(startBtn){

startBtn.addEventListener(
"click",
() => {

document
.getElementById("shoe-scene")
.scrollIntoView({
behavior:"smooth"
});

}
);

}

/* =====================================
ZAPATO MAGICO
===================================== */

const slipper =
document.querySelector(
".glass-slipper"
);

if(slipper){

slipper.addEventListener(
"click",
() => {

createMagicExplosion();

setTimeout(()=>{

document
.getElementById("castle-scene")
.scrollIntoView({
behavior:"smooth"
});

},600);

}
);

}

/* =====================================
EXPLOSION MAGICA
===================================== */

function createMagicExplosion(){

for(let i=0;i<60;i++){

const spark =
document.createElement("div");

spark.style.position =
"fixed";

spark.style.left =
(window.innerWidth/2)+"px";

spark.style.top =
(window.innerHeight/2)+"px";

spark.style.width="8px";
spark.style.height="8px";

spark.style.borderRadius="50%";

spark.style.background=
"white";

spark.style.boxShadow=
"0 0 20px #7ec6ff";

spark.style.pointerEvents=
"none";

spark.style.zIndex="9999";

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
transform:
"translate(0,0)",
opacity:1
},
{
transform:
`translate(${x}px,${y}px)`,
opacity:0
}
],

{
duration:1200,
easing:"ease-out"
}

);

setTimeout(()=>{
spark.remove();
},1200);

}

}

/* =====================================
REVELAR SECCIONES
===================================== */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(
(entry)=>{

if(
entry.isIntersecting
){

entry.target.style.opacity=
"1";

entry.target.style.transform=
"translateY(0px)";

}

}
);

},

{
threshold:.15
}

);

document
.querySelectorAll(".scene")
.forEach(section=>{

section.style.opacity="0";

section.style.transform=
"translateY(80px)";

section.style.transition=
"all 1.2s ease";

observer.observe(section);

});

/* =====================================
BRILLO DEL CURSOR
===================================== */

const glow =
document.createElement("div");

glow.style.position="fixed";
glow.style.width="30px";
glow.style.height="30px";
glow.style.borderRadius="50%";

glow.style.background=
"rgba(180,220,255,.4)";

glow.style.pointerEvents=
"none";

glow.style.filter=
"blur(12px)";

glow.style.zIndex=
"99999";

document.body.appendChild(
glow
);

document.addEventListener(
"mousemove",
e=>{

glow.style.left =
e.clientX - 15 + "px";

glow.style.top =
e.clientY - 15 + "px";

}
);

/* =====================================
MUSICA
===================================== */

const music =
document.getElementById(
"bgMusic"
);

document.addEventListener(
"click",
()=>{

if(music){

music.play()
.catch(()=>{});

}

},
{
once:true
}
);

/* =====================================
FUEGOS ARTIFICIALES
===================================== */

function launchFirework(){

const firework =
document.createElement("div");

firework.style.position=
"fixed";

firework.style.left=
Math.random()*100+"vw";

firework.style.top=
Math.random()*50+"vh";

firework.style.width="8px";
firework.style.height="8px";

firework.style.background=
"white";

firework.style.borderRadius=
"50%";

firework.style.zIndex=
"9999";

document.body.appendChild(
firework
);

for(let i=0;i<25;i++){

const particle =
document.createElement("div");

particle.style.position=
"fixed";

particle.style.left=
firework.style.left;

particle.style.top=
firework.style.top;

particle.style.width=
"5px";

particle.style.height=
"5px";

particle.style.background=
"#8fd2ff";

particle.style.borderRadius=
"50%";

particle.style.zIndex=
"9999";

document.body.appendChild(
particle
);

const angle =
Math.random()*360;

const distance =
Math.random()*180;

particle.animate(

[
{
transform:
"translate(0,0)",
opacity:1
},
{
transform:
`translate(
${Math.cos(angle)*distance}px,
${Math.sin(angle)*distance}px
)`,
opacity:0
}
],

{
duration:1400
}

);

setTimeout(()=>{
particle.remove();
},1400);

}

setTimeout(()=>{
firework.remove();
},100);

}

const finalSection =
document.getElementById(
"final"
);

const finalObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(
entry=>{

if(
entry.isIntersecting
){

setInterval(
launchFirework,
1200
);

}

}
);

}

);

if(finalSection){

finalObserver.observe(
finalSection
);

}
