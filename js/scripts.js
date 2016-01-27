function chooseWord() {
  var words = ["cat"];
  var word = words[Math.floor(Math.random()*words.length)];
  return word;
}

function splitWord() {
  var words = ["cat"];
  var wordSplit = [];
  var word = words[Math.floor(Math.random()*words.length)];
  wordSplit = word.split([]);
  return wordSplit;
}
