/** product: calculate the product of an array of numbers. */

function product(nums) {
    if(nums.length === 0){
      return 1;
    }

    return nums[0]*product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 1){
    return words[0].length;
  }

  let long = longest(words.slice(1));

  return Math.max(words[0].length, long);
  //return (words[0].length >= long.length) ? words[0] : long
}

/** everyOther: return a string with every other letter. */

function everyOther(str, newString = "") {
  if (str.length === 0){
    return newString;
  }
  newString += str[0];
  return everyOther(str.slice(2), newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, forward = "", backward = "") {
  if (str.length === 1){
    return (forward + str[0]) == (backward + str[0])
  } else if (str.length === 0){
    return (forward == backward)
  }

  forward += str[0]
  backward += str[str.length - 1]

  return isPalindrome(str.slice(1, -1), forward, backward)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  /* if (!val){
    return -1;
  } else if (idx >=  arr.length){
    return -1;
  } else if (arr[idx] == val){
    return idx;
  }
  
  idx++
  return findIndex(arr, val, idx); */
  return idx >= arr.length || arr[idx] === val ? (arr[idx] === val ? idx : -1) : findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newString = "") {
  if (str.length === 0){
    return newString;
  }
  newString += str[str.length - 1];
  return revString(str.slice(0, -1), newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let newArr = [];
  for (let key in obj){
    const value = obj[key]
    if (typeof value === "string"){
      newArr.push(value);
    }
    if (typeof value === "object" && value !== null) {
      newArr = newArr.concat(gatherStrings(value));
    }
  }
  return newArr
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length) {
  if (start > end) return -1;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === val) return middle;
  if (arr[middle] > val) return binarySearch(arr, val, start, middle -1);
  return binarySearch(arr, val, middle + 1, end)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
