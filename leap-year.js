
// function leapYear(year){
//     if(year % 4 == 0)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }


function leapYear(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    {
        return true;
    }
    else{
        return false;
    }
}
 const myLeapYear = 2124;
 const isLeapYear = leapYear(myLeapYear);
 console.log('this year is leap year',isLeapYear);

 const herLeapYear = 2100;
 const isALeapYear = leapYear(herLeapYear);
 console.log('this year is leap year',isALeapYear);