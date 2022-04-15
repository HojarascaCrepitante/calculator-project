const display = document.querySelector('.display');
  
const numberButons = document.querySelectorAll('.keys');
    numberButons.forEach(el => el.addEventListener('click', addLeftOperand));
const clearButton = document.querySelector('.keys-clear');
    clearButton.addEventListener('click',clearEverything);
const operators = document.querySelectorAll('.keys-operator');
    operators.forEach(el => el.addEventListener('click', addOperator));
    
const equalButton = document.querySelector('.keys-equal');
    equalButton.addEventListener('click',operate)



  function add(a,b) {
     result = (Number(a))+ (Number(b));	
    return result
  };
  
  let leftOperand = [];
  let operationToDo = '';
  let rightOperand = [];
  

  function operate(a,b,c){
        if(b == '+'){
           result = add((a),(c))
          display.textContent = result;
          return result
  }operate(leftOperand.join(''),operationToDo,rightOperand.join(''))
      
      
  }

  function addLeftOperand(e){
     leftOperand.push(Number(e.target.textContent))
     display.textContent = leftOperand.join('')
     
  }
  function addRightOperand(e){
      rightOperand.push(Number(e.target.textContent))
      display.textContent = rightOperand.join('');
  }
  
  
  function clearEverything(){
      display.textContent = '';
      leftOperand = [];
      operationToDo = '';
      rightOperand = [];
}
  function addOperator(e){
       numberButons.forEach(el => el.removeEventListener('click', addLeftOperand))
       numberButons.forEach(el => el.addEventListener('click', addRightOperand))
       operators.forEach(el => el.addEventListener('click', updateLeftOperand))
      operationToDo = e.target.textContent;
      display.textContent = leftOperand.join('') + operationToDo
}
function updateLeftOperand(e){
    leftOperand.push(operationToDo)
    rightOperand.forEach(el => leftOperand.push(Number(el)))
    rightOperand = [];
    display.textContent = rightOperand.join('');
}

