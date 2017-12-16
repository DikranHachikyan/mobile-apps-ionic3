"use strict"

function *generateNumbers(){
    let counter = 1;
    //while(counter < 3){
    while(true){    
        yield counter++;
    }
}

let nums = generateNumbers();

console.log(nums.next().value);
console.log(nums.next().value);
console.log(nums.next().value);
console.log(nums.next().value);
nums.return();
console.log(nums.next());