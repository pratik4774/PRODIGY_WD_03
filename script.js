  let currentPlayer = 'X';
  let lastPlayer = '';
  const cells = document.querySelectorAll('.cell');
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let board = ['', '', '', '', '', '', '', '', ''];

  function makeMove(cellIndex) {
    if (!board[cellIndex]) {
      board[cellIndex] = currentPlayer;
      cells[cellIndex].innerText = currentPlayer;
      lastPlayer = currentPlayer;

      if (checkWin(lastPlayer)) {
        alert(lastPlayer + ' wins!');
        resetBoard();
        return;
      }

      if (checkDraw()) {
        alert('It\'s a draw!');
        resetBoard();
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  function checkWin(player) {
    return winningCombos.some(combo => {
      return combo.every(index => {
        return board[index] === player;
      });
    });
  }

  function checkDraw() {
    return board.every(cell => cell !== '');
  }

  function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
      cell.innerText = '';
    });
    currentPlayer = 'X';
  }

