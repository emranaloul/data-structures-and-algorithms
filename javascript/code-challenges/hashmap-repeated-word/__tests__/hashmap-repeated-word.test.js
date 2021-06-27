'use strict';
const {repeatedWord} = require('../hashmap-repeated-word');

describe('hashmap repeated word',() => {
  it('Should return the first repetition of words',() => {
    let string = 'for emran, emran is good';
    expect(repeatedWord(string)).toEqual('emran');
  });
  it('Should return that there is no repeated words',() => {
    let string = 'Emran is good';
    expect(repeatedWord(string)).toEqual('No repetition exists.');
  });
  it('Should return an error message if the insertions is not an string',() => {
    expect(repeatedWord(814)).toEqual('Please insert only a string!');
  });
});
