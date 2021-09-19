const greeting = 'How are you?';
function myString(text){
    for(const letter of text){
        console.log(letter);
    }
}
const reversed = myString(greeting);
console.log(reversed);