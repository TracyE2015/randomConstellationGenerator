/* This program displays interesting facts about the constellation */      
/* Codecademy Challenge Project - Mixed Messages - April 28, 2023 */


/* Constellation facts */
let arrFact = ['Constellations are simply star patterns in the sky.', 
               'Zodiac constellations are found where Sun, Moon, and planets move.',
               'Different constellations become visible throughtout the year.'];

/* Object data structure for displaying facts */
const displayConstellationFacts = (arr) => {
    let arrNumber = Math.floor(Math.random() * arrFact.length);
    
    switch (arrNumber) {
        case 0:
            console.log(arrFact[0]);
            break;
        case 1:
            console.log(arrFact[1]);
            break;
        case 2:
            console.log(arrFact[2]);
            break;
        default:
            console.log("Error displaying message.");
            break;
    }
};              

displayConstellationFacts(arrFact);
