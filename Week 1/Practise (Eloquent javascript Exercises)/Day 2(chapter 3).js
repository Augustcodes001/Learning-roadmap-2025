
// Recursion in functions
// what is recursion 
// the ability of a function to call it self is called recursion 
// A function that calls itself is called a recursive function 

// EXAMPLE
// representing the mathematical exponential with a function
// function power(base, exponent) {
// if (exponent == 0) {
// return 1;
// } else {
// return base *  power(base,exponent - 1);
// }
// }
// console.log(power(2, 3));
// → 8

  //    EXAMPLE 1(RECURSING TO FIND TWO POSSIBLE NUMBER COMBINATONS FOR 40)
function findSolution(target){
    function find(current, history){
        if (target === current){
            return history;
        }
        if (current > target){
            return null;
        }
        else{
            return find(current + 6, `(${history} + 6)`) ?? find(current * 4 , `(${history} * 4)`) ;
        }
    }
    return find(1 , "1");
}
console.log(findSolution(40));
    //    EXAMPLE 2(RECURSING TO FIND TWO POSSIBLE NUMBER COMBINATONS FOR 24)
        function findSolution(target) {
        function find(current, history) {
        if (current == target) {
        return history;
        } else if (current > target) {
        return null;
        } else {
        return find(current + 5, `(${history} + 5)`) ??
        find(current * 3, `(${history} * 3)`);
        }
        }
        return find(1, "1");
        }
        console.log(findSolution(24));

        // REPRESENTING GROWING FUNCTIONS
// taking farm inventory using zeropadding; e.g 004 pigs or 011 cows
// 004 pigs or 011 cows
// print this farm inventory using a function 
// lets break this problem down since there is numbers and letters mixed it mens the final function must change the number to a string using the String function
// to represent the zeropadding
        function zeroPad(number, width) {
let string = String(number);
while (string.length < width) {
string = "0" + string;
}
return string;
}
function printFarmInventory(cows, chickens, pigs) {
console.log(`${zeroPad(cows, 3)} Cows`);
console.log(`${zeroPad(chickens, 3)} Chickens`);
console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);
