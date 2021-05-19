let fibonacciSequence = function(a){
  if(typeof a === 'string' || a === null){
    return 0;
  }else{

    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    for (let i = 1; i <= a; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    return n1;
  }
};

module.exports = fibonacciSequence;
