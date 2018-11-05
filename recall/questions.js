//var result = ['bananas', 'apples', 'pears', 'avocados'];
//
//var selectElementsA = function (array) {
//    var selectA = [];
//    for (var i = 0; i < array.length; i++) {
//        if (array[i].charAt(0) == "a") {
//            selectA.push(array[i]);
//        }
//    }
//    return selectA;
//};
//console.log(selectElementsA(result));
//
//var result = ['john', 'david', 'omar', 'fred', 'idris', 'angela'];
//
//var selectElementsStartingWithVowel = function (array) {
//    var vowels = ["a", "e", "i", "o", "u", "y"];
//    var selectVowels = [];
//    for (var i = 0; i < array.length; i++) {
//
//        for (var x = 0; x < vowels.length; x++) {
//            if (array[i].charAt(0) == vowels[x]) {
//                selectVowels.push(array[i]);
//            }
//        }
//    }
//    return selectVowels;
//};
//
//console.log(selectElementsStartingWithVowel(result));
//
//var result = ['a', 'b', null, null, false, 0];
//
//var removeNullElements = function (array) {
//
//    var newArray = array.filter(function (empty) {
//        return (empty !== null);
//    });
//    return newArray;
//};
//console.log(removeNullElements(result));
//
//var result = ['a', 'b', null, null, false, 0];
//
//var removeNullAndFalseElements = function (array) {
//    var newArray = array.filter(function (empty) {
//        return (empty !== null && empty !== false);
//    });
//    return newArray;
//};
//
//console.log(removeNullAndFalseElements(result));
//
//var result = ['dog', 'monkey', 'elephant', 'kayak'];
//
//var reverseWordsInArray = function (array) {
//    var reversedWord = [];
//    for (var i = 0; i < array.length; i++) {
//        var wordString = Array.from(array[i]);
//        var reversedWordString = wordString.reverse();
//        var reversedArray = reversedWordString.join('');
//        reversedWord.push(reversedArray);
//    }
//    return reversedWord;
//};
//
//console.log(reverseWordsInArray(result));
//
//
//var result = ['Jon', 'Tyrion', 'Daenerys'];
//
//var everyPossiblePair = function (array) {
//    var combiArray = [];
//    for (var i = 0; i < array.length - 1; i++) {
//
//        for (var j = i + 1; j < array.length; j++) {
//            combiArray.push(array[i] + ' , ' + array[j]);
//        }
//    }
//    return combiArray;
//};
//console.log(everyPossiblePair(result));
//
//
//var result = [6, 2, 3, 4, 5, 1, 7, 8];
//
//var allElementsExceptFirstThree = function (array) {
//    var filtered = array.filter(num => num > 3);
//    return filtered;
//};
//console.log(allElementsExceptFirstThree(result));
//
//var result = [2, 3, 4, 5];
//var nbAdd = 1;
//var addElementToBeginning = function (array, element) {
//    array.unshift(element);
//    return array;
//};
//console.log(addElementToBeginning(result, nbAdd));
//
////var result = ['Lannister', 'Stark', 'Greyjoy', 'Targaryen'];
////
////var sortByLastLetter = function (array) {
////    var newArray = [];
////    for (i = 0; i < array.length; i++) {
////    
////        var revArray = array[i].reverse();
////        newArray.push(revArray);
////    }
////   return newArray;               ????
////    
////};
////console.log(sortByLastLetter(result));
//
//var resultOne = 'dragon';
//var resultTwo = 'snake';
//
//var getFirstHalf = function (string) {
//
//    //var firstPart = string.substr(0, 3); OR 
//    var firstPart2 = string.slice(0, 3);
//
//    return firstPart2;
//};
//console.log(getFirstHalf(resultTwo));
//
//
//var resultOne = 5;
//var resultTwo = -3;
//var makeNegative = function (number) {
//    if (number > 0) {
//        number *= -1;
//    }
//    return number;
//};
//console.log(makeNegative(resultTwo));
//console.log(makeNegative(resultOne));
//
//var result = ['kayak', 'noon', 'khaleesi', 'hodor', 'racecar', 'abcbc', 'abcba'];
//
//var numberOfPalindromes = function (array) {
//    var palindrome = [];
//    for (var i = 0; i < array.length; i++) {
//        var arrayOneWord = Array.from(array[i]);
//        var revWord = arrayOneWord.reverse();
//        var okWord = revWord.join('');
//        if (okWord === array[i].toString()) {
//            palindrome.push(array[i]);
//        }
//    }
//    return palindrome;
//};
//console.log(numberOfPalindromes(result));
//
//var result = ['winter', 'is', 'coming'];
//
//var shortestWord = function (array) {
//    var shortWord = array.reduce(function (prev, next) {
//        if (prev.length < next.length) {
//            return prev;
//        } else if (prev.length === next.length) {
//            return prev;
//        } else {
//            return next;
//        }
//    });
//    return shortWord;
//};
//console.log(shortestWord(result));
//
//var result = ['A', 'Lannister', 'always', 'pays', 'his', 'debts'];
//var longestWord = function (array) {
//
//    var longWord = array.reduce(function (prev, next) {
//        if (prev.length > next.length) {
//            return prev;
//        } else if (prev.length === next.length) {
//            return prev;
//        } else {
//            return next;
//        }
//    });
//    return longWord;
//};
//console.log(longestWord(result));
//
//var result = [1, 3, 5, 6, 2, 8];
//var sumNumbers = function (a, b, c, x, y, z) {
//    var sumResult = a + b + c + x + y + z;
//    return sumResult;
//};
//console.log(sumNumbers(...result));
//
////var repeatElements = function (array) {   --------------------------
////    return 'Write your method here';
////}
////
////var stringToNumber = function (string) {  ---------------------------
////    return 'Write your method here';
////}
//
//
//var result = [10, 15, 25];
//var calculateAverage = function (array) {
//    var moyenne = 0;
//    for (var i = 0; i < array.length; i++) {
//        moyenne += array[i];
//    }
//    return moyenne / array.length;
//};
//console.log(calculateAverage(result));
//
//
//var result = [1, 3, 5, 4, 1, 2, 6, 2, 1, 3, 7];
//var getElementsUntilGreaterThanFive = function (array) {
//    var filtered = array.filter(num => num < 5);
//    return filtered;
//};
//console.log(getElementsUntilGreaterThanFive(result));
//
//var result = ['Jaime', 'Lannister', 'Robb', 'Stark', 'Joffrey', 'Baratheon'];
//
//var convertArrayToObject = function (array) {
//
//    var nvlObjet = {};
//    for (var i = 0; i < array.length; i += 2) {
//        nvlObjet[array[i]] = array[i + 1];
//    }
//    return nvlObjet;
//};
//
//console.log(convertArrayToObject(result));

