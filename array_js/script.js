// const words=['himmy','bike','cars']
// console.log(words);
// console.log(words[1]);

//array of mixed dataytype  
const neword=['himmy',411,true,'chait'];
console.log(neword);
// console.log(neword.length);
const length=neword.length;
console.log(length);

const newarr=neword;
newarr[1]=45;
console.log(neword);
console.log(newarr); 

//Common array methods

//indexOf()
const nums= [45,18,7,10,4];
console.log(nums.indexOf(18));

//includes()
console.log(nums.includes(425));

//push()
nums.push("himmy");
console.log(nums);

//unshift()
nums.unshift('hilux');
console.log(nums);

//pop()
nums.pop();
console.log(nums);

//shift()
nums.shift();
console.log(nums);

//sort()
nums.sort();
console.log(nums);

//slice()
const subarray=nums.slice(1,4);
console.log(subarray);