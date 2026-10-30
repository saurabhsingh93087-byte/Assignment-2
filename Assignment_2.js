// 01.Reverse a string.
function reverseString(str) {
    let reversed = "";

    for(let i=str.length-1; i>=0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));    


// 02.Check whether a sting is a palindrome.
function isPalindrome(str) {
    let reversed = "";

    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return str === reversed;
}
console.log(isPalindrome("madam"));


//03.count vowels & consonents in a string.
function countVowelsAndConsonents(str) {
    let vowels = 0;
    let consonents = 0;

    str = str.toLowerCase();

    for(let i=0; i<str.length; i++){
      if(str[i] >= 'a' && str[i] <= 'z'){
        if(
            str[i] == 'a'||
            str[i] == 'e'||
            str[i] == 'i'||
            str[i] == 'o'||
            str[i] == 'u' 
        ) {
            vowels++;
        } else {
            consonents++;
        }
    }
}

console.log("Vowels = ",vowels);
console.log("Consonents = ",consonents);
}
countVowelsAndConsonents("Godzilla") 


//04.find the second larest distinct number in an array.
function self_sort(arr){
    const original_arr_length = arr.length
    let sorted_arr = []
    for (let index = 0; index <original_arr_length; index++) {
        let num1 = arr[0]    
        for (let i = 0; i < arr.length; i++) {
            let num2 = arr[i]
            if (num1>=num2){
                num1=num2
            }
            else if (num1<num2){
                num1= num1
            }
        }
        sorted_arr.push(num1)
        arr.splice(arr.indexOf(num1),1)
    }
    return sorted_arr
}

// console.log(self_sort([1,2,3,4]));


function second_largest(arr){
    let sorted_arr = self_sort(arr)
    return sorted_arr[sorted_arr.length-2]
}

console.log(second_largest([1,2,3,4]));



//05.Write a function to remove duplicate elements from an array without using Set.


function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));


//06.sum df all even numbers.
function evenSum(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(evenSum([2,4,6,8,10]));


//07.count frequency of a given array.
function frequency(arr,target) {
    let count = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            count++;
        }
    }
    return count;
}
console.log(frequency([2,4,6,2,8,10,2],2));


//08.check whether two strings are anagrams.
function isAnagram(str1,str2) {
    if(str1.length !== str2.length){
        return false;
    }
    let x = str1.toLowerCase().split("").sort().join("");
    let y = str2.toLowerCase().split("").sort().join("");

    return x === y;
}
console.log(isAnagram("listen","silent"));


//9. Write a function to move all zeros to the end of an array 
// while maintaining the order of non-zero elements. 


function moveZeros(arr) {
    let result = [];
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else {
            result.push(arr[i]);
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }

    return result;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
