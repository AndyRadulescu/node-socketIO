const expect = require('expect');
const {isRealString} = require('./validation');

describe('is real string', () => {
    it('should reject non-String values', done => {
        let test = 32412;
        expect(isRealString(test)).toBe(false);
        done();
    });

    it('should reject string with white spaces', done => {
        let test = '          ';
        expect(isRealString(test)).toBe(false);
        done();
    });

    it('should allow string with non-space characters', done => {
        let test = 'fsda32423fsdfa';
        expect(isRealString(test)).toBe(true);
        done();
    });
});
