// Create a constructor function Rectangle

// With length and width

// Method to calculate area and perimeter

function Rectangle (length , breadth){
  this.length = length,
  this.breadth = breadth,
  this.findArea = ()=>{
    return `the area of rectangle is ${length*breadth} unit sq`
  }

}

const rectangle1 = new Rectangle(5, 7);
console.log(rectangle1.findArea());