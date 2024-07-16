const calculate=(a,b,operation)=>{
       return operation(a,b);
}
const result=calculate(3,4,function(num1,num2){
    return num1+num2;
})

console.log(result);

const subtraction=(a,b)=>{
    return a-b;
}
const subresult=calculate(8,5,subtraction);
console.log(subresult);

function multiply(a,b){
    return a*b;
}
 const mulresult=calculate(3,4,multiply);
 console.log(mulresult);
