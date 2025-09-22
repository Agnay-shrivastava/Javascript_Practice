const checkInventory = (callback) => {
  setTimeout(() => {
    console.log("Checking Inventory");
    callback();
  }, 2000);
};

const createOrder = (callback) => {
  setTimeout(() => {
    console.log("Creating the order");
    const error = new Error();
    callback(error);
  }, 1000);
};

const chargePayment = (callback) => {
  setTimeout(() => {
    console.log("Payment Done");
    let error = null ;
    let chargepayment = 100;
    callback(error , chargepayment);
  }, 3000);
};

const sendInvoice = (callback) => {
  setTimeout(() => {
    console.log("Invoice Sent");
    callback();
  }, 1000);
};

//This is how we fixed the desired order in async js but you can see an issue here on code readability , and we are passing callback under callback and it thus creates a Callback hell
const main = () => {
  checkInventory(() => {
    createOrder((error) => {
      if(error) {
        console.log("error: Order creation failed......");
      }
      chargePayment((error , chargepayment) => {
        if(error) {
          console.log("error: Payment failed......");   
        }else{
          console.log("Payment charged: " , chargepayment);
        }
        sendInvoice(() => {
          console.log("All Done");
        });
      });
    });
  });
  // createOrder();
  // chargePayment();
  // sendInvoice();
};

main();

//now we saw that we were not getting the desired output , so what we can do is , we can trick to produce in the right order . so even if it is asynchronous , it should wait for the previous task to finish before starting the next task , we will use callback function for it .

/* 
What is Callback Hell?

    Callback Hell happens when you have multiple asynchronous operations that must run one after another, and you try to manage them by nesting callbacks inside callbacks.

Why does this happen?

    Async operations don’t wait — so you must say "when this finishes, do the next one."

    Using nested callbacks is the only way in plain JS (without Promises/async).

    As the chain grows → code becomes:

    Deeply nested

    Hard to read

    Hard to maintain

    Hard to handle errors

    That mess = callback hell.
*/

