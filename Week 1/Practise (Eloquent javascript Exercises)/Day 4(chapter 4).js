// DATA TYPES
//  ARRAYS
// let listOfNumbers = [2, 3, 5, 7, 11];
// console.log(listOfNumbers[2]);
// // → 5
// console.log(listOfNumbers[0]);
// // → 2
// console.log(listOfNumbers[2 - 1]);
// // → 3

// Properties
// We’ve seen a few expressions like myString.length (to get the length
// of a string) and Math.max (the maximum function)
// The two main ways to access properties in JavaScript are with a dot and
// with square brackets. Both value.x and value[x] access a property on
// value—but not necessarily the same property. The difference is in how
// x is interpreted. When using a dot, the word after the dot is the literal
// name of the property. When using square brackets, the expression
// between the brackets is evaluated to get the property name. Whereas
// value.x fetches the property of value named “x”, value[x] takes the
// value of the variable named x and uses that, converted to a string,


// Methods
// Both string and array values contain, in addition to the length property,
// a number of properties that hold function values.
// let sequence = [1, 2, 3];
// sequence.push(4);
// sequence.push(5);
// console.log(sequence);
// // → [1, 2, 3, 4, 5]
// console.log(sequence.pop());
// // → 5
// console.log(sequence);
// // → [1, 2, 3, 4]

// OBJECT
// let day1 = {
// squirrel: false,
// events: ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// // → false
// console.log(day1.wolf);
// // → undefined
// day1.wolf = false;
// console.log(day1.wolf);
// // → false


// ARRAY LOOPS
// In the tableFor function, there’s a loop like this:
// for (let i = 0; i < JOURNAL.length; i++) {
// let entry = JOURNAL[i];
// // Do something with entry
// }
// ANOTHER WAY TO WRITE ARRAY LOOPS
// function journalEvents(journal) {
// let events = [];
// for (let entry of journal) {
// for (let event of entry.events) {
// if (!events.includes(event)) {
// events.push(event);
// }
// }
// }
// return events;
// }
// console.log(journalEvents(JOURNAL));

function journalEvents(journal){
    let events = [];
    for(let entry of journal){
    for(let event of entry.events)
      if(!events.includes(event)){
        events.push(event);
      }
    }
      return events;
}