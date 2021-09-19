//1.// function factorialFunction(isFactorial)
// {
//     for( var i =1; i<=4; i++){
//         isFactorial = isFactorial * i;
//     }
//     return isFactorial;
// } 
// var factorial =1;
// var facto = factorialFunction(factorial);
// console.log(facto);

//2.another way 

// function getFactorial(number){
//     var factorial = 1;
//     for(var i=1; i<=number; i++)
//     {
//         factorial=factorial*i;
//     }
//     return factorial;
// }
// var facto = getFactorial(7);
// console.log('get factorial',facto);

// var firstFactorial = getFactorial(3);
// console.log('get factorial',firstFactorial);
//3.
// function getFactorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i<=number){
//        factorial = factorial * i;
//        i++;
//     }
//     return factorial;
// }
// let facto = getFactorial(3);
// console.log('get factorial',facto);



//reverse way factorial function with while loop
function getFactorial(number){
    let factorial=1;
    let i= number;
   while(i>=1)
   {
       factorial = factorial* i;
       i--;
   }
   return factorial;
}
let facto = getFactorial(6);
console.log('get factorial',facto);


//reverse way factorial function with for loop
function getFactorial2(number){
    let factorial=1;
    for( let i=number; i>=1;i--){
        factorial=factorial*i;
    }
    return factorial;
}
let firstFacto = getFactorial2(6);
console.log('get factorial',firstFacto);
