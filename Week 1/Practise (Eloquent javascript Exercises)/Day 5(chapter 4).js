
// Further arrayology

// We saw push and pop, which add and remove elements at the end of
// an array, earlier in this chapter. The corresponding methods for adding
// and removing things at the start of an array are called unshift and
// shift.
// let todoList = [];
// function remember(task) {
// todoList.push(task);
// }
// function getTask() {
// return todoList.shift();
// }
// function rememberUrgently(task) {
// todoList.unshift(task);
// }

// To search for a specific value, arrays provide an indexOf method.
// The method searches through the array from the start to the end and
// returns the index at which the requested value was found—or -1 if it
// wasn’t found. To search from the end instead of the start, there’s a
// similar method called lastIndexOf:
// console.log([1, 2, 3, 2, 1].indexOf(2));
// // → 1
// console.log([1, 3, 2, 2, 3, 6].lastIndexOf(3));
// // → 4


// Another fundamental array method is slice, which takes start and
// end indices and returns an array that has only the elements between
// them. The start index is inclusive and the end index is exclusive.
// console.log([0, 1, 2, 3, 4].slice(2, 4));
// // → [2, 3]
// console.log([0, 1, 2, 3, 4].slice(2));
// // → [2, 3, 4]


// The following example shows both concat and slice in action. It
// takes an array and an index and returns a new array that is a copy of
// the original array with the element at the given index removed:
function remove(array, index) {
return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]
// If you pass concat an argument that is not an array, that value will be
// added to the new array as if it were a one-element array

// Every string value has
// a number of methods. Some very useful ones are slice and indexOf,
// which resemble the array methods of the same name:
// console.log("coconuts".slice(4, 7));
// // → nut
// console.log("coconut".indexOf("u"));
// // → 5

// The trim method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string:
// console.log(" okay \n ".trim());
// // → okay

// The zeroPad function from the previous chapter also exists as a method.
// It is called padStart and takes the desired length and padding character
// as arguments:
// console.log(String(6).padStart(3, "0"));
// // → 006

// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// // → ["Secretarybirds", "specialize", "in", "stomping"]
// console.log(words.join(". "));
// // → Secretarybirds. specialize. in. stomping
// A string can be repeated with the repeat method, which creates a new
// string containing multiple copies of the original string, glued together:
// console.log("LA".repeat(3));
// // → LALALA

