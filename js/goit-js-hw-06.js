//  method forEach()

//  задача 1
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки

    //   orderedItems.forEach(price => {
    //       totalPrice += price;
    //   });

    orderedItems.forEach(price => (totalPrice += price)); // запись через стрелочную функция с неявным возвратом

    return totalPrice;
}

//  задача 2
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    return filteredNumbers;
}

//  задача 3
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки

    firstArray.forEach(elem => {
        if (secondArray.includes(elem)) {
            commonElements.push(elem);
        }
    });

    return commonElements;
}

// Объявление стрелочных функций через присвоение переменной

//  задача 7
const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach(number => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    return filteredNumbers;
};

//  задача 8
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
    // Пиши код ниже этой строки

    firstArray.forEach(elem => {
        if (secondArray.includes(elem)) {
            commonElements.push(elem);
        }
    });

    return commonElements;
};

//  задача 9
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
    const newNumbers = [];

    // numbers.forEach(num => {
    //     if (num % 2 === 0) {
    //         newNumbers.push((num + value));
    //     } else {
    //         newNumbers.push(num);
    //     }

    // })

    numbers.forEach(num => (num % 2 === 0 ? newNumbers.push(num + value) : newNumbers.push(num)));

    return newNumbers;
}
// ========================================
//

// method map

//
//  задача 10
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => planet.length);

//  задача 11
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    {
        title: 'Сон смешного человека',
        author: 'Федор Достоевский',
        rating: 7.75,
    },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const titles = books.map(book => book.title);
// const titles = books.map(({ title }) => title);  //  деструктуризация свойства, берется в дополнительные скобки

//  задача 12
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое'],
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика'],
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика'],
    },
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);

//  задача 13
const getUserNames = users => {
    return users.map(user => user.name);
};

// const getUserNames = users => {
//     return users.map(({ name }) => name)
// };

//  задача 14
const getUserEmails = users => {
    return users.map(user => user.email);
};

// const getUserEmails = users => users.map(user => user.email);  // то же с неявным возвратом
// const getUserEmails = users => users.map(({ email }) => email);  // то же с деструктуризацией свойства email

// ========================================================

// method filter

//  задача 15
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 !== 0);

//  задача 16
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое'],
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика', 'мистика'],
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика', 'приключения'],
    },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
    (book, index, array) => array.indexOf(book) === index, // способ отфильтровать только уникальные значения
);

//  задача 17
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    {
        title: 'Сон смешного человека',
        author: 'Федор Достоевский',
        rating: 7.75,
    },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const topRatedBooks = books.filter(({rating}) => rating >= MIN_RATING);

const booksByAuthor = books.filter(book => book.author === AUTHOR);
// const booksByAuthor = books.filter(({author}) => author === AUTHOR);

//  задача 18
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);
};

//  задача 19
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age >= minAge && user.age <= maxAge);
const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter(({ age }) => age >= minAge && age <= maxAge);

//  задача 20
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends.includes(friendName))
// };
const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName));

//  задача 21
// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends);
//     const uniqueFriends = allFriends.filter((friend, index, arr) => arr.indexOf(friend) === index);
//     return uniqueFriends;
// };

// const getFriends = (users) => {
//     return users.flatMap(user => user.friends).filter((friend, index, arr) => arr.indexOf(friend) === index);
// };

const getFriends = users =>
    users
        .flatMap(({ friends }) => friends)
        .filter((friend, index, arr) => arr.indexOf(friend) === index);

//  задача 22
const getActiveUsers = users => users.filter(user => user.isActive);

//  задача 23
// const getInactiveUsers = (users) => users.filter(user => !user.isActive);
const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);

// =================================

// method find

//  задача 24
const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    {
        title: 'Сон смешного человека',
        author: 'Федор Достоевский',
        rating: 7.75,
    },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

//  задача 25
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// ======================================

// method every

//  задача 26
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(num => num % 2 === 0); // проверка всех элементов на четность
const eachElementInFirstIsOdd = firstArray.every(num => num % 2 !== 0); // проверка всех элементов на НЕчетность

const eachElementInSecondIsEven = secondArray.every(num => num % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(num => num % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(num => num % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(num => num % 2 !== 0);

//  задача 27
const isEveryUserActive = users => users.every(user => user.isActive); // все ли пользователи онлаин

// =====================================

// method some

//  задача 28
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(num => num % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(num => num % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(num => num % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(num => num % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(num => num % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(num => num % 2 !== 0);

//  задача 29
const isAnyUserActive = users => users.some(user => user.isActive); // true

// ====================================
//

// method reduce
//

//  задача 30
const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((overalTime, time) => overalTime + time, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

//
//  задача 31
const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
    (result, { playtime, gamesPlayed }) => result + playtime / gamesPlayed,
    0,
);

//
//  задача 32
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);

//
//  задача 33
const getTotalFriendCount = users =>
    users.reduce((friendCount, user) => friendCount + user.friends.length, 0);

// ==============================================
//

// method sort

//
//  задача 34
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский'];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
const alphabeticalAuthors = [...authors].sort();

//
//  задача 35
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();
const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//
//  задача 36
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт',
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort();
const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a)); //

//
//  задача 37
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author)); // метод для сортировки строк по алфавиту firstString.localeCompare(secondString)
const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

//
//  задача 38
const sortByAscendingBalance = users => {
    return [...users].sort((a, b) => a.balance - b.balance);
};

//
//  задача 39
const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

//
//  задача 40
const sortByName = users => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
// ==============================
//
// Chaining - цепочки методов
//
//  задача 41
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books
    .filter(book => book.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((a, b) => a.localeCompare(b));

//
//  задача 42
const getNamesSortedByFriendCount = users => {
    return [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

//
//  задача 43
const getSortedFriends = users => {
    return users
        .flatMap(user => user.friends)
        .filter((elem, index, arr) => arr.indexOf(elem) === index)
        .sort();
};

//
//  задача 44
const getTotalBalanceByGender = (users, gender) => {
    return users
        .filter(user => user.gender === gender)
        .reduce((acc, user) => acc + user.balance, 0);
};
