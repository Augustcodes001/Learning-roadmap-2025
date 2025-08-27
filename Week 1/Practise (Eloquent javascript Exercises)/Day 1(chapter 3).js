
// the first block is the name of the function i.e square
// on the first line contains the argument wrapped up in brackets i.e (x)
// the next line defines this arguement within the function 
// the last line calls or evaluates the function

// ways of representing a function in JS

// using a binding to declare a function
// 1 const square = function(x)  {
// return x * x;
// };

// using  function declaration
// 2 function square(x) {
// return x * x;
// }
// console.log(square(12));


// using arrow function to declare a fuction
// 3. const roundTo = (n, step) => {
// let remainder = n % step;
// return n - remainder + (remainder < step / 2 ? 0 : step);
// };



//  i want to write a function that assigns or count the amount of foood i bought but there are different parameters that must be defined
const meal = function (food){
     const ingredients = function ( amount ,unit , name ){
               let foodAmount = amount * food;
               if (foodAmount > 1){
                unit += "s";
               }
               console.log(`${foodAmount} ${unit} ${name}`)
     };
     ingredients(2 , "tin" , "tomatoes");
};

// The code inside the ingredient function can see the meal binding from the outer function, but its local bind
// ings, such as unit or foodAmount, are not visible in the outer function.

// example of closure in JS 
// what are closures 
// when a function is called in another function; the inner function stores the arguement of the outer function even when the outer function has finished executing......this is called closure
function multiplier(factor) {
return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10


