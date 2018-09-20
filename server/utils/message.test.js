var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
   
    var from = 'Alex'
    var text = 'this is a test'
    
    var message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
});