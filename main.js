
var one = document.getElementById('1')
var two = document.getElementById('2')
var three = document.getElementById('3')
var four = document.getElementById('4')
var five = document.getElementById('5')
var six = document.getElementById('6')
var seven = document.getElementById('7')
var eight = document.getElementById('8')
var nine = document.getElementById('9')

var playerOne = []
var playerTwo = []
var counter = 0
var board = ['','','','','','','','','']
var combo1 = [['0','1','2']];
var combo2 = [['3','4','5']];
var combo3 = [['6','7','8']];
var combo4 = [['0','3','6']];
var combo5 = [['1','4','7']];
var combo6 = [['2','5','8']];
var combo7 = [['0','4','8']];
var combo8 = [['2','4','6']];
var winningCombos = combo1.concat(combo2,combo3,combo4,combo5,combo6,combo7,combo8)
      // turn arrays into a strings
      // then see if the strings are true or false

var turn = function(event) {
  // if textContent = '' then assign 'x'
  // when textContent is not empty

  if (event.target.textContent !== "") {
    return
  }
counter++
//changing players
 if (counter % 2 !== 0) {
   event.target.textContent = 'X' ;
   board = event.target.id ='x';
 } else {
   event.target.textContent = 'O' ;
   board = ('o')

  //record players turns, so put into array
 }

 checkForWin()
 //check for wins
 // if box one is = x && box two = x && box three = x
 // playerOne Wins
}

function checkForWin() {
}


one.addEventListener('click',turn);
two.addEventListener('click',turn);
three.addEventListener('click',turn);
four.addEventListener('click',turn);
five.addEventListener('click',turn);
six.addEventListener('click',turn);
seven.addEventListener('click',turn);
eight.addEventListener('click',turn);
nine.addEventListener('click',turn);


// function checkWin () {
//   // if player has 3 in a row, they win
//   checkOneDirection(0,1,2);
//   checkOneDirection(3,4,5);
//   checkOneDirection(6,7,8);
//   checkOneDirection(0,3,6);
//   checkOneDirection(1,4,7);
//   checkOneDirection(2,5,8);
//   checkOneDirection(0,4,8);
//   checkOneDirection(2,4,6);
// }


// function checkOneDirection(first,second,third) {
// if (document.querySelectorAll(div) === (first))


// function checkOneDirection(first,second,third) {
//   if ($('section div').eq(first).text() === player &&
//       $('section div').eq(second).text() === player &&
//       $('section div').eq(third).text() === player)
//     $('#winner-message').text('player ' + player + ' won!');
// }
