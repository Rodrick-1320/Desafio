let orders = require('../files/orders.json') 

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
    deleteOrder
}