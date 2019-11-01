// No.11 Challenge
//11 - Given a string return a string where the case has been swapped.

// console.log(myString.length())
// console.log(myString.map())
// console.log(myString.)
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());
// console.log(myString.)

function flipWords(backwardCase){

    let sentence = "";
    let separate = backwardCase.split("");
   
    for (let i = separate.length - 1; i >= 0; i--){
      if (separate[i].length >= 1){
      sentence += separate[i].split("").reverse("").join("");
      }

     else {
     sentence += "" + separate[i];
     }
    }
   return sentence;
   }
   flipWords("I'm Tired Of Life Skills");

console.log(flipWords("I'm Tired Of Life Skills"))





