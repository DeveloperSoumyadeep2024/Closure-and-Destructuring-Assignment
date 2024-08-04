// Function to create a counter
function createCounter() {
    let count = 0; // Private variable to store the count

    // Function to increment and get the current count
    return function() {
        count += 1;
        return count;
    };
}

// Create a new counter instance
const counter = createCounter();

// Example usage: Simulate button clicks and log the count
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4
