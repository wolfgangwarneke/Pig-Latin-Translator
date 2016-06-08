var hasNumber;
var userInput;
var arrayFromString;
var output;
var vowels = ["a","e","i","o","u"];

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

function testString4Numbers(string) {
  arrayFromString = string.split('');
  arrayFromString.forEach(function(character) {
    if ( parseInt(character) ) {
      hasNumber = true;
    }
  });
}

function toPigLatin(string) {
   if ( isVowel(arrayFromString[0]) ) {
    output = arrayFromString.join('');
    output += "ay";
  } else {
    var vowelIndexVals = [];
    var thisIndex;
    var smallestValue;
    vowels.forEach(function(vowel) {
      thisIndex = arrayFromString.indexOf(vowel, 1);
      if ( thisIndex != -1 ) {
        vowelIndexVals.push(thisIndex);
      }
    });
    smallestValue = Array.min(vowelIndexVals);
    arrayFromString.push(arrayFromString.splice(0, smallestValue).join(''));
    output = arrayFromString.join('');
    output += "ay";
  }
  return output;
}

function isVowel(character) {
  var isItTrue;
  vowels.forEach(function(vowel) {
    if (character.toLowerCase() === vowel) {
      isItTrue = true;
    }
  });
  return isItTrue;
}

$(document).ready(function() {

  $("form#pigLatin").submit(function(event) {
    hasNumber = false;
    testString4Numbers($("#userInput").val());
    if ( hasNumber || userInput === "") {
      alert('Not cool.');
    } else {
      $("#result").html("<h1>" + toPigLatin(userInput) + "</h1>");
    }

    event.preventDefault();
  });
});
