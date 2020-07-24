n = parseInt(prompt("Please enter a positive number"));
let arr = [];
for (let i = 1; i <= n; i++)
{
    arr.push(i);
}
let arr1 = arr.filter((n)=>n%2!==0).map((n)=>n**3);
console.log(arr1);