// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }
let array1 =[];
function writeCards(array,event) {
    for(let i = 0; i<array.length; i++ ){
       array1.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`); 
    }
   return array1
}

function countDown(num) {
    for(let i = num; i >= 0; i--) {
        console.log(i);
    }
    return num
}