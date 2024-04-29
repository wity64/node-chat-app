const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return {
            error: 'Username and Room are required!'
        }
    }

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if(index != -1) {
        return users.splice(index, 1)[0] 
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    // const roomUsers = []
    // const usersInRoom = users.find((user) => {
    //     if(user.room == room) {
    //         roomUsers.push(user)
    //     }
    // })

    return users.filter((user) => user.room === room)
} 

// addUser({
//     id: 22,
//     username: 'abc',
//     room: 'oozora',
// })

// addUser({
//     id: 42,
//     username: 'def',
//     room: 'oozora',
// })

// addUser({
//     id: 12,
//     username: 'hij',
//     room: 'asd',
// })

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// const roomz = getUsersInRoom('qninq')
// console.log(roomz)

// const user = getUser(22)
// console.log(user)

// const removedUser = removeUser(22)