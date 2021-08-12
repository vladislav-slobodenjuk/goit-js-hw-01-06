//  задача 4
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1]; // масштабируемый способ запросить последний элемент в массиве-значении свойства объекта
// Change code above this line

//  задача 5
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment['rating']; //та же логика и для запроса значения в цикле и условии
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line


//  задача 6
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push('trusted'); // добавление строки в массив-значение в объекте


//  задача 7
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: "Jamaica",
    city: 'Kingston',
}


//  задача 9
const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
    [emailInputName]: "henry.carter@aptmail.com", // подстановка имени ключа (свойства) через вычисляемое свойство
    [passwordInputName]: "jqueryismyjam", 
  // Change code above this line
};


//  задача 10
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
    keys.push(key);  // запись в переменную keys массива ключей объекта apartment
}
    
for (const key in apartment) {
    values.push(apartment[key]);  // запись в переменную values массива значений объекта apartment
}


//  задача 11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) { // проверка на собственное свойство
    keys.push(key);
    values.push(apartment[key]);
  }
  // Change code above this line
}


//  задача 12
function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Change code above this line
  return propCount;
}


//  задача 13
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key])  // запись в переменную values массива значений объекта apartment
}


//  задача 14
function countProps(object) {
  // Change code below this line
  let propCount = 0
  const keys = Object.keys(object) // запись в переменную массива ключей объекта

  for (const key of keys) {
      propCount += 1; // подсчет кол-ва свойст у объекта
  }
  return propCount;
  // Change code above this line
}


//  задача 15
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment); // запись в переменную массива ключей - имен свойств
const values = Object.values(apartment); // запись в переменную массива значений свойств


//  задача 16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const salaryArray = Object.values(salaries)

  for (salary of salaryArray) {
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}


//  задача 17
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color['hex']) // или hexColors.push(color.hex)
  rgbColors.push(color['rgb']) // или rgbColors.push(color.rgb]
}


//  задача 18
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (productName === product.name) {
      return product.price
    }
  }
  return null
  // Change code above this line
}

//  задача 19
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];


function getAllPropValues(propName) {
  // Change code below this line
  let propValue = [];

  for (const product of products) {
    const keys = Object.keys(product);
    
    for (const key of keys) {
      if (propName === key) {
        propValue.push(product[propName]);      // запись в переменную propValue массива значений неизвестного свойства propName
      }
    }
  }
  return propValue;
  // Change code above this line
}


//  задача 20
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  let TotalPrice = 0;

  for (const product of products) {
    if (Object.values(product).includes(productName)) {
      TotalPrice = product.price * product.quantity;
    }
  }
  return TotalPrice;
  // Пиши код выше этой строки
}


//  задача 21
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow} = highTemperatures;          // деструктуризация свойств, можно перечислять в любом порядке
// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


//  задача 22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",      // деструктуризация с заданием значения по умолчанию
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


//  задача 23
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {
  yesterday: highYesterday,        // деструктуризвция с заданием нового имени переменной
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


//  задача 24
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {      // деструктуризация свойств прямо в месте объявления color
  // const { hex, rgb } = color;
  hexColors.push(hex);
  rgbColors.push(rgb);
}


//  задача 25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line

// деструктуризация глубокой вложенности, на 2й уровень
const {
  today: { low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', },
  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', },
} = forecast;


//  задача 26
function calculateMeanTemperature(forecast) { // "объект настроек", собирающий входные параметры как один объект вместо неочевидного перечня аргументов в месте вызова
  // Change code below this line

  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: {low: tomorrowLow, high: tomorrowHigh}
   } = forecast;

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


//  задача 27
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);        // spread - распыление массива на отдельные аргументы
const worstScore = Math.min(...scores);


//  задача 28
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];       // объединение нескольких массивов в новый
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


//  задача 29
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings};  // объединение нескольких массивов в новый с перезаписью свойств


//  задача 30
function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
  const finalData = { completed, category, priority, ...data };  // объединение нескольких массивов в новый с перезаписью и добавлением еще свойств со значениями по умолчанию
  // Change code above this line
  return finalData;
}


//  задача 31
// Change code below this line
function add(...args) {              // rest - объединение аргументов в один параметр в виде массива
  let argsSumm = 0;
  for (const arg of args) {
    argsSumm += arg;
    }
  return argsSumm;
  // Change code above this line
}


//  задача 32
// Change code below this line
function addOverNum(extrmNum, ...args) {       // можно объединить "остальные" аргументы после перечисленных параметров
  let total = 0;

  for (const arg of args) {
    if (arg > extrmNum) {
      total += arg;
    }
  }
  return total;
  // Change code above this line
}


//  задача 33
// Change code below this line
function findMatches(matchArray, ...args) {         // ищем совпадения чисел из массива matchArray в перечне аргументов после массива
  const matches = []; // Don't change this line

  for (const arg of args) {

    for (const number of matchArray) {
      if (number === arg) {
        matches.push(number);
      }
    }

  }
  // Change code above this line
  return matches;
}


//  задача 34
const bookShelf = {
  // Change code below this line
  books: ['The last kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    return `Deleting book ${bookName}`
  },
  updateBook(oldName, newName) {
    return `Updating book ${oldName} to ${newName}`
  }
  // Change code above this line
};


//  задача 35
const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
    
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
	
    // Change code above this line
  },
};


//  задача 37
const atTheOldToad = {
  // Change code below this line
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
  // Change code above this line
};

//  задача 38
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    this.potions.push(potionName);
    // Change code above this line
  },
};

//  задача 39
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line

    potionIndex = this.potions.indexOf(potionName);
    this.potions.splice(potionIndex, 1)
    
    // Change code above this line
  },
};


//  задача 40
const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line

    potionIndex = this.potions.indexOf(oldName);
    this.potions.splice(potionIndex, 1, newName);

    // Change code above this line
  },
};


//  задача 41
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
    // const potionIndex = this.potions.indexOf(potionName);

    let potionIndex = 0;

    for (const potion of this.potions) {
      
      if (potion.name === potionName) {  //    if (Object.values(potion).includes(potionName))
        potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1)
        break
      }
      potionIndex = -1;
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
  },
  updatePotionName(oldName, newName) {
    let potionIndex = 0;

    for (const potion of this.potions) {
      
      if (potion.name === oldName) {
        potion.name = newName;
      }
      potionIndex = -1;
    }

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }
    // Change code above this line
  }
}
