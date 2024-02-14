"use strict";
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
//defining a function that accepts a size and the text of a message that should be printed on the shirt;
const make_Shirt = (size, message) => {
    console.log(`Size:${size},Message:'${message}'`);
};
//call the function;
let size = "medium";
let message = "hello World";
make_Shirt(size, message);
//directly call the function;
make_Shirt("Large", "Hello World");
