const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.filter(person => person.name === name)[0];

const findHondas = cars => cars.filter(car => car.manufacturer === "Honda");

const averageAge = people => Math.round(people.reduce((total, person) => total + ((person.age/people.length)), 0));

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: function(pal) {
      return `Hi ${pal}, my name is ${this.name} and I am ${this.age}!`
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
