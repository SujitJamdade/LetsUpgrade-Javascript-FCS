
let score = prompt("Enter score");

console.log("Student entered Score " + Number(score));

if(score >= 75 && score <= 99){
    console.log(`Marks are ${score} and grade is A`)
}
else if(score >=50 && score <75 ){
    console.log(`Marks are ${score} and grade is B`)
}
else{
    console.log("you are failed");
};

console.log("Using terniary")

//using terinary operator

console.log(score >= 75 && score < 99?
    `Marks are ${score} and grade is A`:
    (score >= 50 && score <75)?
    `Marks are ${score} and grade is B`:
    'you are failed');
