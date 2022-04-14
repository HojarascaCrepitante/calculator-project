const display = document.querySelector('.display')

const numberButons = document.querySelectorAll('.keys')
numberButons.forEach(el => el.addEventListener('click', showDisplay))

function add(a,b) {
    let result = a+b;	
    return result
  };
  
  
  function operate(numLeft,operator,numRight){
      let operation = operator ;
      if(operation == '+'){
          let result = add(numLeft,numRight)
          console.log(result)
          return result
      }
      else return 'error'
      
  }operate()

  function showDisplay(e){
      display.textContent = display.textContent + e.target.textContent
  }