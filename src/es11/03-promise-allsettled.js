const promise1 = new promise((resolve, reject) => reject('Reject'));
const promise2 = new promise((resolve, reject) => resolve('Resolve'));
const promise3 = new promise((resolve, reject) => resolve('Resolve 2'));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);
