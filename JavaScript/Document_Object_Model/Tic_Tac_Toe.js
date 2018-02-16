



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
  testForThree();
}

function testForThree() {
  var count = 0;
  var save;
  for(var i = 0; i < 3; i++) {
    if(divisions[i].textContent != '') {
      if(divisions[i].textContent === divisions[i + 3].textContent && divisions[i + 6].textContent == divisions[i].textContent) {
        console.log("Winner");
        break;
      }
    }
  }
  for(var i = 0; i < 9; i+=3) {
    if(divisions[i].textContent != '') {
      if(divisions[i].textContent === divisions[i + 1].textContent && divisions[i].textContent === divisions[i + 2].textContent) {
        console.log("Winner");
        break;
      }
    }
  }
  if(divisions[2].textContent != ''){
    if(divisions[2].textContent === divisions[4].textContent && divisions[6].textContent === divisions[4].textContent) {
      console.log("winner");
    }
  }
  if (divisions[0].textContent != '') {
    if(divisions[0].textContent === divisions[4].textContent && divisions[8].textContent === divisions[4].textContent) {
      console.log("Winner");
    }
  }
}
