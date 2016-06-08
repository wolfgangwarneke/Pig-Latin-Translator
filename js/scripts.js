var hasNumber;
var userInput;
var wordArray;
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
    for (i=0; i < smallestValue; i++) {
      arrayFromString.push(arrayFromString.splice(0, 1).join(''));
    }
    if ((arrayFromString[0] === "u")  && (arrayFromString[arrayFromString.length-1] === 'q')) {
      arrayFromString.push(arrayFromString.splice(0, (arrayFromString.indexOf('u'))+1).join(''));
      }
    if ( true ) {
    }
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
    wordArray = $("#userInput").val().split(" ");
    wordArray.forEach(function(word) {
      hasNumber = false;
      testString4Numbers(word);
      if ( hasNumber || userInput === "") {
        alert('Not cool.');
      } else {

          $("#result").append("<h1>" + toPigLatin(userInput) + "</h1>");
      }
    });

    event.preventDefault();
  });
});
