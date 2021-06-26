const createShape = (shape) => {
  for (const prop in shape) {
    console.log(shape[prop]);
  }
};

// Sample usage - do not modify
createShape({
  type: 'square',
  dimensions: [10, 10]
});
createShape({
  type: 'rectangle',
  dimensions: [20, 15]
});
