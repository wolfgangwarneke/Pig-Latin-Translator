var onlyLetters;
var hasNumber;
var userInput;
function testString4Numbers(string) {
  var arrayFromString = string.split('');
  arrayFromString.forEach(function(character) {
    if ( parseInt(character) ) {
      hasNumber = true;
    } else {
      onlyLetters = true;
    }
  });
}

$(document).ready(function() {


  $("form#pigLatin").submit(function(event) {
    userInput = $("#userInput").val()
    testString4Numbers(userInput);
    if ( hasNumber ) {
      alert('Has numbers.  We don\'t want that');
    } else {
      alert('Doesn\'t have numbers');
    }
    event.preventDefault();
  });
});
