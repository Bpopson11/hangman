function HangMan(words, guessedLetters, score) {
  this.words = ["canal"]; //previously had multiple words but kept screwing with our specs
  this.guessedLetters = [];
  this.score = 10;
}

HangMan.prototype.chooseWord = function(){
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  return word;
}


HangMan.prototype.splitWord = function() {
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  return word.split([]);
}

HangMan.prototype.findLetter = function() {
  var word = this.words[Math.floor(Math.random()*this.words.length)];
    word.split();
    for (var i = 0; i < word.length; i++) {
     if (word[i] === "a") {
       return word.charAt(i);
       console.log(word);
     }
   }
}

HangMan.prototype.findMultiple = function() {
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  var letterArray = [];
  // var letterString = ""
  for (var i = 0; i <= word.length; i++) {
     if (word.charAt(i) === "a") {
       letterArray.push(word.charAt(i));
     }
   }
   return letterArray;
}

HangMan.prototype.convertLetter = function() {
  var word = this.words[Math.floor(Math.random()*this.words.length)];
  var blanks = []
  word.split();
    for (var i = 0; i < word.length; i++) {
    blanks.push('_');
    };
  return blanks;
};
