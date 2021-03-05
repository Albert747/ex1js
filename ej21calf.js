function calcul(n1, operador, n2) {
  
  if(operador === '+'){
    result = n1 + n2;
  }else if(operador === '-'){
    result = n1 - n2;
  }else if(operador === '*'){
    result = n1 * n2;
  }else if(operador === '/'){
    result = n1 / n2;
    if(n1 === 0){
        result = 0;
  }
}
   return result;
}
document.write(calcul(0, "+", 4))