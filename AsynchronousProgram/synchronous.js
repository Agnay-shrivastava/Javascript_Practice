const printFunction1 = ( ) => {
  console.log("This should get printed first");
}

const printFunction2 = ( ) => {
  console.log("This should get printed second");
}

const PrintFunction3 = ( ) => {
  console.log("This should get printed third");
}

const main = ( ) => {
  printFunction1();
  printFunction2();
  PrintFunction3();
}

main();


//the above complete code is called as synchronous programming in js , as js is a single threaded language and when one task is going on the thread , unless the task get's finished , no other task can be accomplished and because of that reason their can be issues of your app crashing during some delayed api calls in real applications , and to tackle with this problem , we come up with the solution of Asynchronous programming