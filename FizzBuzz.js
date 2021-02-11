//This is my javasccript FizzBuzz implementation.
//It is so very simple
//Print 1 - 100000
//Numbers evenly Divisible by 3 print "Fizz"
//Numbers evenly Divisible by 5 print "Buzz"
//Numbers evenly Divisible by both print "FizzBuzz"

const byThree = "Fizz";
const byFive = "Buzz";

for (var i = 1; i <= 100000; i++) {
  if (i % 15 == 0) {
    console.log(`${byThree}${byFive}`);
  } else if (i % 3 == 0) {
    console.log(byThree);
  } else if (i % 5 == 0) {
    console.log(byFive);
  } else console.log(i);
}
