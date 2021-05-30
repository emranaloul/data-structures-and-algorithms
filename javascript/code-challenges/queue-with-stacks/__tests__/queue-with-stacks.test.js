'use strict';

let PseudoQueue = require('../queue-with-stacks');

describe('PseudoQueue class Test', () => {
  it('should insert into Queue', () => {

    let emran = new PseudoQueue;

    emran.enqueue('ahmad');
    emran.enqueue('muhammad');
    emran.enqueue('khaled');

    expect(emran.stack1.top.value).toEqual('khaled');
  });
  it('Can successfully throw an exception when Queue is empty', () => {

    let emran = new PseudoQueue;

    expect(emran.dequeue()).toEqual('not possible to dequeue an empty Queue');
  });
  it('should return an exception after filling the Queue and emptying it', () => {

    let emran = new PseudoQueue;

    emran.enqueue('ahmad');
    emran.enqueue('muhammad');
    emran.dequeue();
    emran.dequeue();


    expect(emran.dequeue()).toEqual('not possible to dequeue an empty Queue');
  });
  it('should dequeue from non empty Queue', () => {

    let emran = new PseudoQueue;

    emran.enqueue('ahmad');
    emran.enqueue('muhammad');
    emran.dequeue();

    expect(emran.stack2.top.value.value).toEqual('muhammad');
  });
});
