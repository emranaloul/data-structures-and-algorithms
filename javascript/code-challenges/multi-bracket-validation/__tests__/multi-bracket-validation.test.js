'use strict';

const {multiBracketValidation}  = require('../multi-bracket-validation');

describe('testing multiBracketValidation', ()=>{
  it('should return true if the brakets are balanced', ()=>{
    expect(multiBracketValidation('()[[Extra Characters]]{}')).toEqual(true);
  });
  it('should return false if the brakets are not balanced', ()=>{
    expect(multiBracketValidation('[({}]')).toEqual(false);
  });
  it('should return false if the onput does not contain brakets', ()=>{
    expect(multiBracketValidation('emran')).toEqual(false);
  });
});
