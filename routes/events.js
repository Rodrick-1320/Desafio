//CRUD - C(reate) R(ead) U(pdate) D(elete)
let events = require('../files/events.json') 

// create
const createEvent = (req, res) =>{
    
    let id = 0;
    const last = events[events.length -1];

    if(last) {
        id = last.id + 1
    }

    if(req.body){
        events.push({
            id,
            ...req.body
        })
    
    res.json({
        status: 200,
        events
    })
}

    res.json({
        status: 401,
        message: "Você deixou de passar alguma informação :("
    })
}

const readEvents = (req, res) => {
    res.json({
        status: 200,
        events: events
    })
}

const updateEvent = (req, res) => {    
    const info = req.body;

    events = events.map((event) => {
        if( event.id == info.id ) {
            return info
        }

        return event
    })

    res.json({
        status: 200,
        events
    })
}


const deleteEvent = (req, res) => {
    events = events.filter((event) => {
        return event.id !== req.body.id
    })

    res.json({
        status: 200,
        events
    })
}

module.exports = {
    createEvent,
    readEvents,
    updateEvent,
    deleteEvent
}