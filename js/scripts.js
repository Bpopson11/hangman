function HangMan() {
  this.words = ["canal"]; //previously had multiple words but kept screwing with our specs
  this.currentWord = this.chooseWord();
  this.guessedLetters = []
  this.score = 10;
}


//chooses a word at random from above array.
HangMan.prototype.chooseWord = function(){
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  return word;
}

//splits the random word chosen out into individual letters in an array.
HangMan.prototype.splitWord = function() {
  var word = this.currentWord;
  return word.split([]);
}

//find a single guessed letter in word.
HangMan.prototype.findLetter = function(letter) {
  var word = this.currentWord;
    word.split();
    for (var i = 0; i < word.length; i++) {
     if (word[i] === letter) {
       return word.charAt(i);
     }
   }
}

//will find multiple of the same letter in a word if needed.
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
   //needs to be down here outside the for statement
}

//takes selected word and convert the letters to blanks.
HangMan.prototype.convertLetter = function() {
  var word = this.currentWord;
  var blanks = []
  word.split();
    for (var i = 0; i < word.length; i++) {
    blanks.push('_');
    };
  return blanks;
};

//adds correctly guessed letter in word in correct place.
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

//detracts from score for wrong answer.
HangMan.prototype.wrongAnswer = function(guessedLetter) {
  var word = this.currentWord;
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) !== guessedLetter) {
      }
    }
      return this.score-1;
}
