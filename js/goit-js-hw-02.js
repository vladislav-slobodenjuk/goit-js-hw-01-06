//  задача 2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }
    
  return "Access denied, wrong password!";
  // Change code above this line
}


//  задача 3
function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return "Your order is empty!";
    }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
    }

    return "The order is accepted, our manager will contact you";

  // Change code above this line
}


//  задача 5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];


//  задача 8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];


//  задача 9
function getExtremeElements(array) {
  const newArray = [array[0], array[array.length - 1]];
  return newArray;
}


//  задача 10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  
  words = message.split(delimeter)
  return words;
}


//  задача 11
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
  
  const price = pricePerWord * message.split(" ").length;
  return price

   // Change code above this line
}


//  задача 12
function makeStringFromArray(array, delimeter) {
  let string;

  string = array.join(delimeter);
  return string;
}


//  задача 13
function slugify(title) {
  // Change code below this line

  const slugified = title.toLowerCase().split(" ").join("-");
  return slugified;
}


//  задача 13
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);


//  задача 16
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
  const newArray = firstArray.concat(secondArray).slice(0, maxLength);
  return newArray;
    // Change code above this line
  }


//  задача 18
function calculateTotal(number) {
 // Change code below this line
  let summ = 0;
  for (let i = 1; i <= number; i += 1) {
    summ += i;
  }
  // console.log(summ);
  return summ;
}


//  задача 20
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // for (number of order) {
  //   total += number;
  // }

  for (i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}


//  задача 21
function findLongestWord(string) {
  // Change code below this line
  const words = string.split(" ")
  let longestWord = words[0];

  for (const word of words) {
    if (word.length <= longestWord.length) {
      continue;
    }
    longestWord = word;
  }

  return longestWord;
}


//  задача 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  for (i = min; i <= max; i += 1) {
    numbers.push(i)
  }
  // Change code above this line
  return numbers;
}


//  задача 23
function filterArray(numbers, value) {
   // Change code below this line
  const biggerNumbers = [];

  for (const number of numbers) {
    if (number <= value) {
      continue;
    }
    biggerNumbers.push(number);
  }
  
  return biggerNumbers;
}

// вариант без for of // задача 27
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}



//  задача 25
function getCommonElements(array1, array2) {
  // Change code below this line
  const commonElements = [];

  for (const element of array1) {
    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }
  
  return commonElements;
 // Change code above this line
}

//  задача 25 // способ сломать проверку на случайных массивах
// function getCommonElements(array1, array2) {
  // const commonElements = [];

  // for (const element1 of array1) {
    
  //   for (const element2 of array2) {
  //     if (element2 !== element1) {
  //       continue;
  //     }
  //     commonElements.push(element2);
  //   }
  // }
  // return commonElements;
// }


//  задача 29
function getEvenNumbers(start, end) {
   // Change code below this line
  const evenNumbers = [];
  
  for (let i = start; i <= end; i += 1) {
    if (i % 2 !== 0) {
      continue;
    }
    evenNumbers.push(i);
  }
  
  return evenNumbers;
}


//  задача 32
function includes(array, value) {
  // Change code below this line
  for (const content of array) {
    if (content === value)
      return true
  }
  return false
}

