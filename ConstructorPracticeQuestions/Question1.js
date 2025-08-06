// Create a Car constructor

// Properties: brand, model, year

// Add a method getAge() that returns how old the car is.

function Car(brand , model , year){
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.getAge = ()=>{
    const now = new Date();
    return now.getFullYear() - this.year;

  }

}

const car1 = new Car("Honda", "city", 2020);
console.log(car1.getAge());