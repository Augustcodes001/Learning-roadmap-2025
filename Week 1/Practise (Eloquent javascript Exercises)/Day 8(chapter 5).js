// Abstraction
// In the context of programming, these kinds of vocabularies are usually
// called abstractions. Abstractions give us the ability to talk about problems at a higher (or more abstract) level, without getting sidetracked
// by uninteresting details.

// Higher-order functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// function greaterThan(n) {
// return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// There is a built-in array method, forEach, that provides something like
// a for/of loop as a higher-order function.
// ["A", "B"].forEach(l => console.log(l));

// function filter(array, test) {
// let passed = [];
// for (let element of array) {
// if (test(element)) {
// passed.push(element);
// }
// }
// return passed;
// }
// console.log(filter(SCRIPTS, script => script.living));
// // → [{name: "Adlam", …}, …]

//  function reduce(array, combine, start) {
// let current = start;
// for (let element of array) {
// current = combine(current, element);
// }
// return current;
// }
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
// console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
// → 10

// console.log(sum(range(1, 10)));
// To use reduce (twice) to find the script with the most characters, we
// can write something like this: 
function characterCount(script) {
return script.ranges.reduce((count, [from, to]) => {
return count + (to - from);
}, 0);
}
console.log(SCRIPTS.reduce((a, b) => {
return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}