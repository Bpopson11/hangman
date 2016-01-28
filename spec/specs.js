describe('HangMan', function(){
  it("will choose a random word from an array", function(){
    var testWord = new HangMan();
    expect(testWord.chooseWord()).to.equal("canal"); //ADDED MORE WORDS TO THE ARRAY AND THE SPEC ONLY PASSED WHEN IT CHOSE "CANAL" AT RANDOM
  });

  it("will choose a random word from an array and split it into individual letters", function() {
    var testWord = new HangMan();
    expect(testWord.splitWord()).to.eql(["c", "a", "n", "a", "l"]);
  });
});

describe('findLetter', function() {
  it("will identify a letter in an array", function() {
    var testWord = new HangMan();
    expect(testWord.findLetter("a")).to.eql('a');
  }); //look into using charAt() to return the actual character based on the array index

  it("will identify multiples of the same letter in an array", function(){
    var testWord = new HangMan();
    expect(testWord.findMultiple("a")).to.eql(['a', 'a']);
  });
});

describe('revealLetter', function(){
  it("will convert letters into blanks", function() {
    var testWord = new HangMan();
    expect(testWord.convertLetter()).to.eql(['_', '_', '_', '_', '_']);
  });

  it("will reveal a letter if guessed correctly", function(){
    var testWord = new HangMan();
    expect(testWord.letterGuess("a")).to.eql(['_', 'a', '_', 'a', '_'])
  });
});

describe('penalty', function(){
    it("will decrease overall score per each wrong answer", function(){
    var testWord = new HangMan();
    expect(testWord.wrongAnswer(10)).to.eql(9)
  });
});
