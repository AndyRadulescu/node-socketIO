const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Andy',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Andu',
            room: 'Node Course'
        }];
    });

    it('should add new User', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Andy',
            room: 'The office fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node cores', () => {
        let userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Andu'])
    });

    it('should return names for node cores', () => {
        let userList = users.getUserList('React Course');

        expect(userList).toEqual(['Andy'])
    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '4123';
        let user = users.removeUser(userId);

        expect(user).toBe(undefined);
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '54';
        let user = users.getUser(userId);

        expect(user).toBe(undefined);
    });
});
