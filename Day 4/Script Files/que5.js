let n= prompt("Enter sales:");


if (n <= 5000)
 {
     commision_earn = ((n)*(0.02))
    console.log("2%");
    console.log("Commision earn by employee ",commision_earn)
 }
else if (n <= 10000) 
 {
    commision_earn = ((n)*(0.05))
    console.log("5%");
    console.log("Commision earn by employee ",commision_earn)
 }
else if (n <= 20000) 
 {
    commision_earn = ((n)*(0.07))
    console.log("7%");
    console.log("Commision earn by employee ",commision_earn)
 }
else if(n>20000)
 {
    commision_earn = ((n)*(0.10))
    console.log("10%");
    console.log("Commision earn by employee ",commision_earn)
 }