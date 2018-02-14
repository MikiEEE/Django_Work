



var divisions = document.querySelectorAll("td");
var button = document.querySelector("#form");

for(var i = 0; i < divisions.length; i++) {
  divisions[i].addEventListener('click',changeSymbol);
}

button.addEventListener('click', clear);

function clear() {
  for(var i = 0; i < divisions.length; i++) {
    divisions[i].textContent = '';
  }
}

  function changeSymbol() {
    if(this.textContent === '') {
      this.textContent = 'X';
      // console.log(marker)
      }
    else if (this.textContent === 'X') {
      this.textContent = 'O';
      }
    else {
      this.textContent = '';
      }
}
