//even number
// let number = 234;
// let reminder = (number % 2 == 0);
// console.log("it's even number",reminder);

// odd number
// let number = 234;
// let reminder = (number % 2 != 0);
// console.log("it's odd number",reminder);

//even number
function evenNumber(number)
{
    if(number % 2 == 0)
    {
        return true;
    }
    return false;
}
let myNumber = 1641;
let isMyNumber = evenNumber(myNumber);
console.log('even number',isMyNumber);


let herNumber = 1892;
let isHerNumber = evenNumber(herNumber);
console.log('even number',isHerNumber);

//odd number
function oddNumber(number)
{
    if(number % 2 != 0)
    {
        return true;
    }
    return false;
}
let isMyOddNumber = oddNumber(myNumber);
console.log('my odd number',isMyOddNumber);

let isHerOddNumber = oddNumber(herNumber);
console.log('her odd number',isHerOddNumber);