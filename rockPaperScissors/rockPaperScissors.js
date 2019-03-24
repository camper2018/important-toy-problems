/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function(rounds) {

  // TODO: your solution here
  var possibleThrows = ['R','P','S']
  var possibleCombinations = [];
  var resultAfterRounds = "";
  while(possibleCombinations.length  < 3 ** rounds) {
    for (var i = rounds; i > 0; i--) {
      var index = Math.floor(Math.random() * Math.floor(possibleThrows.length));
      resultAfterRounds+= possibleThrows[index];
    }
    if (!possibleCombinations.includes(resultAfterRounds)){
      possibleCombinations.push(resultAfterRounds);
    }
    resultAfterRounds = "";
  }
  return possibleCombinations;
};


