'use strict';
const {Queue , Stack} = require('../stack-and-queue');
const { expect } = require('@jest/globals');

describe('node class Test', () => {
  it('Can successfully push onto a stack', ()=>{
    let emran = new Stack();

    emran.push('muhammad');

    expect(emran.top.value).toEqual('muhammad');

  });

  it('Can successfully push multiple values onto a stack', ()=>{
    let emran = new Stack();
    emran.push('muhammad');
    emran.push('ibrahim');
    emran.push('abdullah');

    expect(emran.top.next.next.value).toEqual('muhammad');
    expect(emran.top.next.value).toEqual('ibrahim');
    expect(emran.top.value).toEqual('abdullah');

  });

  it('Can successfully pop off the stack', ()=>{
    let emran = new Stack();
    emran.push('muhammad');
    emran.push('ibrahim');
    emran.pop();

    expect(emran.top.value).toEqual('muhammad');
  });
  it('Can successfully empty a stack after multiple pops', ()=>{
    let emran = new Stack();
    emran.push('muhammad');
    emran.push('ibrahim');
    emran.push('abdullah');
    emran.pop();
    emran.pop();

    expect(emran.top.value).toEqual('muhammad');
  });

  it('Can successfully peek the next item on the stack', ()=>{
    let emran = new Stack();
    emran.push('muhammad');
    emran.push('ibrahim');
    emran.push('abdullah');

    expect(emran.peek()).toEqual('abdullah');
  });

  it('Can successfully instantiate an empty stack', ()=>{
    let emran = new Stack();

    expect(emran.top).toEqual(null);
  });
  it('Calling pop or peek on empty stack raises exception', ()=>{
    let emran = new Stack();

    expect(emran.pop()).toEqual('not possble to pop off!!');
    expect(emran.peek()).toEqual('empty stack!!');
  });
  it('Can successfully enqueue into a queue', ()=>{
    let emran = new Queue();
    emran.enqueue('muhammad');

    expect(emran.front.value).toEqual('muhammad');
    expect(emran.back.value).toEqual('muhammad');
  });
  it('Can successfully enqueue multiple values into a queue', ()=>{
    let emran = new Queue();
    emran.enqueue('muhammad');
    emran.enqueue('ibrahim');
    emran.enqueue('abdullah');

    expect(emran.front.value).toEqual('muhammad');
    expect(emran.back.value).toEqual('abdullah');
  });
  it('Can successfully dequeue out of a queue the expected value', ()=>{
    let emran = new Queue();

    emran.enqueue('muhammad');
    emran.enqueue('ibrahim');
    emran.enqueue('abdullah');
    emran.dequeue();

    expect(emran.front.value).toEqual('ibrahim');
  });
  it('Can successfully peek into a queue, seeing the expected value', ()=>{
    let emran = new Queue();

    emran.enqueue('muhammad');
    emran.enqueue('ibrahim');
    emran.enqueue('abdullah');


    expect(emran.peek()).toEqual('muhammad');
  });
  it('Can successfully empty a queue after multiple dequeues', ()=>{
    let emran = new Queue();

    emran.enqueue('muhammad');
    emran.enqueue('ibrahim');
    emran.dequeue();
    emran.dequeue();


    expect(emran.front).toEqual(null);
  });
  it('Can successfully instantiate an empty queue', ()=>{
    let emran = new Queue();


    expect(emran.front).toEqual(null);
  });
  it('Calling dequeue or peek on empty queue raises exception', ()=>{
    let emran = new Queue();

    expect(emran.peek()).toEqual('no peek for empty queue!');
    expect(emran.dequeue()).toEqual('it`s an empty queue!');

  });
});
