var hasNumber;
var userInput;
var arrayFromString;
var output;
var vowels = ["a","e","i","o","u"];
var wordsArray;

Array.min = function( array ){
    return Math.min.apply( Math, array );
};

function testString4Numbers(string) {
  wordsArray = string.split(' ');
  arrayFromString = string.split('');
  arrayFromString.forEach(function(character) {
    if ( parseInt(character) ) {
      hasNumber = true;
    }
  });
}



function toPigLatin(string) {
  arrayFromString = string.split('');
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
    $('#result p').empty();
    hasNumber = false;
    testString4Numbers($("#userInput").val());
    if ( hasNumber || userInput === "") {
      alert('Not cool.');
    } else {
        if (wordsArray.length > 0) {
          $("#result p").append(toPigLatin(wordsArray.shift()) + " ");
        }
        if (wordsArray.length > 0) {
          $("#result p").append(toPigLatin(wordsArray.shift()) + " ");
        }
        if (wordsArray.length > 0) {
          $("#result p").append(toPigLatin(wordsArray.shift()) + " ");
        }
        if (wordsArray.length > 0) {
          $("#result p").append(toPigLatin(wordsArray.shift()) + " ");
        }
        if (wordsArray.length > 0) {
          $("#result p").append(toPigLatin(wordsArray.shift()) + " ");
        }
        if (wordsArray.length > 0) {
          $("#result p").append(toPigLatin(wordsArray.shift()) + " ");
        }
        
    }

    event.preventDefault();
  });
});