var result = ['cat', 'dog', 'fish'];
var result2 = ['cat', 'dog', 'fish', 'cat'];

var getAllLetters = function (array) {
    return 'Write your method here';
    
};

var swapKeysAndValues = function (object) {
    return 'Write your method here';
};

var sumKeysAndValues = function (object) {
    return 'Write your method here';
};

var removeCapitals = function (string) {
    return 'Write your method here';
};


var result = 4.3942;
var roundUp = function (number) {
    return Math.ceil(number);
};
console.log(roundUp(result));


var formatDateNicely = function (date) {

};

var getDomainName = function (string) {
    return 'Write your method here';
};

var titleize = function (string) {
    return 'Write your method here';
};

var checkForSpecialCharacters = function (string) {
    return 'Write your method here';
};

var resultOne = 9;
var resultTwo = 3;
var squareRoot = function (number) {
    return Math.sqrt(number);
};
console.log(squareRoot(resultOne));
console.log(squareRoot(resultTwo));
//
//var result = 5;
//
//var factor = function (number) {
//    return Math.factorial(number);  -------------------------
//};



var findAnagrams = function (string) {
    return 'Write your method here';
}

var convertToCelsius = function (number) {
    return 'Write your method here';
}

var letterPosition = function (array) {
    return 'Write your method here';
}
