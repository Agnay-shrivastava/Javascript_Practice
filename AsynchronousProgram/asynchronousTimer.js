const checkInventory = () => {
  setTimeout(() => {
    console.log("Checking Inventory");
  }, 2000);
};

const createOrder = () => {
  setTimeout(() => {
    console.log("Order Placed");
  }, 1000);
};

const chargePayment = () => {
  setTimeout(() => {
    console.log("Payment Done");
  }, 3000);
};

const sendInvoice = () => {
  setTimeout(() => {
    console.log("Invoice Sent");
  }, 1000);
};

const main = () => {
  checkInventory();
  createOrder();
  chargePayment();
  sendInvoice();
};

//main();

//when you run this , you get this output:
// Order Placed
// Invoice Sent
// Checking Inventory
// Payment Done

//this is what we call as asynchronous programming , but you can see the issue here , when you run this code , you get the output in a different order , because of the asynchronous nature of js

//let's code in the predicted behaviour now that we know the async nature:

const function1 = () => {
  console.log("This should get printed first");
};

const function4 = () => {
  setTimeout(() => {
    console.log("This should get printed fourth");
  }, 3000);
};

const function2 = () => {
  console.log("This should get printed second");
};

const function3 = () => {
  setTimeout(() => {
    console.log("This should get printed third");
  }, 1000);
};

const main2 = () => {
  function1();
  function4();
  function2();
  function3();
};

main2();

//some questions:

/* 
1. What is a Callback?

    A callback is just a function you pass as an argument to another function, so that function can call it later.

2. What is the Callback Queue?

    When an async task finishes (like setTimeout, API call, etc.), the callback function doesn’t run immediately.
    Instead, it is placed into the Callback Queue (also called Task Queue).

    👉 Think of it like a waiting line (queue) of functions that are ready to be executed as soon as the call stack is free.

3. What is the Event Loop?

    The Event Loop is the “traffic manager” that connects everything:

    Checks if the call stack (main thread) is empty.

    If empty → it takes the first callback from the Callback Queue and pushes it onto the stack to run.

    Keeps repeating this forever.

    This is why asynchronous code works without blocking.
*/
