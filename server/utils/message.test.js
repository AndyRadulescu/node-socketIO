const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Jen';
        let text = 'Some text';
        let message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {

        let from = 'andy';
        let latitude = 45.6434219;
        let longitude = 25.5967605;
        let url = 'https://www.google.com/maps?q=45.6434219,25.5967605';
        let message = generateLocationMessage('andy', latitude, longitude);

        expect(typeof message.from).toBe('string');
        expect(typeof message.url).toBe('string');
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});

