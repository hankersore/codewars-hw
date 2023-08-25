// task 1
// Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

function cap(str) {
    return str.split(" ").map(word => {
      if (word.length > 2) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } 
      else {
        return word;
      }
    }).join(" ");
  }
  
  console.log(cap("this is a function that capitalizes every word"));


//   task 2
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

function int(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!arr.includes(-arr[i])) {
        return arr[i];
      }
    }
  }

  console.log(int([1, 2, 3, -1, -2, -3, 4]));


// task 3
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function remove (arr) {
    return arr.filter((_, index) => index % 2 === 0);
  }

console.log(remove([1, 2, 3, 4, 5]));

// task 4
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function find(str) {
    let index = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        index.push(i);
      }
    }
    return index;
  }

  console.log(find("BeAUtY"));


//   task 5
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// twoSum([1, 2, 3], 4) returns [0, 2] or [2, 0]

function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }

  console.log(twoSum([1, 2, 2], 4));