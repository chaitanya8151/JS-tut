const a = 12;
const b = 13;
const result = sumofTwo(a, b);
console.log('returned result', result);
// const c=a+b;
// console.log('result: ',c);


const x = 45;
const y = 4;
const res = sumofTwo(x, y);


function sumofTwo(n1, n2) {

    const sum = n1 + n2;
    return sum;
}

//function expression :  The Javascript Function Expression is used to define a function inside any expression. The Function Expression allows us to create an anonymous function that doesn’t have any function name which is the main difference between Function Expression and Function Declaration
const sq=function (num){
    return num*num;
}
console.log(sq);
console.log(sq(4));