/* This program displays interesting facts about the constellation */      
/* Codecademy Challenge Project - Mixed Messages - April 28, 2023 */


/* Constellation facts */
let arrFact = ['Constellations are simply star patterns in the sky.', 
               'Zodiac constellations are found where Sun, Moon, and planets move.',
               'Different constellations become visible throughtout the year.'];

/* Object data structure for displaying facts */
const displayConstellationFacts = (arr) => {
    let arrNumber = Math.floor(Math.random() * arrFact.length);
    return arrFact[arrNumber];
};               

console.log(displayConstellationFacts(arrFact));
