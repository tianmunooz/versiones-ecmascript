//Declarando
class User {}
//Haciendo una instnacia
/* const newUsuer = new User(); */

class user {
  //Metodos
  greeting() {
    return 'Hello';
  }
}

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor

class user {
  //Constructor
  constructor() {
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'Hello';
  }
}

const david = new user();

//this

class user {
  constructor(name) {
    this.name = name;
  }
  // Metodos()
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());

//Setters Getters

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //Metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.greeting());
console.log(bebeloper1.uAge);
console.log((bebeloper1.uAge = 20));
