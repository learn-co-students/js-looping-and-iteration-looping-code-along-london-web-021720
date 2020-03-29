// Code your solutions in this file
function writeCards(array, word) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        arr[i] = `Thank you, ${array[i]}, for the wonderful ${word} gift!`
    }
    return arr
}

function countDown(number) {
    let x = number;
    for (let i = 0; i < x + 1; i = i + 1){
        console.log(`${number}`);
        number = number - 1;
    }
}

