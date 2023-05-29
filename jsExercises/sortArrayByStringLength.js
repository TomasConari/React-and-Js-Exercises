/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
*/

const sortByLength = (array) => {
    const orderedArr = array.sort((el1, el2) => el1.length - el2.length);
    return orderedArr;
};