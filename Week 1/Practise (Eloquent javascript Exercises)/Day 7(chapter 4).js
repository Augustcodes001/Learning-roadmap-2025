// JSON
// If you want to save data in a file for later or send it to another
// computer over the network,
// into a flat description. A popular serialization format is called JSON
// (pronounced “Jason”), which stands for JavaScript Object Notation. It
// is widely used as a data storage and communication format on the web,
// even with languages other than JavaScript.
// JSON looks similar to JavaScript’s way of writing arrays and objects,
// with a few restrictions. All property names have to be surrounded
// by double quotes, and only simple data expressions are allowed—no
// function calls, bindings, or anything that involves actual computation.
// Comments are not allowed in JSON.
// A journal entry might look like this when represented as JSON data:
// {
// "squirrel": false,
// "events": ["work", "touched tree", "pizza", "running"]
// }            
// JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format. The first takes a JavaScript value
// and returns a JSON-encoded string. The second takes such a string
// and converts it to the value it encodes:
// let string = JSON.stringify({squirrel: false,
// events: ["weekend"]});
// console.log(string);
// // → {"squirrel":false,"events":["weekend"]}
// console.log(JSON.parse(string).events);
// // → ["weekend"]

// EXERCISE FOR  CHAPTER 4
// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to and including end.
// var array = [];
// function range( start, end){
//    for(var i = start ; i < end; i++){
//        if (start > end ){
//          return null
//        }else{
//         array.push(i);
//        }
//    }
//    return array;
// }
// console.log(range(0, 10));
// Next, write a sum function that takes an array of numbers and returns
// the sum of these numbers. Run the example program and see whether
// it does indeed return 55.
//  function sum(array){
//             let total = 0;
//             for(let value of array){
//               total += value;
//             }
//             return total;
//           }
//           console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]));
  
   
//  function range(start , end, step = start < end ? 1 : -1){
//           let array = [];
//           if(step > 0){
//             for (let i = start ; i <= end ; i+= step){
//               array.push(i);
//             } 
//             } else {
//               for (let i = start ; i >= end ; i+= step){
//               array.push(i);
//             }

//             }
//          return array; 
//         }
//                console.log(range(5,2, -1));


  // ANOTHER WAY TO SUM THE VALUES OF AN ARRAY
// function sum(array){
//    var  result = 0 ;
//   var current = 0;
//   var end = array.length;
//     for(var  i = array[current]; i <= end ; i++){
//       if(current < end)
//             result += array[current];
//           current++;
//         }  
//           return result;
//     }


//  console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// EXERCISE 2
// Reversing an array
// Arrays have a reverse method that changes the array by inverting the
// order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray,
// should take an array as its argument and produce a new array that has
// the same elements in the inverse order. The second, reverseArrayInPlace
// , should do what the reverse method does: modify the array given as
// its argument by reversing its elements. Neither may use the standard
// reverse method.
// Thinking back to the notes about side effects and pure functions in
// the previous chapter, which variant do you expect to be useful in more
// situations? Which one runs faster?

// function reverseArray(array){
//   let newArray = [];
//   let current = 0;
//   let end = array.length;
//  for(var  i = array[current]; i <= end ; i++){
//       if(current < end){
//        result = array.pop(end) ;
//       current = array.length - 1 ;
//           newArray.push(result);
       
//         }
//          if(end > current ){
//        result = array.shift(current);
//         current = current + 1 ;
//           newArray.push(result);
             
//         }
        
//     }
// return newArray
// }



  // function reverseArray(arr){
  //         let result = []
  //         for(let i = arr.length - 1 ; i>=0 ; i--){
  //           result.push(arr[i]);

  //         }
  //         return result;
  //       }
        
  //          function reverseArrayInplace(arr){
  //       let left = 0;
  //       let right = arr.length - 1;
  //       while (left < right){
  //         let temp = arr[left]
  //         arr[left] = arr[right]
  //         arr[right] = temp
  //         left++;
  //         right--;
  //       }
  //       return arr;
  //     }
  //      console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  //       console.log(reverseArrayInplace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


            // EXERCISE 3 A LIST 
    // // ARRAY TO LIST 
    //     function arrayToList(arr){
    //        let list = null
    //        for(let i = arr.length - 1 ; i>= 0; i--){
    //            list = {value : arr[i], rest:list}
    //        }
    //        return list;
    //       }
        
    //       // LIST TO ARRAY
    //         function listToArray(list){
    //        let arr = []
    //        for(let node = list ; node; node = node.rest){
    //            arr.push(node.value)
    //        }
    //        return arr;
    //       }

    //       // prepend elements to the start
    //       function prepend(element , list){
    //         return {value : element , rest : list};
    //       }

    //       // returns the current location of an element in a list 
    //          function nth (list, n){
    //           if (!list)return undefined; 
    //           if (n === 0 )return list.value;
    //           return nth(list.rest , n - 1)
    //          }

              // Exercise 4 chapter 4
            function deepEqual(a , b ){
              // if a or b is not an object use deep comparison(for primitive data types like strings and boolean)
              if(typeof a !== 'object' ||  typeof b !== 'object') {
                return a === b
              }; 
              // if a  and b are not objects return false
               if(Object.keys(a).length !== Object.keys(b).length){
                       return false;
               } 
              //  DEEP EQUAL for an bject with an array
               for(let key in a ){
                if(!(key in b) || !deepEqual(a[key], b[key])){
                  return false;
                }
               }
                    return true;
            }

           let deepComparison = deepEqual(2, 2);
           console.log(deepComparison)

         let  object3 = {
                value:100
           }
           console.log(object3["value"]);
