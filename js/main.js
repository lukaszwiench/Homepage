const name = 'Maciek';
const age = 19;
const firstName = 'Łukasz';

console.log(firstName);

// KOMENTARZ-->
// alert('siemanko')

console.log('Siema!');

console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);



const heading = document.querySelector('.main-heading');

console.log(heading);

const namez = document.querySelector('.main-heading--js');

namez.innerHTML = `Siema, nazywam się ${firstName} i mam ${age} lat`;
