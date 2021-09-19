// fibo=[0,1];
// for(let i=2; i<=10; i++)
// {
//     fibo[i]= fibo[i-1] + fibo[i-2];
// }
// console.log(fibo);


// function fibonacci(fibo){
// // const fibo=[0,1];
// for(let i=2; i<=10; i++)
// {
//     fibo[i]= fibo[i-1] + fibo[i-2];
// }
// return fibo;
// }
// const result = fibonacci([0,1]);
// console.log(result);

// function fibonacci(num){
//      const fibo=[0,1];
//     for(let i=2; i<=num; i++)
//     {
//         fibo[i]= fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
//     }
//     const result = fibonacci(6);
//     //pod songkha
//     console.log(result);


// function fibo(i){
//     if(i==0){
//         return 0;
//     } 
//     if(i==1){
//         return 1;
//     }
//     return fibo(i-1) + fibo(i-2);
// }
// console.log(fibo(6));

// //fibonacci nth element with error message
// function fibonacci(num) {
//     //console.log(typeof num);
//     if(typeof num != 'number'){
//         return 'please give a number';
//     }
//     if(num <2 || num<0){
//         return 'please give a positive number greater than 0 or 1';
//     }
//    const fibo = [0,1];
//     for(i=2;i<num;i++)
//     {
//         fibo[i]= fibo[i-1]+ fibo[i-2];
//     }
//     return fibo;

// }
// //console.log(fibonacci(3));
// console.log(fibonacci(-23));
// // console.log(fibonacci('5'));
// // console.log(fibonacci([don]));



//fibonacci series with recursion

function fibonacciSeries(n) {
    if(n==0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n] = fibo[n-1] + fibo[n-2];
    return fibo;
}
const fiboSeries = fibonacciSeries(6);
console.log(fiboSeries);