//1.Condition Statement To Fing Largest Number
let num1 = 145;
let num2 = 50;
let num3 = 167;
let largestNumber;

if (num1 >= num2 && num1 >= num3 ) {
  largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3 ) {
  largestNumber = num2;
} else if (num3 >= num1 && num3 >= num2 ) {
  largestNumber = num3;
} 
console.log(`The largest number is: ${largestNumber}`);

//2.Display the current date and time 
let currentDate = new Date();
let month = currentDate.getMonth() + 1; 
let day = currentDate.getDate();
let year = currentDate.getFullYear();

// Format the date string with leading zeros
let formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

// Get the current time components
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

// Format the time string with leading zeros if necessary
let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

// Display the current day and time in the desired format
console.log(`Current date and time: ${formattedDate} ${formattedTime}`);

//3.Arrya of string in ascending & descending 
let arr = ["bangalore", "calcutta", "chennai", "delhi", "hyderabad"];
//ascending order
let ascendingOrder = arr.slice().sort();
//descending order
let descendingOrder = arr.slice().sort().reverse();
console.log("Original array:", arr);
console.log("Array in ascending order:", ascendingOrder);
console.log("Array in descending order:", descendingOrder); 

//4.Remove duplicate 
 let array = [11, 27, 31, 44, 27, 32, 15, 69, 44, 73, 86, 87];

//new Set to remove duplicates
let uniqueArray = Array.from(new Set(array));

console.log("Original array:", array);
console.log("Array without duplicates:", uniqueArray);

//5.Return unique element between 2 arrays
function getUniqueElements(arr1, arr2) {
// Concatenate
  let combinedArray = arr1.concat(arr2);
//new Set to remove duplicates
  let uniqueSet = new Set(combinedArray);
//Convert to array
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}
//inputs
let array1 = [11, 26, 33, 45, 54];
let array2 = [44, 54, 61, 72, 33];
let uniqueElements = getUniqueElements(array1, array2);
console.log("Unique elements:", uniqueElements); 

//6.list of properties in Javascript Object
let obj = {
  name: "Sherifa Ahamed",
  age: 23,
  occupation: "Developer",
  city: "Erode"
};
// Get the properties of the object
let properties = Object.keys(obj);
// Display the properties
console.log("Properties of the object:");
properties.forEach(property => {
  console.log(property);
});