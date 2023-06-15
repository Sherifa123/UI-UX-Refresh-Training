// strict case
function average(x,y) {
  return x + y / 2;
}
console.log(average(7, 13));

// printing the sum of the numbers

function sum(a) {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    console.log(total);
  }
    sum(16, 43);



  