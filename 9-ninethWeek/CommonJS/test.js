const {add, subtract, divide} = require('./operations.js')
const GeometricShape = require('./shape.js')

console.log(add(8,9), subtract(10, 8), divide(25, 5) )

console.log(GeometricShape.draw())