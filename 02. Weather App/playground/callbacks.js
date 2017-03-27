let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Swan'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(29, (userObject) => {
    console.log(userObject);
});