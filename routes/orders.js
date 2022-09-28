const { orders, users, events } = require("../store");

// create
const createOrder = (req, res) =>{
    
    let id = 0;
    const last = orders[orders.length -1];

    if(last) {
        id = last.id + 1
    }

    if(req.body){
        orders.push({
            id,
            ...req.body
        })

        res.json({
            status: 200,
            orders
        })

        res.json({
            status: 401,
            message: "Você deixou de passar alguma informação :("
        })
    }
   
}


// getOrder
const getOrderInfo = (req, res) => {

    const nameOrder = req.body.id   

    const myOrder = orders.find((item)=> item.id == nameOrder)
    const user = users.find((item)=> item.id == myOrder.userId)
    const event = events.find((item)=> item.id == myOrder.eventId)


    res.json({
        status: 200, 

        name: user.name,

        date: event.date,

        isPay: myOrder.isPay,

        event: event.name

    })
}

// getOrders
const getOrdersInfo = (req, res) => {

    let myOrder = orders.map((item)=> {

        const cUser = users.find((mUser)=> mUser.id == item.userId)
        const event = events.find((mEvent)=> mEvent.id == item.eventId)

        return {
            userName: cUser.name,
            dateEvent: event.date,
            eventName: event.name,
            isPay: item.isPay
        }

    })

    res.json({
        status: 200,
        ...myOrder
    })

}


// read
const readOrders = (req, res) => {
    res.json({
        status: 200,
        events: orders
    })
}

// delete
const deleteOrder = (req, res) => {
    orders = orders.filter((order) => {
        return order.id !== req.body.id
    })

    res.json({
        status: 200,
        orders
    })
}

module.exports = {
    createOrder,
    readOrders,
    deleteOrder,
    getOrderInfo,
    getOrdersInfo
}