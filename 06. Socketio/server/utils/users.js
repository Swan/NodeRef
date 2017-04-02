// [{
//     id: '/#2321212121121',
//     name: 'Andrew',
//     room: 'The Office Fans'
// }]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {

    constructor () {
        this.users = []; // array that stores all the users
    }

    addUser (id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    }
}

module.exports = {
    Users
};