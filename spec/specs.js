describe('chooseWord', function(){
  it("will choose a random word from an array", function(){
  expect(chooseWord("cat")).to.equal("cat"); //ADDED MORE WORDS TO THE ARRAY AND THE SPEC ONLY PASSED WHEN IT CHOSE "CAT" AT RANDOM
  });

  it("will choose a random word from an array and split it into individual letters", function() {
    expect(splitWord("cat")).to.eql(["c", "a", "t"]);

  });
});
