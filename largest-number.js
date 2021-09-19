//1.way
// const a=30;
// const b=20;
// if(a>b){
//     console.log(a);
// }
// else{
//     console.log(b);
// }

// //2.way with Math
// var a=10, b=3, c=7;
// var number = Math.max(a,b,c);
// console.log('largest number',number);

//3.way with function

// function maxNumber(a,b,c){
//     if(a>b && a>c)
//     {
//         return a;
//     }
//     else if(b>a && b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// let max = maxNumber(10,30,20);
// console.log(max);


//1.way
//find min number :
// let a=28, b=35, c=65;
// let number = Math.min(a,b,c);
// console.log(number);




function minNumber(a,b,c){
    if(a<b && a<c)
    {
        return a;
    }
    else if(b<a && b<c){
        return b;
    }
    else{
        return c;
    }
}
let min = minNumber(10,30,20);
console.log(min);
