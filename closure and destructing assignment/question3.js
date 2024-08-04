// Function to create a cart with private access to its items
function createCart() {
    const cart = []; // Private array to store cart items

    // Function to add an item to the cart
    function addItem(item) {
        cart.push(item);
    }

    // Function to get all items in the cart
    function getCartItems() {
        return cart.slice(); // Return a copy of the cart array
    }

    // Return an object exposing the addItem and getCartItems functions
    return {
        addItem,
        getCartItems
    };
}

// Create a new cart instance
const myCart = createCart();

// Add items to the cart
myCart.addItem({ productName: 'Laptop', quantity: 1 });
myCart.addItem({ productName: 'Mouse', quantity: 2 });

// Retrieve and print cart items
console.log('Cart Items:', myCart.getCartItems());
