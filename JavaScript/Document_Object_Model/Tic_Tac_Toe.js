



var divisions = document.querySelectorAll("td");
var button = document.querySelector("#form");
var temp;

for(var i = 0; i < divisions.length; i++) {
  divisions[i].addEventListener('click',changeSymbol);
}

button.addEventListener('click', clear);

function clear() {
  for(var i = 0; i < divisions.length; i++) {
    divisions[i].textContent = '';
  }
  return;
}

function changeSymbol() {
  if(this.textContent === '') {
    this.textContent = 'X';
    }
  else if (this.textContent === 'X') {
    this.textContent = 'O';
    }
  else {
    this.textContent = '';
  }
  for(var i = 100; i < 0; i--)
    continue;
  testForThree();
}

function testForThree() {
  var count = 0;
  for(var i = 0; i < divisions.length; i++) {
    if(divisions[i].textContent != '') {
      switch(i) {
        case 0:
        case 2:
        case 6:
        case 8:
          count+=3;
          break;
        case 1:
        case 3:
        case 4:
        case 5:
        case 7:
          count+=2;
      }
    }
    if(count === 6|| count === 8) {
      console.log("winner");
      break;
    }
  }
}
