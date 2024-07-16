// function greet(){
//     console.log('hello world');
// }

//arrow function
const greet= (count)=>{
    for(let i=0;i<count;i++){
        console.log('this is arrow fun');
    }
}

const square=(num)=>{
   
   return num*num;
}
greet(3);

console.log(square(3));
