//CRUD - C(reate) R(ead) U(pdate) D(elete)
let users = require('../files/users.json') 

// create
const createUser = (req, res) => {
    
    let id = 0 ;
    const lastId = users[users.length - 1 ];

    if(lastId){
        id = lastId.id + 1
    }

    if(req.body){
        users.push({
            id,
            ...req.body
        })

        res.json({
            status: 200 / "Deu bom",
            users
        })
    }

    res.json({
        status: 401,
        message: "Tá faltando coisa ein"
    })

}

const readUsers = (req, res) => {
    res.json({
        status: 200 / "Deu bom",
        users: users
    })
}

const updateUser = (req,res) => {
    const newInfo = req.body;

    users = users.map((user) => {
        if( user.id == newInfo.id ) {
            return newInfo
        } 

        return user
    })

    res.json({
        status: 200 / "Deu bom",
        users
    })
}


const deleteUser = (req, res) => {
    data = data.filter((users) => {
        return users.id !== req.body.id
    })

    res.json({
        status: 200 / "Deu bom",
        data
    })
}


module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser
}