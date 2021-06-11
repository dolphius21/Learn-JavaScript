class Rectangle {
  /*
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const makeSquare = () => {
  // TODO: return a new instance of Rectangle with same width and height
  // example: 10 for width and 10 for height
  return new Rectangle(21, 21);
};

// Sample usage - do not modify
console.log(makeSquare());
