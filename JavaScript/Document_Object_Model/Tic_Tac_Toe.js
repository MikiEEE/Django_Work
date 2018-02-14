



var divisions = document.querySelectorAll("td");




  function changeSymbol(){
      if(this.textContent === ''){
        this.textContent = 'X';
        // console.log(marker)
      }else if (this.textContent === 'X') {
        this.textContent = 'O';
      }else {
        this.textContent = '';
      }
    }

    for(var i = 0; i < divisions.length; i++) {
      divisions[i].addEventListener('click',changeSymbol);
    }
