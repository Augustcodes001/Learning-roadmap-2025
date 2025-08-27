// Exercise for chapter two 
// ONE
// write a code that makes seven calls to console.log out the triangle 
for ( i = "#" ; i.length <= 7 ; i +="#"  ){
     console.log(i);
}
        //  OR
 // Using a while loop
 var i = "" //  {since iteration adds values on the initial values we start from an empty state so that the iteration starts from inside the while loop to understand this change i = "#"; we immmediately see that the output starts from  "##" instead of "#"}
while (  i.length <= 6 ){
    i += "#"
     console.log(i);
}

// Exercise for chapter two 
// TWO
// Write a program that uses console.log to print all the numbers from 1
// to 100, with two exceptions. For numbers divisible by 3, print "Fizz"
// instead of the number, and for numbers divisible by 5 (and not 3), print
// "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz
// " for numbers that are divisible by both 3 and 5 (and still print "Fizz"
// or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed
// out a significant percentage of programmer candidates. So if you solved
// it, your labor market value just went up.)
for ( i = 1 ; i<= 100 ; i ++  ){
     if( i % 3 == 0 && i % 5 == 0){
                console.log( "FizzBuzz");   
     }
     if (i % 3 == 0){
          console.log( "Fizz");
     }  else if (i % 5 == 0){
          console.log( "Buzz");
     }
     console.log(i);
}

// Exercise for chapter two 
// THREE
// Write a program that creates a string that represents an 8×8 grid, using
// newline characters to separate lines. At each position of the grid there
// is either a space or a "#" character. The characters should form a
// chessboard. 
var size = 8;  
var board = " ";
// column 
for ( a = 0 ; a < size ; a ++ ){
    // row
    for ( b = 0 ; b < size ; b ++ ){
    if ( (a + b) % 2 == 0 ){
        board += " ";
    }
     else{
         board += "#";
      
    }
}
  board += "\n";
}
  console.log(board);

// EXAMPLE
// representing the mathematical exponential with a while loop
let exp = 0;
let power = 1;

while (exp <= 10){
     power = power * 2;
     // OR 
     // power *= 2;
     exp++;
     console.log(power);
}

