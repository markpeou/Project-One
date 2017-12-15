console.log('tic tac toe');
var one = document.getElementById('b1')
var two = document.getElementById('b2')
var three = document.getElementById('b3')
var four = document.getElementById('b4')
var five = document.getElementById('b5')
var six = document.getElementById('b6')
var seven = document.getElementById('b7')
var eight = document.getElementById('b8')
var nine = document.getElementById('b9')

var counter = 0
// var winningCombo = ['b1','b2','b3']
//                    ['b4','b5','b6']
//                    ['b7','b8','b9']
//                    ['b1','b4','b7']
//                    ['b2','b5','b8']
//                    ['b3','b6','b9']
//                    ['b1','b5','b9']
//                    ['b3','b5','b7']

function setMessage(msg){
  document.getElementById('message').textContent = msg;
}
setMessage('X starts')
  var turn = function(event) {
  // if textContent = '' then assign 'x'
  // when textContent is not empty
  if (event.target.textContent !== "") {
    return setMessage('pick another square');
  }
    counter++
    //changing players
 if (counter % 2 !== 0) {
    event.target.textContent = 'X' ;
    setMessage("O's Turn")

 } else {
    event.target.textContent = 'O' ;
    setMessage("X's Turn")
  }

  checkForWin()
 }

 function checkForWin() {
   //loop through id's to see if it contains an 'x' or an 'o'
  //   for ( i = 0; i > winningCombo.length; i++) {
  //
  //
  // }


  if (document.getElementById('b1').textContent === 'X' &&
      document.getElementById('b2').textContent === 'X' &&
      document.getElementById('b3').textContent === 'X' ||
      document.getElementById('b4').textContent === 'X' &&
      document.getElementById('b5').textContent === 'X' &&
      document.getElementById('b6').textContent === 'X' ||
      document.getElementById('b7').textContent === 'X' &&
      document.getElementById('b8').textContent === 'X' &&
      document.getElementById('b9').textContent === 'X' ||
      document.getElementById('b1').textContent === 'X' &&
      document.getElementById('b4').textContent === 'X' &&
      document.getElementById('b7').textContent === 'X' ||
      document.getElementById('b2').textContent === 'X' &&
      document.getElementById('b5').textContent === 'X' &&
      document.getElementById('b8').textContent === 'X' ||
      document.getElementById('b3').textContent === 'X' &&
      document.getElementById('b6').textContent === 'X' &&
      document.getElementById('b9').textContent === 'X' ||
      document.getElementById('b1').textContent === 'X' &&
      document.getElementById('b5').textContent === 'X' &&
      document.getElementById('b9').textContent === 'X' ||
      document.getElementById('b3').textContent === 'X' &&
      document.getElementById('b5').textContent === 'X' &&
      document.getElementById('b7').textContent === 'X') {
        return setMessage('x wins!')

  } else if (
        document.getElementById('b1').textContent === 'O' &&
        document.getElementById('b2').textContent === 'O' &&
        document.getElementById('b3').textContent === 'O' ||
        document.getElementById('b4').textContent === 'O' &&
        document.getElementById('b5').textContent === 'O' &&
        document.getElementById('b6').textContent === 'O' ||
        document.getElementById('b7').textContent === 'O' &&
        document.getElementById('b8').textContent === 'O' &&
        document.getElementById('b9').textContent === 'O' ||
        document.getElementById('b1').textContent === 'O' &&
        document.getElementById('b4').textContent === 'O' &&
        document.getElementById('b7').textContent === 'O' ||
        document.getElementById('b2').textContent === 'O' &&
        document.getElementById('b5').textContent === 'O' &&
        document.getElementById('b8').textContent === 'O' ||
        document.getElementById('b3').textContent === 'O' &&
        document.getElementById('b6').textContent === 'O' &&
        document.getElementById('b9').textContent === 'O' ||
        document.getElementById('b1').textContent === 'O' &&
        document.getElementById('b5').textContent === 'O' &&
        document.getElementById('b9').textContent === 'O' ||
        document.getElementById('b3').textContent === 'O' &&
        document.getElementById('b5').textContent === 'O' &&
        document.getElementById('b7').textContent === 'O') {
        return setMessage('o wins!')
        checkDraw()
      }
    }
//
function checkDraw() {
    document.querySelectorAll('.sq').textContent ==! 'X' ||
    document.querySelectorAll('.sq').textContent ==! 'O'
        return setMessage('its a draw')
      }

//     return setMessasge('its a draw')
// }
// check if box is full or empty if empty game is still going
  // if box is filled then game has finished

//     }  else if (
// }




one.addEventListener('click',turn);
two.addEventListener('click',turn);
three.addEventListener('click',turn);
four.addEventListener('click',turn);
five.addEventListener('click',turn);
six.addEventListener('click',turn);
seven.addEventListener('click',turn);
eight.addEventListener('click',turn);
nine.addEventListener('click',turn);
