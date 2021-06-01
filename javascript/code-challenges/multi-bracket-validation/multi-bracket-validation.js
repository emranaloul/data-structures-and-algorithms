'use strict';

function multiBracketValidation(input) {

  if (!input.includes('(' || ')' || '[' || ']' || '{' || '}' )){
    return false;
  }
  let roundCount= 0;
  let squareCount = 0;
  let curlyCount = 0;
  for (let i = 0; i < input.length; i++){
    if (input[i] === '(' ){ roundCount++;}
    if (input[i] === '[' ){ squareCount++;}
    if (input[i] === '{' ){ curlyCount++;}
    if (input[i] === ')' ){ roundCount++;}
    if (input[i] === ']' ){ squareCount++;}
    if (input[i] === '}' ){ curlyCount++;}
  }

  if ( roundCount%2 === 0 && squareCount%2 === 0 && curlyCount%2 === 0 ){
    return true;
  } else return false;
}

module.exports = {multiBracketValidation} ;
