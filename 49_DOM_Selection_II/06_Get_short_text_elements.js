const getShortTextParagraphs = () => {
  const paragraphs = [...document.querySelectorAll('p')];
  return paragraphs.filter((paragraph) => paragraph.textContent.length < 10);
};

// Sample usage - do not modify
console.log(getShortTextParagraphs());
