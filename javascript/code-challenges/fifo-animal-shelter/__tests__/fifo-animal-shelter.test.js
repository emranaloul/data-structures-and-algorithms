'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('AnimalShelter test', ()=>{
  it('should add a value to the AnimalShelter', ()=>{
    let animalShelter = new AnimalShelter;
    let animal ={
      type: 'cat',
      name: 'lulu'
    };
    let animal2 ={
      type: 'dog',
      name: 'ww'
    };

    animalShelter.enqueue(animal);
    animalShelter.enqueue(animal2);
    expect(animalShelter.values[0]).toEqual(animal);
    expect(animalShelter.values[1]).toEqual(animal2);

  });
  it('should return a dog or cat using desqueue', ()=>{
    let animalShelter = new AnimalShelter;

    let animal ={
      type: 'cat',
      name: 'lulu'
    };
    let animal2 ={
      type: 'dog',
      name: 'ww'
    };

    animalShelter.enqueue(animal);
    animalShelter.enqueue(animal2);
    expect(animalShelter.dequeue('cat')).toEqual([animal]);
    expect(animalShelter.dequeue('dog')).toEqual([animal2]);

  });
  it('should return null if value of pref not dog or cat', ()=>{
    let animalShelter = new AnimalShelter;

    let animal ={
      type: 'cat',
      name: 'lulu'
    };
    let animal2 ={
      type: 'dog',
      name: 'ww'
    };

    animalShelter.enqueue(animal);
    animalShelter.enqueue(animal2);

    expect(animalShelter.dequeue('rabbit')).toEqual(null);

  });

});
