
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
  else if($('button').eq(i + 7).css('background-color') !== 'gray') {
    $('button').eq(i).addClass(toggle);
    loopControl[i % 7] = i - 7;
  }
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
