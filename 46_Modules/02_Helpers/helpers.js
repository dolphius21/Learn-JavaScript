export class Helpers {
  constructor(word) {
    this.word = word;
  }

  upperCase() {
    return this.word.toUpperCase();
  }

  lowerCase() {
    return this.word.toLowerCase();
  }

  capitalize() {
    return this.word[0].toUpperCase() + this.word.substring(1).toLowerCase();
  }
}
