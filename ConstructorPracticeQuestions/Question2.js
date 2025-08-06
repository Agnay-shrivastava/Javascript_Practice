// Make a Book constructor

// Properties: title, author, pages

// Add a method summary() that returns "Title by Author, Pages pages".

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  

  this.summary = function (){
    const BookSummary = {};
    BookSummary.title = this.title
    BookSummary.author = this.author
    BookSummary.pages = this.pages

    return BookSummary;

  }

}

const book1 = new Book("Harry Potter and the prisoner of azkaban", "J.K.Rowling", 546);
console.log(book1.summary());
console.log(book1 instanceof Book);

// this.summary = () => {
  //   return `${this.title} by ${this.author}, ${this.pages} pages.`;
  // }