// No.1 Challenge Fruit machine

// fruits = ["orange", "lemon", "cherry"]

// let Slot = {

slotOne = math.floor(math.random()*(3 - 1 + 1)) + 1 ;
slotTwo = math.floor(math.random()*(3 - 1 + 1)) + 1;
// slotThree = math.floor(math.random()*(3 - 1 + 1)) + 1;

// }
// if Slot (slotOne) <= 2 {
//     return one;
// } if else (slotTwo) <= 3 {
//     return two;
// } else (slotThree) >= 1 {
//     return three;
// }
// console.log(Slot)


// function_random(a,b){
//     return Math.floor(math.random()*(b - a + 1)+a);
// }

// slotOne = _random(1,3);
// slotTwo = _random(2,3);
// slotThree = _random(3,3);

let fruit = ["apple", "orange", "banana", "pineapple", "mango"];
​
const random = fruit.sort(() => 0.5 - Math.random());
//sort() puts in order and returns it
​
let selected = random.slice(0, 3);
​
console.log(selected);
 



