
// Recursion in functions
// what is recursion 
// the ability of a function to call it self is called recursion 
// A function that calls itself is called a recursive function 

// EXAMPLE
// representing the mathematical exponential with a function
function power(base, exponent) {
if (exponent == 0) {
return 1;
} else {
return base * power(base, exponent - 1);
}
}
console.log(power(2, 3));
// → 8