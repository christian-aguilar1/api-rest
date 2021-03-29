const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUsers(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = {
            user: new RegExp(`^${filterUser}$`, "i")
        };
    }
    const user = await Model.find(filter);
    return user;
}

async function updateUser(id) {
    const foundUser = await Model.findById({
        _id: id
    });
    foundUser.id = id;
    const newUser = await foundUser.save();
    return newUser;
}

// async function removeMessage(id) {
//     return Model.deleteOne({
//         _id: id
//     })
// }

module.exports = {
    add: addUser,
    list: getUsers,
    updateUser: updateUser,
    // remove: removeMessage,
}