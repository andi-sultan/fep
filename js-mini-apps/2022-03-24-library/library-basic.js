function Books(title, author, numOfPages, read) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}. ${this.numOfPages} pages. ${
      this.read ? "Read" : "Not Read"
    }`;
  };
}

harryPotter = new Books("harry potter", "J.K. Rowling", "400", true);
console.log(harryPotter.info());
