let data = require('./files/users.json') 
const express = require('express') 
const app = express()

app.use(express.json()) 



app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

//CRUD - C(reate) R(ead) U(pdate) D(elete)

// create
app.post('/users/create', (req, res) => {
    
    let id = 0 ;
    const lastId = data[data.length - 1 ];

    if(lastId){
        id = lastId.id + 1
    }

    if(req.body){
        data.push({
            id,
            ...req.body
        })

        res.json({
            status: 200 / "Deu bom",
            data
        })
    }

    res.json({
        status: 401,
        message: "Tá faltando coisa ein"
    })

})

// read
app.get('/users/read', (req, res) => {
    res.json({
        status: 200 / "Deu bom",
        users: data
    })
})


// update
app.put('/users/update', (req,res) => {
    const newInfo = req.body;

    data = data.map((user) => {
        if( user.id == newInfo.id ) {
            return newInfo
        } 

        return user
    })

    res.json({
        status: 200 / "Deu bom",
        data
    })
})

// delete
app.delete('/user/delete', (req, res) => {
    data = data.filter((users) => {
        return users.id !== req.body.id
    })

    res.json({
        status: 200 / "Deu bom",
        data
    })
})


app.listen(8080, () => {
	console.log('Até aqui tudo certo!')
})