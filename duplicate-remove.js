// const names=['abul','babul','kabul','cabul','habul'];
// function duplicateRemove(names){
// const unique = [];
// for(let i=0; i<names.length; i++){
//     const element = names[i];
//     if(unique.indexOf(element) == -1){
//         unique.push(element);
//     }
// }
// return unique;
// }
// const uniqueNames = duplicateRemove(names);
// console.log(uniqueNames);



//remove duplicate from array
// function duplicateRemove(names){
//     const unique=[];
//     for(const element of names){
//         console.log(element);
//         if(unique.indexOf(element) == -1){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const uniqueNames = duplicateRemove(names);
// console.log(uniqueNames);



//remove duplicate from numbers
const numbers=[1,2,3,4,5,6,7,8];
function duplicateRemove(numbers){
    const unique=[];
    for(const element of numbers){
        //console.log(numbers);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const uniqueNames = duplicateRemove(numbers);
console.log(uniqueNames);