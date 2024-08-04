// Function to create a cart with private access to its items
function createCart() {
    const cart = []; // Private array to store cart items

    // Function to add an item to the cart
    function addToCart({ productId, name, quantity, price }) {
        // Check if the item already exists in the cart
        const existingItem = cart.find(item => item.productId === productId);

        if (existingItem) {
            // If item exists, increment the quantity
            existingItem.quantity += quantity;
        } else {
            // If item does not exist, add it to the cart
            cart.push({ productId, name, quantity, price });
        }
    }

    // Function to get all items in the cart
    function getCartItems() {
        return cart.slice(); // Return a copy of the cart array
    }

    // Return an object exposing the addToCart and getCartItems functions
    return {
        addToCart,
        getCartItems
    };
}

// Create a new cart instance
const myCart = createCart();

// Add items to the cart
myCart.addToCart({ productId: '1', name: 'Laptop', quantity: 1, price: 1000 });
myCart.addToCart({ productId: '2', name: 'Mouse', quantity: 2, price: 50 });
myCart.addToCart({ productId: '1', name: 'Laptop', quantity: 1, price: 1000 }); // Increment quantity for existing item

// Retrieve and print cart items
console.log('Cart Items:', myCart.getCartItems());
