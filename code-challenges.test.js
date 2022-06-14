// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//TODO --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//TODO a) Create a test with expect statements using the variables provided.

describe('leetConvert', () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(leetConvert(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(leetConvert(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(leetConvert(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
//! Good fail
//! leetConvert
//! ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

//! ● leetConvert › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//! ReferenceError: leetConvert is not defined


//TODO b) Create the function that makes the test pass.
// //First we declare the function leetCode that takes in a string parameter
// const leetConvert = (string) => {
// //Try to chain .replace() and use regex to with g-global and i-case insensitive.
//     return string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")
// }

//* PASS  ./code-challenges.test.js
//* leetConvert
//*   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

//* Test Suites: 1 passed, 1 total
//* Tests:       1 passed, 1 total
//* Snapshots:   0 total
//* Time:        0.142 s, estimated 1 s
//* Ran all test suites.
//* ✨  Done in 0.60s.

//TODO Refactor
const leetConvert = string => string.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0")

//* PASS  ./code-challenges.test.js
//* leetConvert
//*   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)

//TODO --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

//TODO a) Create a test with expects statement using the variable provided.
describe('letterSearch', () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(letterSearch(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(letterSearch(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//! Good fail
//! letterSearch
//! ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter

//! ● letterSearch › takes in an array of words and a single letter and returns all the words that contain that particular letter

//! ReferenceError: letterSearch is not defined

//TODO b) Create the function that makes the test pass.
// //First declare function letterSearch that takes in an array and string as parameters
// const letterSearch = (array, string) => {
//     //We can use use the filter method and in order to ignore capitalized letters, we can change the value to lowercase and use indexOf. We don't need to know the index, just that it exists. So as long as we know that it does not evaluate to -1, we are good. We return the output of the filter method.
//    return array.filter(value => value.toLowerCase().indexOf(string) !== -1)
// }
//* PASS  ./code-challenges.test.js
//* leetConvert
//*   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)
//* letterSearch
//*   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter

//* Test Suites: 1 passed, 1 total
//* Tests:       2 passed, 2 total
//* Snapshots:   0 total
//* Time:        0.165 s, estimated 1 s
//* Ran all test suites.
//* ✨  Done in 0.83s.

//TODO Refactor
const letterSearch = (array, string) => array.filter(value => value.toLowerCase().indexOf(string) !== -1)

//* PASS  ./code-challenges.test.js
//* leetConvert
//*   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)
//* letterSearch
//*   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter

//TODO --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//TODO a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

//! Good fail
//! fullHouse
//!   ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house” (1 ms)

//! ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”

//!   ReferenceError: fullHouse is not defined


//TODO b) Create the function that makes the test pass.
//First declare function fullHouse with the parameter array
// const fullHouse = (array) => {
//     //We can attempt to count the duplicates.
//     //We can first sort the array to arrange the numbers in order for ease of use. Mutator
//     array.sort((a,b) => a-b);
//     //Then we can create a set and immediately remove arrays that have a length more than 2 OR 1 unique value
//     let arraySet = new Set(array);
//     //use spread operator to convert set into an array
//     let setArray = [...arraySet];
//     // we can then check to see if how many of each value the array has by checking the first and last instance of the first value in the set. If we subtract the indexes as long as the difference is 1 or 2, it is a full house
//     let firstIndex = array.indexOf(setArray[0]);
//     let lastIndex = array.lastIndexOf(setArray[0]);
//     let indexDiff = lastIndex - firstIndex;
    
//     if (setArray.length !== 2){
//         return false
//     } else if(indexDiff === 0 || indexDiff === 3) {
//         return false
//     } else {
//         return true
//     }
// }

//* PASS  ./code-challenges.test.js
//* leetConvert
//*   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
//* letterSearch
//*   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter
//* fullHouse
//*   ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”

//* Test Suites: 1 passed, 1 total
//* Tests:       3 passed, 3 total
//* Snapshots:   0 total
//* Time:        0.142 s, estimated 1 s
//* Ran all test suites.
//* ✨  Done in 0.70s.

//TODO Refactor
//? Well not much of a refactor. I just tried to see if something else would be shorter, ended up taking a lot more time than I anticipated for doing the same thing.
const fullHouse = array => {
    array.sort((a, b) => a - b)
    let counter = {}
    array.forEach(value => {
        counter[value] = (counter[value] || 0) + 1
    })
    if(Object.keys(counter).length !== 2){
        return false
    } else if(counter[array[0]] === 1 || counter[array[0]] === 4){
        return false
    } else {
        return true
    }
}