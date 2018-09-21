var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
   
    var from = 'Alex'
    var text = 'this is a test'
    
    var message = generateMessage(from, text);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  })
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin'
    var lat = 15
    var long = 19
    var url = 'https://www.google.com/maps?q=15,19'
    
    var message = generateLocationMessage(from, lat, long)
    expect(message.from).toBe(from);
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,url});
    
  })
})