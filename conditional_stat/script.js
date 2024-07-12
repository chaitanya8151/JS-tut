const age=65;
if(age>=18)
{
    console.log("you are inside if");
    console.log('You can vote');
    if(age>60){
        console.log('you can vote again');
    }
}
else{
    if(age<10){
        console.log('you must go to school');
    }
    console.log('you are in else');
    console.log('you cannot vote');
}

// console.log('this will always execute');
// const marks=66;
// if(marks>90){
//     console.log('A+');
// }
// else if(marks>80){
//     console.log(A);
// }
// else if(marks>70){
//     console.log('B+');
// }
// else if(marks>60){
//     console.log('B');
// }
// else{
//     console.log("low marks");
// }

//ternanry operator
const marks=15;
(marks>40)? console.log('passed') : console.log('faile');
