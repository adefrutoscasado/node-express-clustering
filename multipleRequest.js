const axios = require('axios');

const call = () => axios.get('http://localhost:3000');

// // Call one by one
// (async () => {
//   console.time('callOneByOne');
//   for (let i = 0; i < 10; i++) {
//     await call();
//   }
//   console.timeEnd('callOneByOne');
// })();

// Call parallel
(async () => {
  console.time('multipleRequest');
  const number = new Array(10).fill(true);
  const responses = await Promise.all(number.map(() => call()));
  // responses.map((r) => console.log(r.data))
  console.timeEnd('multipleRequest');
})();
