const a=[4,1,-6,-2,-5,9,2,-8,6,7];

const firstneg=(num)=>{
    return num<0;
}
//find() : returns the first value of an array element that passes a test
const result=a.find(firstneg);
console.log(result);

// findindex() ; return the index of an array element that passes a test
console.log(a.findIndex(firstneg));

a.forEach((num)=>{
    console.log(num);
})