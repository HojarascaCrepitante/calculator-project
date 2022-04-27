const display = document.querySelector('.display');
  
const numberButons = document.querySelectorAll('.keys');
    numberButons.forEach(el => el.addEventListener('click', addOperands));
const clearButton = document.querySelector('.keys-clear');
    clearButton.addEventListener('click',clearEverything);
const operators = document.querySelectorAll('.keys-operator');
    operators.forEach(el => el.addEventListener('click', addOperator));
const equalButton = document.querySelector('.keys-equal');
    equalButton.addEventListener('click',operate)



  function add(a,b) {
    return (a)+(b);	
  }
  function subtract(a,b) {
	return (a) - (b);
  }
  function multiply(a,b) {
    return (a) * (b);
  }
  function divide(a,b){
    if(a == 0 || b == 0){
      return "What do you think you're doing?"
    }
    else{
    return Math.floor(a / b)}
  }
  
  
  let operationToDo = '';
  let myOperand = '';
  let leftOperand = '';
  let result = '';

  function operate(a,b,c){
        if(b == '+'){
          result = add(Number(a),Number(c));
          display.textContent = result;
          myOperand = result;
          operationToDo = ''
          return result
        }
        if(b == '*'){
            result = multiply(Number(a),Number(c));
            display.textContent = result;
            myOperand = result;
            operationToDo = ''
            return result
        }
        if(b == '-'){
            result = subtract(Number(a),Number(c));
            display.textContent = result;
            myOperand = result;
            operationToDo = ''
            return result
        }
        if(b == '/'){
          result = divide(Number(a),Number(c));
          display.textContent = result;
          myOperand = result;
          operationToDo = ''
          return result
        }
        
        operate(leftOperand, operationToDo, myOperand)
        
  }


  function addOperands(e){
     myOperand += e.target.textContent
     display.textContent = myOperand
    }
    
  function clearEverything(){
      display.textContent = '';
      result = '';
      leftOperand = '';
      myOperand = '';
      operationToDo = '';
  }

  function addOperator(e){
      if(operationToDo == '+' || operationToDo == '-' || operationToDo == '*' || operationToDo == '/'){
      operate(leftOperand, operationToDo, myOperand)
      }
    leftOperand = myOperand
    myOperand = '';
    operationToDo = e.target.textContent
    display.textContent = operationToDo
    }

