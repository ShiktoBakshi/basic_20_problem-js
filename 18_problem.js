// Check Odd and Positive
const num=-30;

if(num % 2 !== 0 && num>0){
    console.log("Odd & Positive")
}
else if(num % 2 !== 0 || num<0){
    console.log("Odd & Negative")
}
else if(num % 2 !== 1 || num>0){
    console.log("Odd & Negative")
}
else{
    console.log("is not Odd & Positive")
}


