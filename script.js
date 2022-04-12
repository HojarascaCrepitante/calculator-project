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