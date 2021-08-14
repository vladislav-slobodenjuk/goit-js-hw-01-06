// Прототипы

//  задача 4
function Car({brand, model, price}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}


//  задача 5
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
    return this.price;
}

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}


//  задача 6
function Storage(items) {
    this.items = items;    
}

Storage.prototype.getItems = function () {
    return this.items;
}

Storage.prototype.addItem = function (newItem) {
    this.items.push(newItem);
}

Storage.prototype.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1)
}


//  задача 7
function StringBuilder(baseValue) {
    this.value = baseValue;
}

StringBuilder.prototype.getValue = function () {
    return this.value;
}

StringBuilder.prototype.padEnd = function (str) {
    this.value = this.value + str;
    return this.value;
}

StringBuilder.prototype.padStart = function (str) {
    this.value = str + this.value;
    return this.value;
}

StringBuilder.prototype.padBoth = function (str) {
    this.value = str + this.value + str
    return this.value;
}


// Классы

//  задача 9
class Car {
    constructor({ brand, model, price }) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}


//  задача 10
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    }
    
    getPrice() {
        return this.price;
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }
}

//  задача 11
class Car {
    #brand;  // объявление скрытого свойства, доступного только внутри класса. Объявлять обязательно до конструктора
    model;   //объявление публичных свойств класса, которые используятся внутри; улучшает читабельность
    price;
    constructor({ brand, model, price }) {
        this.#brand = brand;
        this.model = model;
        this.price = price;
    }

    getBrand() {
        return this.#brand
    }

    changeBrand(newBrand) {
        this.#brand = newBrand;
    }
}


//  задача 12
class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(item) {
        const itemIndex = this.#items.indexOf(item);
        this.#items.splice(itemIndex, 1);
    }
}


//  задача 13
class StringBuilder {
    #value;
    constructor(baseValue) {
        this.#value = baseValue;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
    }

    padBoth(str) {
        this.padStart(str);
        this.padEnd(str);
    }
}


//  Геттеры и Сеттеры

//  задача 14
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }
                                        //   добавление геттеров и сеттеров. Они - функции, и внутри можно добавть условие проверки
  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}


//  задача 15
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;  // задаем статические свойство - доступно только классам, но не его экземплярам
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
      if (newPrice <= Car.MAX_PRICE) {  // указываем четко свойство класса, через this внутри экземпляра свойство не доступно
        this.#price = newPrice;
      }
  }
  // Пиши код выше этой строки
}


//  задача 16
class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
    static checkPrice(price) {
        if (price > Car.#MAX_PRICE ) {
            return 'Внимание! Цена превышает допустимую.'
        }
        return 'Всё хорошо, цена в порядке.'
    }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

// Наследование классов

//  задача 17
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };

    constructor(email) {
        super(email);
      }    
}


//  задача 18
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  constructor({email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
  }


  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser


//  задача 19
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;
  blacklistedEmails = [];

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 