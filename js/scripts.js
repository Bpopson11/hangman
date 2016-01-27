function HangMan() {
  this.words = ["canal"]; //previously had multiple words but kept screwing with our specs
  this.currentWord = this.chooseWord();
  this.guessedLetters = []
  this.score = 10;
}



HangMan.prototype.chooseWord = function(){
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  return word;
}


HangMan.prototype.splitWord = function() {
  var word = this.currentWord;
  return word.split([]);
}

HangMan.prototype.findLetter = function(letter) {
  var word = this.currentWord;
    word.split();
    for (var i = 0; i < word.length; i++) {
     if (word[i] === letter) {
       return word.charAt(i);
     }
   }
}

HangMan.prototype.findMultiple = function(guessedLetter) {
  var word = this.currentWord;
  var letterArray = [];
  // var letterString = ""
  for (var i = 0; i <= word.length; i++) {
     if (word.charAt(i) === guessedLetter) {
       letterArray.push(word.charAt(i));
     }
   }
   return letterArray;
}

HangMan.prototype.convertLetter = function() {
  var word = this.currentWord;
  var blanks = []
  word.split();
    for (var i = 0; i < word.length; i++) {
    blanks.push('_');
    };
  return blanks;
};

HangMan.prototype.letterGuess = function(guessedLetter) {
  var word = this.currentWord;
  var blanks = []
    for (var i = 0; i < word.length; i++) {
      blanks.push('_');
      if (word.charAt(i) === guessedLetter) {
      blanks.splice(i, i, guessedLetter);
    }
  }
  return blanks;
}
