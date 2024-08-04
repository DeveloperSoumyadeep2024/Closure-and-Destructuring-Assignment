// Object representing a customer order
const order = {
    orderId: '12345',
    productName: 'Laptop',
    quantity: 2
};

// Destructuring to extract properties
const { orderId, productName, quantity } = order;

// Print the extracted properties
console.log('Order ID:', orderId);
console.log('Product Name:', productName);
console.log('Quantity:', quantity);
