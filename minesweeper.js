const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
  	const row = [];
  	for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
  		row.push(' ');
  	}
  	board.push(row);
  } 
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  const board = [];
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
  	const row = [];
  	for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
  	  row.push(null);
  	}
  	board.push(row);
  }
  
  let numberOfBombsPlaced = 0;
   while (numberOfBombsPlaced < numberOfBombs) {
   	let randomRowIndex = Math.floor(Math.random()* numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()* numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
   }
     return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [
  [-1,-1],
  [-1,0],
  [-1,1],
  [0,-1],
  [0,1],
  [1,-1],
  [1,0],
  [1,1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  let numberOfBombs = 0;

  neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && 
      neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] = 'B') {
        numberOfBombs++;
      }
    }
    
  });
  return numberOfBombs;
};

const flipTile = (playerBoard, bombBoard, flipRow, flipColumn) => {
  if (playerBoard[flipRow][flipColumn] !== ' ') {
    console.log('This tile has already been flipped!');
    return;
  }
  else if (bombBoard[flipRow][flipColumn] === 'B') {
    playerBoard[rowIndex][columnIndex] = 'B';
  }
  else {
    playerBoard[flipRow][flipColumn] = getNumberOfNeighborBombs(bombBoard,flipRow,
    flipColumn);
  }
};

let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3,3,3);

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

flipTile(playerBoard,bombBoard,0,0);

console.log('Updated Player Board:');

printBoard(playerBoard);


