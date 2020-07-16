//array default functions

// first writting array as a variavle of arr
let arr=["Sujit","Ajit"];
console.log(arr);

// sorting array
arr.sort()
console.log(arr);

//Inserts new elements at the start of an array.
arr.unshift("Avinash");
console.log(arr);

//Inserts new elements at the start of an array.
arr.shift();
console.log(arr);

//Appends new elements to an array, and returns the new length of the array.
arr.push("Jamdade");
console.log(arr);

//Removes the last element from an array and returns it
arr.pop();
console.log(arr);

//Reverses the elements in an Array.
arr.reverse();
console.log(arr);

 //string and default methods

let str="hello I am Sujit Jamdade";
console.log(str);

//Returns the length of a String object.
console.log(str.length);

//all alphabetic characters have been converted to uppercas
console.log(str.toLocaleUpperCase());

//Converts all alphabetic characters to lowercase
console.log(str.toLocaleLowerCase());

//Returns the position of the first occurrence of a substring.
console.log(str.indexOf('S'));

//Split a string into substrings using the specified separator and return them as an array.
console.log(str.split('a'));

console.log(str.split(''));

//Replaces text in a string, using a regular expression or search string.
console.log(str.replace('hello','hi'));

//Finds the first substring match in a regular expression search.
console.log(str.search('a'));

//Returns a section of a string.
console.log(str.slice(5,16));

//Returns the last occurrence of a substring in the string
console.log(str.lastIndexOf('d'));