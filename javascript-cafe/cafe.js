// -- JAVASCRIPT CAFE! -- //

let products = {
  whiteCoffee: {
    size: ['Small', 'Medium', 'Large'],
    stock: 4,
    price: 4,
  },

  blackCoffee: {
    size: ['Small', 'Medium', 'Large'],
    stock: 7,
    price: 3.5,
  },

  muffin: {
    type: ['Blueberry', 'Banana Bran', 'Choc Chip'],
    stock: 5,
    price: 4.5,
  },

  eggs: {
    type: ['Poached', 'Fried', 'Hard Boiled'],
    stock: 30,
    price: 6.5,
  },
}

function displayProducts() {
  document.getElementById('whiteCoffee').innerHTML =
    'White Coffee: ' + products.whiteCoffee.stock
  document.getElementById('blackCoffee').innerHTML =
    'Black Coffee: ' + products.blackCoffee.stock
  document.getElementById('muffin').innerHTML =
    'Muffins: ' + products.muffin.stock
  document.getElementById('eggs').innerHTML = 'Eggs: ' + products.eggs.stock
}

displayProducts()

// -- Customers -- //

let customer = {
  order: ['Black Coffee', 'White Coffee', 'Muffin', 'Eggs'],
}

let minOrderSize = 1
let maxOrderSize = 5

function generateCustomerOrder() {
  let orderSize = getRandomInt(minOrderSize, maxOrderSize)

  let newOrder = []

  let productNames = Object.keys(products)

  for (let i = 0; i <= orderSize; i++) {
    let productIndex = getRandomInt(0, productNames.length - 1)
    let productName = productNames[productIndex]
    newOrder.push(productName)
  }

  customer.order = newOrder
  displayCustomerOrder()
}

function displayCustomerOrder() {
  document.getElementById('customerOrder').innerHTML =
    'Customer Order: ' + customer.order
}

document.getElementById('customerButton').onclick = generateCustomerOrder

// Transactions

let cash = 0

function displayCash() {
  document.getElementById('cash').innerHTML = 'Cash:' + cash
}

displayCash()

function fillOrder() {
  let saleTotal = 0
  for (let i = 0; i < customer.order.length; i++) {
    let productName = customer.order[i]

    if (products[productName].stock > 0) {
      products[productName].stock--
      saleTotal += products[productName].price
    } else {
      alert('Sorry m8 we be out of ' + productName)
    }
  }

  cash += saleTotal
  customer.order = []

  displayProducts()
  displayCash()
  displayCustomerOrder()
}

document.getElementById('fillOrder').onclick = fillOrder

// UTIL

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
