var onlyLetters;
var hasNumber;
var userInput;
var  arrayFromString;
var output;
function testString4Numbers(string) {
  arrayFromString = string.split('');
  arrayFromString.forEach(function(character) {
    if ( parseInt(character) ) {
      hasNumber = true;
    } else {
      onlyLetters = true;
    }
  });
}
function isVowel(character) {
  var char = character;
  var isIt;
  var vowels = ["a","e","i","o","u"];
  vowels.forEach(function(vowel) {
    if (char.toLowerCase() === vowel) {
      isIt = true;
    }
  });
  return isIt;
}

function toPigLatin(string) {
   if ( isVowel(arrayFromString[0]) ) {
    arrayFromString.push(arrayFromString.shift());
    output = arrayFromString.join('');
    output += "ay";
    console.log(output);
  } else {
    alert('this does not start with a vowel');
  }
}


$(document).ready(function() {


  $("form#pigLatin").submit(function(event) {
    hasNumber = false;
    userInput = $("#userInput").val()
    testString4Numbers(userInput);
    if ( hasNumber || userInput === "") {
      alert('Not cool.');
    } else {
      toPigLatin(userInput);
    }
    event.preventDefault();
  });
});
