var hasNumber;
var userInput;
var arrayFromString;
var output;

function testString4Numbers(string) {
  arrayFromString = string.split('');
  arrayFromString.forEach(function(character) {
    if ( parseInt(character) ) {
      hasNumber = true;
    }
  });
}
function isVowel(character) {
  var char = character;
  var isItTrue;
  var vowels = ["a","e","i","o","u"];
  vowels.forEach(function(vowel) {
    if (char.toLowerCase() === vowel) {
      isItTrue = true;
    }
  });
  return isItTrue;
}


function toPigLatin(string) {
   if ( isVowel(arrayFromString[0]) ) {
    output = arrayFromString.join('');
    output += "ay";
  } else {
    arrayFromString.push(arrayFromString.shift());
    output = arrayFromString.join('');
    output += "ay";
  }
  return output;
}


$(document).ready(function() {


  $("form#pigLatin").submit(function(event) {
    hasNumber = false;
    userInput = $("#userInput").val()
    testString4Numbers(userInput);
    if ( hasNumber || userInput === "") {
      alert('Not cool.');
    } else {
      $("#result").html("<h1>" + toPigLatin(userInput) + "</h1>");
    }

    event.preventDefault();
  });
});
