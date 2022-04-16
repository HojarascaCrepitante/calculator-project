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
     result = (a)+(b);	
    return result
  };
  
  let previousOperation = '';
  let leftOperand = [];
  let operationToDo = '';
  let rightOperand = [];
  

  function operate(a,b,c){
        if(b == '+'){
           result = add(Number(a),Number(c))
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
      previousOperation = '';
}
  function addOperator(e){
       numberButons.forEach(el => el.removeEventListener('click', addLeftOperand))
       numberButons.forEach(el => el.addEventListener('click', addRightOperand))
       operators.forEach(el => el.addEventListener('click', updateLeftOperand))
      operationToDo = e.target.textContent;
      previousOperation = e.target.textContent;
      display.textContent = leftOperand.join('') + operationToDo
}
function updateLeftOperand(e){
    leftOperand = reduce(leftOperand.join(''),rightOperand.join(''));
    rightOperand = [];
    display.textContent = rightOperand.join('');
}
function reduce(left,right){
    if (previousOperation == '+'){
       return leftOperand = [(Number(left) + Number(right))]
    }
}
