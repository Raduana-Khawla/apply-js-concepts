//largest element of arry
// function largestArray(numbers){
//     let largest= numbers[0];
//     for(let i = 0; i< numbers.length; i++){
//         let element = numbers[i];
//         if(element>largest){
//             largest=element;
//         }
//     }
//     return largest;
// }
// const values = [23,45,67,89,24,60];
// const oldest = largestArray(values);
// console.log(oldest);




//smallest element of array
function smallestArray(numbers){
    let smallest= numbers[0];
    for(let i = 0; i< numbers.length; i++){
        let element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
// const values = [23,45,67,89,24,60];
// const lowest = smallestArray(values);
// console.log(lowest);



const ages = smallestArray([2,-3,-4,-17]);
console.log(ages);