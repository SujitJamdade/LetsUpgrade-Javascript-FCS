console.log("Methods of DataTypes");

let str = `<h2> Hey there</h2>
<p>Sujit is here </p>
`;
console.log(str)

let name = "Rio";
let skill = "hacking";
let weakness = "Tokyo";

console.log("The name is "+ name + ". His skill is "+ skill + " and his weakness is "+ weakness);

console.log(`The name is ${name}. His skill is ${skill} and his weakness is ${weakness}`)

let text = "The quick brown fox jumps over the wall";

console.log(text)

// check the length
console.log(text.length);

// To change the case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

 //  Accessing the index
 console.log(text[5]);
 console.log(text.indexOf('o'));
 console.log(text.lastIndexOf('o'));

 console.log(text.charAt('12'));

 console.log(text.endsWith("wall"));

 console.log(text.split(" "))

 // Array 

 let arr = ["one", "Two", 32, ['1','2','3']];
let arr2 = ['rio','berlin','alicia'];

 console.log(arr);
 console.log(Array.isArray(arr));


 console.log( arr.reverse());
 console.log(arr[3]);

 console.log(arr.concat(arr2));

//Appending an element
//At the start
arr2.unshift('tokyo');
console.log(arr2)

//At the end 
arr2.push('sujit')
console.log(arr2)

// Removing an element
//from the start
arr2.shift('tokya')
console.log(arr2)

//from the  end
// arr2.push('sujit')
console.log(arr2.pop())
