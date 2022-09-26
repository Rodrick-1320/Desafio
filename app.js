let data = require('./files/users.json') 
const express = require('express') 
const app = express()

app.use(express.json()) 



app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})




app.listen(8080, () => {
	console.log('Até aqui tudo certo!')
})