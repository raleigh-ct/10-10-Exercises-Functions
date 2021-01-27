// 10.10.1
// 1. Make Line Function

function makeLine(size) {
  
  let hashes = '';
  
  for (let i=0; i < size; i++) {
    hashes += '#';
  }

  return hashes;
} 

// makeLine(5); // worked as expected



// 2. Make Squar Function

/*
function makeSquare(size) {
  
  let square = '';

  for (let j=0; j < size; j++) {
    if (j < size -1) {
    square += makeLine(size) + '\n';
  } else {
    square += makeLine(size);
  }
  }
  return square;
}
*/

// makeSquare(8); // worked as expected



// 3. Make Rect Function

function makeRectangle(width, height) {
  let rect = '';

  for (k=0; k < height; k++) {
    if (k < height - 1) {
      rect += makeLine(width) + '\n';
  } else {
    rect += makeLine(width);
  }
}
return rect;
}

// makeRectangle(10, 10); // Worked as expected


// 4. Make Square Function Use Make Rect Instead

function makeSquare(size) {
  
  let square = '';

  for (let l=0; l < size; l++) {
    square = makeRectangle(size, size);
  }
  return square;
}

// makeSquare(5); // Worked as expected




// 10.10.2
// 1. Make Downward Stair Function

function makeDownwardStairs(height) {

let dStair = '';

  for (let m=0; m < height; m++) {
    dStair += makeLine(1+m) + '\n';
  }
return dStair;
}

// console.log(makeDownwardStairs(5)); // Worked as Expected

// dStair += makeLine(height-m) + '\n';

// 2. Space Line Function

function makeSpaceLine(numSpaces, numChars) {
  let spaces = '';
  let chars = '';
  let spaceLine = '';

  for (i=0; i<numSpaces; i++) {
    spaces += ' ';
  }
  for (j=0; j < numChars; j++) {
    chars += '#';
  }

  spaceLine = spaces+chars+spaces;

  return spaceLine;
}

// console.log(makeSpaceLine(2,6)); // Worked as Expected



// 3. Triangle Function 

function makeIsoscelesTriangle(height) {

let triRow = '';

  for (k=0; k < height; k++) {
    
    if (k < height -1) {
      triRow += makeSpaceLine((height - k - 1), (2 * k + 1)) + '\n';
  } else {
    triRow += makeSpaceLine((height - k - 1), (2 * k + 1));
  }

  return triRow;
}
}

// console.log(makeIsoscelesTriangle(7)); // Worked as expected


// 10.10.3
// 1. Diamond




function makeInvertedIsoscelesTriangle(height) {

let invTriRow = '';

  for (q=0; q < height; q++) {
    invTriRow += makeSpaceLine((2 / q + 1), (height - q)) + '\n';
  }

  return invTriRow;

}


console.log(makeInvertedIsoscelesTriangle(5));