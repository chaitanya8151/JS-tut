function addsquare(a,b){
    const sa=square(a);
    const sb=square(b);
    function square(num){
        return num*num;
    }
    return sa+sb;
}

// console.log(addsquare(5,6));
const res=addsquare(5,6);
console.log(res);