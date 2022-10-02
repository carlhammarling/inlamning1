//random nummer
let random = Math.floor(Math.random() * 100 + 1);


let count = 0;                                     //Räknare på antal försök.
let userAnswer = 'Inget svar än';

//funktion
const question = () => {  
    let userAnswer = prompt('Gissa en siffra mellan 1-100');                 //fråga prompt
    count++; {
        //Om det är rätt
        if (userAnswer == random) { 
            alert('Rätt svar!! Det tog dig ' + count + ' försök att svara rätt. Du hamnade på plats x i topplistan');
        }
        //Om svaret är för lågt
        else if (userAnswer < random) {
            alert('Ditt svar är ' + userAnswer + ' Svaret är för lågt.');
            question();                                                      //laddar funktionen igen eftersom svaret var fel.
            
        }
        //Om svaret är för högt
        else {
            alert('Ditt svar är ' + userAnswer + ' Svaret är för högt.');
            question();                                                      //laddar funktionen igen eftersom svaret var fel.
            
        }
    }
};


console.log('randomtal: ' + random);


