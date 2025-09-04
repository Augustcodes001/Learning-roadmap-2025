// Rest parameters
// It can be useful for a function to accept any number of arguments.
// For example, Math.max computes the maximum of all the arguments
// it is given. To write such a function, you put three dots before the
// function’s last parameter, like this:
// function max(...numbers) {
// let result = -Infinity;
// 109
// for (let number of numbers) {
// if (number > result) result = number;
// }
// return result;
// }
// console.log(max(4, 1, 9, -2));
// // → 9

// You can use a similar three-dot notation to call a function with an
// array of arguments.
// let numbers = [5, 1, 7];
// console.log(max(...numbers));
// // → 7

// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"]);
// // → ["will", "never", "fully", "understand"]

// let coordinates = {x: 10, y: 0};
// console.log({...coordinates, y: 5, z: 1});
// // → {x: 10, y: 5, z: 1}

// The Math object
// Many languages will stop you, or at least warn you, when you are
// defining a binding with a name that is already taken. JavaScript does
// this for bindings you declared with let or const but—perversely—not
// for standard bindings nor for bindings declared with var or function.
// function randomPointOnCircle(radius) {
// let angle = Math.random() * 2 * Math.PI;
// return {x: radius * Math.cos(angle),
// y: radius * Math.sin(angle)};
// }
// console.log(randomPointOnCircle(2));
// // → {x: 0.3667, y: 1.966}

// them when they are used in Chapter 14.
// The previous example used Math.random. This is a function that returns a new pseudorandom number between 0 (inclusive) and 1 (exclusive) every time you call it:
// console.log(Math.random());
// // → 0.36993729369714856
// console.log(Math.random());
// // → 0.727367032552138
// console.log(Math.random());
// → 0.40180766698904335
// If we want a whole random number instead of a fractional one, we
// can use Math.floor (which rounds down to the nearest whole number)
// on the result of Math.random:
// console.log(Math.floor(Math.random() * 10));
// // → 2

// Destructuring
// This also works for bindings created with let, var, or const. If you
// know that the value you are binding is an array, you can use square
// brackets to “look inside” of the value, binding its contents.
// A similar trick works for objects, using braces instead of square brackets.
// let {name} = {name: "Faraji", age: 23};
// console.log(name);
// // → Faraji

// Optional property access
// When you aren’t sure whether a given value produces an object, but
// still want to read a property from it when it does, you can use a variant
// of the dot notation: object?.property.
// function city(object) {
// return object.address?.city;
// }
// console.log(city({address: {city: "Toronto"}}));
// // → Toronto
// console.log(city({name: "Vera"}));
// // → undefined
// The expression a?.b means the same as a.b when a isn’t null or undefined.