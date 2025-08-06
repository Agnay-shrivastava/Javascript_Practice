//practicing prototype and constructor function

function Person(name, age) {
  (this.name = name), (this.age = age);
  this.introduction = () => {
    return `Hello my name is ${this.name} and i am ${this.age} years old.`;
  };
  this.friends = [];
  this.addFriend = (friend) => {
    this.friends.push(friend);
  };

  this.hasFriend = (friend) => {
    return this.friends.includes(friend);
  };
}

const person1 = new Person("Agnay", 22);
console.log(person1.introduction());

console.log(person1.friends);
person1.addFriend("Rohit");
console.log(person1.friends);
person1.addFriend("Sahil");
console.log(person1.friends);

person1.hasFriend("sahil");
console.log(person1.hasFriend("Sahil"));


