
const express = require('express') 
const { createEvent, readEvents, updateEvent, deleteEvent } = require('./routes/events')
const { createUser, readUsers, updateUser, deleteUser } = require('./routes/users')
const app = express()

app.use(express.json()) 



app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

// users
app.post('/users/create', createUser)
app.get('/users/read', readUsers)
app.put('/users/update', updateUser)
app.delete('/user/delete', deleteUser)

// events
app.post('/event/create', createEvent)
app.get('/event/read', readEvents)
app.put('/event/update', updateEvent)
app.delete('/event/delete', deleteEvent)


app.listen(8080, () => {
	console.log('Até aqui tudo certo!')
})