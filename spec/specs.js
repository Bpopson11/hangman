describe('HangMan', function(){
  it("will choose a random word from an array", function(){
    var testWord = new HangMan(["canal"], [], 10);
    expect(testWord.chooseWord()).to.equal("canal"); //ADDED MORE WORDS TO THE ARRAY AND THE SPEC ONLY PASSED WHEN IT CHOSE "CAT" AT RANDOM
  });

  it("will choose a random word from an array and split it into individual letters", function() {
    var testWord = new HangMan(["canal"], [], 10);
    expect(testWord.splitWord()).to.eql(["c", "a", "n", "a", "l"]);
  });
});

describe('findLetter', function() {
  it("will identify a letter in an array", function() {
    var testWord = new HangMan(["canal"], [], 10);
    expect(testWord.findLetter()).to.eql('a');
  }); //look into using charAt() to return the actual character based on the array index

  it("will identify multiples of the same letter in an array", function(){
    var testWord = new HangMan(["canal"], [], 10);
    expect(testWord.findMultiple()).to.eql(['a', 'a']);
  });
});

describe('revealLetter', function(){
  it("will convert letters into blanks", function() {
    var testWord = new HangMan(['canal'], [], 10);
    expect(testWord.convertLetter()).to.eql(['_', '_', '_', '_', '_']);
  });
});
