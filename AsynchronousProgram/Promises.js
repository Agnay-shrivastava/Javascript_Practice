//Learning Promises in js:
//Promises are special class in js
//we use it when we don't know in advance how long the task will take to complete
//Promise works like , we say that when the async task finishes , notify me by calling the callback function and then do the next task in the next line
//we get two function inside the Promise , resolve and reject

const checkInventory = () => {
  const promise = new Promise((resolve , reject) => {
    setTimeout(() => {
      console.log("Checking Inventory");
      resolve();
    }, 2000);
  });

  return promise;
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
    let error = null;
    let chargepayment = 100;
    callback(error, chargepayment);
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
  checkInventory()
  // checkInventory(() => {
  //   createOrder((error) => {
  //     if (error) {
  //       console.log("error: Order creation failed......");
  //     }
  //     chargePayment((error, chargepayment) => {
  //       if (error) {
  //         console.log("error: Payment failed......");
  //       } else {
  //         console.log("Payment charged: ", chargepayment);
  //       }
  //       sendInvoice(() => {
  //         console.log("All Done");
  //       });
  //     });
  //   });
  // });
  // createOrder();
  // chargePayment();
  // sendInvoice();
};

main();
