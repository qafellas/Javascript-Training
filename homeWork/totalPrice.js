const bazaarList = [
    { name: "Apple", price: 1.50, quantity: 3 },
    { name: "Banana", price: 0.75, quantity: 5 },
    { name: "Orange", price: 0.60, quantity: 2 },
    { name: "Broccoli", price: 1.20, quantity: 1.5 },
    { name: "Tomatoes", price: 2, quantity: 3 },
    { name: "Onions", price: 0.86, quantity: 4 }
]


let calculateTotalPrice = function (products) {
    let totalPrice = 0
    products.forEach(product => {
        totalPrice += product.price * product.quantity
        console.log(`${product.name}: ${product.price * product.quantity}`) 
    })
    console.log('-----------------------------------')
    return totalPrice
}

console.log('Total price: ' + calculateTotalPrice(bazaarList))