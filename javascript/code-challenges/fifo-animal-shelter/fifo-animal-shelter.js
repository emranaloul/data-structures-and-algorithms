'use strict';

class AnimalShelter {
  constructor() {
    this.values = new Array();
  }
  enqueue(name) {
    this.values.push(name);

  }

  dequeue(pref) {

    let animalArray = [];
    for(let i in this.values){
      if(this.values[i].type === pref)
        animalArray.push(this.values[i]);
    }
    if(animalArray.length){
      return animalArray;
    } else return null;

  }

}

module.exports = AnimalShelter;
