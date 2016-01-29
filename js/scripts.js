function HangMan() {
  this.words = ["canal"]; //previously had multiple words but kept screwing with our specs
  this.currentWord = this.chooseWord(); //canal
  this.wordBlanks = this.convertLetter(); // _ _ _ _ _
  this.score = 10;
}

// , "marshmallow", "fish", "school", "chocolate", "lemur", "computer", "sarcasm", "manatee", "carbonation", "gold", "awesome"

//chooses a word at random from above array.
HangMan.prototype.chooseWord = function(){
  return this.word = this.words[Math.floor(Math.random()*this.words.length)];
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
    blanks.push('_ ');
    };
  return this.wordBlanks = blanks;
};

//adds correctly guessed letter in word in correct place.
HangMan.prototype.letterGuess = function(guessedLetter) {
  var word = this.currentWord;
    for (var i = 0; i < word.length; i++) {
      if (word.charAt(i) === guessedLetter) {
      // this.wordBlanks.splice(i, 1, guessedLetter); does the same as below, but more cumbersome
      this.wordBlanks[i] = guessedLetter;
      } else if (word.charAt(i) !== guessedLetter && i === word.length -1) {
       this.score -= 1;
      }
    }
  //return blanks;
};

//NEVER PUT GLOBAL VARIABLES FOR ENTIRE JS = MUST BE WITHIN DOC
// var words = this.words;
// var currentWord = this.chooseWord;
// var score = this.score;

//jQuery begins here:
$(document).ready(function() {
  var hangMan = new HangMan();
  $("#wordHere").append(hangMan.wordBlanks);
  $(".letters").click(function(event){
    var guessedLetter = $(this).val();
    //var blanks = [];
    hangMan.letterGuess(guessedLetter);
    $("#wordHere").empty();
    $("#wordHere").append(hangMan.wordBlanks);
    //hangMan.wrongAnswer(guessedLetter);
    $("#scoreKeeper").append(hangMan.score);

  });

    //end of generateWord function
     event.preventDefault();
});
 //end of doc ready brackets
