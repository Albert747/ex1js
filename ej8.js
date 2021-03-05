function calcul(n1, operador, n2) {
  
  if(operador === '+'){
    result = n1 + n2;
  }else if(operador === '-'){
    result = n1 - n2;
  }else if(operador === '*'){
    result = n1 * n2;
  }else if(operador === '/'){
    result = n1 / n2;
  }
   return result;
}
document.write(calcul(1, "/", 4))