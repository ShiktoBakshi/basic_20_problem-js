// Simple Calculator
const num_1=20;
const num_2=20;
const operator='/'
if(operator==='+'){
console.log(num_1+num_2)
}
else if(operator==='-'){
    console.log(num_1-num_2)
}
else if(operator==='*'){
    console.log(num_1*num_2)
}
else if(operator==='/'){
    result = num_2 !== 0 ? num_1 / num_2 : "Cannot divide by zero";
    console.log(result)
}
else {
        result = "Invalid Operator";
}
