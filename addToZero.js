// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
// Write a for loop, cause we want it to repeat the function until two numbers are compared.
//Start with left number, compare with the rest, then continue.
//Take each number to compare to the rest.

// let array2 = array.[] 

// Boolean 

// let i = 0;
// while(i + array ==! 0){

// }


// switch(array) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

// function addToZero(array){
//     for(let i = 0; i < array.length; i++){
//         for(let j = i; j < array.length; j++){
//             if(array[i] + array[j] === 0) {
//                 return true;
//             } else {
//             }
//             }
//         }
//     }

// console.log(addToZero(array));

//Step 1: Loop through an array
//Step 2: Add current number to each of the following numbers.
//Step 3: Condition to check if number is added to 0
//Step 4: If equals 0, print true.
//Step 5: If none add to 0, print false.

let answer = false;

for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === 0){
            answer = true
        }
    }
}

console.log(answer);