/*----- constants -----*/
var playingValues = {
    '1': 'X',
    '-1': 'O',
    'null': 'white'
}

var winningSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

/*----- app's state (variables) -----*/
var board;
var turn;
var winner;

/*----- cached element references -----*/
const spaces = document.querySelectorAll('tr td');
var messages = document.getElementById("Heading");

/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', handleClick);
document.querySelector('#restart').addEventListener('click', init);
/*----- functions -----*/

init();

function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = null;
    document.getElementById("Heading").innerHTML = "3T: Tic Tac Toe";
    render();
};

function checkWinner() {
    for (var i = 0; i < winningSet.length; i++) {
        if(Math.abs(board[winningSet[i][0]] + board[winningSet[i][1]] + board[winningSet[i][2]]) === 3) {
            winner = turn;
            return
        }
    }
    if (!winner && board.includes(!0)) {
        winner = 'T'
    } else {
        changeTurn()
    }
};


function handleClick(event){
    const squarePick = event.target.id
    board[squarePick] = turn
    checkWinner()
    render()
};

function render() {
     board.forEach(function(mark, index) {
        spaces[index].textContent = playingValues[mark];
    });
     if(winner === 'T') {
        messages.innerHTML = 'Tie, reset to try again.';
    } else if (winner) {
        messages.innerHTML = `Player ${playingValues[winner]} Wins!`;
    };
};

function changeTurn() {
    turn *= -1;
};

