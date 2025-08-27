// FUNCTIONS AND SIDE EFFECTS
// Functions can be roughly divided into those that are called for their side effects and those that are called for their return value (though it is also possible to both have side effects and return a value).
// THIS FUNCTION IS  CALLED FOR ITS SIDE EFFECT
// function printZeroPaddedWithLabel(number, label) {
// let numberString = String(number);
// while (numberString.length < 3) {
// numberString = "0" + numberString;
// }
// console.log(`${numberString} ${label}`);
// }
// function printFarmInventory(cows, chickens, pigs) {
// printZeroPaddedWithLabel(cows, "Cows");
// printZeroPaddedWithLabel(chickens, "Chickens");
// printZeroPaddedWithLabel(pigs, "Pigs");
// }
// printFarmInventory(7, 11, 3);

// THIS FUNCTION IS CALLED FOR ITS RETURN VALUE
// function zeroPad(number, width) {
// let string = String(number);
// while (string.length < width) {
// string = "0" + string;
// }
// return string;
// }
// function printFarmInventory(cows, chickens, pigs) {
// console.log(`${zeroPad(cows, 3)} Cows`);
// console.log(`${zeroPad(chickens, 3)} Chickens`);
// console.log(`${zeroPad(pigs, 3)} Pigs`);
// }
// printFarmInventory(7, 16, 3);

// notes
// Functions that create values are easier to combine in new ways than functions that directly perform sideeffects


// CHAPTER 3 EXERCISES
//1. The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves
// now. Define the function min that takes two arguments and returns their
// minimum.
//    function min(a , b){
//     if (a < b)return a;
//     else return b;
//    }
//    console.log(min(10, 11));

//   2. We’ve seen that we can use % (the remainder operator) to test whether
// a number is even or odd by using % 2 to see whether it’s divisible by
// two. Here’s another way to define whether a positive whole number is
// even or odd:
// • Zero is even.
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description.
// The function should accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think
// of a way to fix this?
// first Solution
// function isEven(N){
//         if (N % 2 == 0){
//             return true;
//         }else if (N % 2 == 1){
//             return false;
//         }
//         else{
//             return isEven(-N);
//         }

// }
// console.log(isEven(-10));
// solution for negative numbers

// function isEven(N){
//         if (N % 2 == 0){
//             return true;
//         }else if (N % 2 == 1){
//             return false;
//         }
//         else{
//             return isEven(-N);
//         }

// }
// console.log(isEven(-10));

// 3.You can get the Nth character, or letter, from a string by writing [N]
// after the string (for example, string[2]). The resulting value will be a
// string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position
// string.length - 1. In other words, a two-character string has length 2,
// and its characters have positions 0 and 1.
// Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase B
// characters there are in the string.
// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character that
// is to be counted (rather than counting only uppercase B characters).
// Rewrite countBs to make use of this new function.

function countBs(str){
    return countChar(str, "B");
}
function countChar(str, char){
    let count = 0;
    for(i = 0 ; i < str.length; i++ ){
        if(str[i] === char){
            count++;
        }
    }
    return count;
}
// testing the function
console.log(countBs("BUBBLES"));