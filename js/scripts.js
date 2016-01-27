function HangMan(words, guessedLetters, score) {
  this.words = ["cat", "dog"];
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
//
// function splitWord() {
//   var words = ["cat"];
//   var wordSplit = [];
//   var word = words[Math.floor(Math.random()*words.length)];
//   wordSplit = word.split([]);
//   return wordSplit;
// };
//
// function findLetter(letterArray) {
//   //var testArray = ["c", "a", "t"];
//   for (var i = 0; i <= letterArray.length; i++) {
//     console.log(letterArray[i]);
//
//     // if (testArray[i] === "a") {
//     //   return [i];
//     // };
//   };
//
// };
//
// function findLetters(){
//   var testArray = ['c', 'a', 'n', 'a', 'l']
//   for (var i = 0; i <= testArray.length; i++) {
//     if (testArray[i] === 'a') {
//       return ['a', 'a']
//     };
//   };
// };
