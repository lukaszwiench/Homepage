const name = "Maciek";
const age = 19;
const firstName = "Łukasz";

console.log(firstName);

// KOMENTARZ-->
// alert('siemanko')

console.log("Siema!");

console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);

const heading = document.querySelector(".main-heading");

console.log(heading);

const namez = document.querySelector(".main-heading--js");

namez.innerHTML = `Siema, nazywam się ${firstName} i mam ${age} lat`;

const git = document.querySelector(".js-git");

git.innerHTML = `a tutaj mała zmiana potrzebna do wykonania zadania `;


const button = document.querySelector('.action--js');
console.log(button)

button.addEventListener('click', () => {
    const heading = document.querySelector(".main-heading--js");
    heading.innerHTML = `Witaj Drogi odwiedzający, nazywam się Maciek`;
    heading.classList.add(`klasa-z-js`);
});

const hamburger = document.querySelector('.hamburger--js');

    hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});
