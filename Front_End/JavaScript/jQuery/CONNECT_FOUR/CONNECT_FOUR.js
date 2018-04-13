
var turn = 0;
var loopControl = new Array(7);


for(var i = 0; i < $('button').length; i++) {
  $('button').eq(i).click(findGray);
}

for(var d = 0; d < loopControl.length; d++) {
  loopControl[d] = $('button').length - 7;
}


function findGray() {
  for(i = $(this).index('button') % 7; i < loopControl[$(this).index('button') % 7]; i+=7) {
  }
  if ($('button').eq(i + 7).css('background-color') == null) {
   $('button').eq(i).addClass(toggle);
   loopControl[ i % 7] = i - 7;
  }
  else if($('button').eq(i + 7).css('background-color') !== 'rgb(128, 128, 128)') {
    $('button').eq(i).addClass(toggle);
    loopControl[i % 7] = i - 7;
  }
  testForWin();
}

function testForWin() {
  if(horizontalVictory()) {
    console.log("Horizont");
  }
  else if(verticalVictory()) {
    console.log("verticalVictory");
    }
  else if (diagonalLeftVictory()) {
    console.log("DL");
  }
  else if (diagonalRightVictory()) {
    console.log("DR");
  }

}

function diagonalLeftVictory() {
  var counter;
  for(var rows = 0; rows < 3; rows++) {
    for(var column = 3; column < 8; column++) {
      counter = 0;
      if($('button').eq((rows * 7) + column).css('background-color') != 'rgb(128, 128, 128)') {
      for(var i = 1; i < 4; i++) {
          if($('button').eq((rows * 7) + column).css('background-color') == $('button').eq(((rows + i) * 7) + column - i).css('background-color')) {
                counter++;
              if(counter === 3) {
                return true;
              }
          }
        }
      }
    }
  }
    return false;
}

function diagonalRightVictory() {
  var counter;
  for(var rows = 0; rows < 3; rows++) {
    for(var column = 0; column < 4; column++) {
      counter = 0;
      if($('button').eq((rows * 7) + column).css('background-color') != 'rgb(128, 128, 128)') {
      for(var i = 1; i < 4; i++) {
          if($('button').eq((rows * 7) + column).css('background-color') == $('button').eq(((rows + i) * 7) + column + i).css('background-color')) {
                counter++;
              if(counter === 3) {
                return true;
              }
          }
        }
      }
    }
  }
    return false;
}

function verticalVictory() {
  var counter;
  for(var rows = 3; rows > 0; rows--) {
    for(var column = 8; column > 0; column--) {
      counter = 0;
      if($('button').eq(((rows - 2) * 7) + column).css('background-color') != 'rgb(128, 128, 128)') {
        for(var i = 1; i < 4; i++ ) {
          if($('button').eq(((rows - 2) * 7) + column).css('background-color') == $('button').eq(((rows - i - 2) * 7) + column).css('background-color')) {
            counter++;
            if(counter === 3){
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}
function horizontalVictory() {
  var counter;
  for(var rows = 0; rows < 6; rows++) {
    for(var column = 0; column < 5; column++) {
      counter = 0;
      if($('button').eq((rows * 7) + column).css('background-color') != 'rgb(128, 128, 128)') {
        for(var i = 1; i < 4; i++ ) {
          if($('button').eq((rows * 7) + column).css('background-color') == $('button').eq((rows * 7) + column + i).css('background-color')) {
            counter++;
            if(counter === 3){
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}

function toggle() {
    turn++;
  if(turn %2 === 0) {
    return 'turnRed';
  }
  else {
    return 'turnBlue';
  }
}
