// Write your code below


// const uniqueCharacters = (word) => {
//     for(let i = 0; i < word.length; i++) {
//         if(word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(uniqueCharacters(word));

const hasUnique = str => {
    for(let i = 0; i < str.length; i++){
        for(let j = i +1; j < str.length; j++){
            console.log(`the character at index i is ${str[i]}`)
            console.log(`The character at index j is ${str[j]}`)
            console.log("===================")
        }
        return false
    }
    return true
}

console.log(hasUnique("Moonday"))
console.log(hasUnique("Monday"))
