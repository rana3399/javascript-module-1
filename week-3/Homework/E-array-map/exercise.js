// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// function multiply(numbers){
//     return numbers * 100;

// }

// var result = numbers.map(multiply);
// console.log(result);

// ----------------------------------------------------------------------------------------
// function multiplyDemo(numbers){
//     var multiplied = numbers.map(function insideFunction(x) {
//         return x * 100;
//     })
//     return multiplied;
// } 

// console.log(multiplyDemo(numbers));

// ------------------------------------------------------------------------------------


function newMultiply(numbers){
    var result = numbers.map(digits => digits * 100);
    return result;
}
console.log(newMultiply(numbers));