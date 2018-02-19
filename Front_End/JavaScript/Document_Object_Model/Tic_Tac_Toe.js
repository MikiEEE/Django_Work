



var divisions = document.querySelectorAll("td");
var button = document.querySelector("#form");
var p = document.querySelector("p");
var count = 0;
var newGame = true;

for(var i = 0; i < divisions.length; i++) {
  divisions[i].addEventListener('click',changeSymbol);
}

button.addEventListener('click', clear);


function clear() {
  for(var i = 0; i < divisions.length; i++) {
    divisions[i].textContent = '';
  }
  p.textContent = '';
  count = 0;
  return;
}

function changeSymbol() {
  if(count % 2 == 0) {
    this.textContent = 'X';
  }
  else {
    this.textContent = 'O';
  }
  ++count;
  if(count > 8 ) {
    console.log("tie");
    clear();
  }
  console.log(count);
  testForThree();
}

function testForThree() {
  var count = 0;
  var save;
  for(var i = 0; i < 3; i++) {
    if(divisions[i].textContent != '') {
      if(divisions[i].textContent === divisions[i + 3].textContent) {
        if(divisions[i + 6].textContent == divisions[i].textContent) {
        console.log("Winner");
        break;
        }
      }
    }
  }
  for(var i = 0; i < 9; i+=3) {
    if(divisions[i].textContent != '') {
      if(divisions[i].textContent === divisions[i + 1].textContent) {
        if (divisions[i].textContent === divisions[i + 2].textContent) {
          console.log("Winner");
          p.textContent = "WINNER";
          break;
        }
      }
    }
  }
  if(divisions[2].textContent != ''){
    if(divisions[2].textContent === divisions[4].textContent) {
      if(divisions[6].textContent === divisions[4].textContent) {
        console.log("Winner");
        p.textContent = "WINNER";
      }
    }
  }
  if (divisions[0].textContent != '') {
    if(divisions[0].textContent === divisions[4].textContent) {
      if(divisions[8].textContent === divisions[4].textContent) {
        console.log("Winner");
        p.textContent = "WINNER";
      }
    }
  }
}
