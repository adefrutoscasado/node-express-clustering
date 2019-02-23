const axios = require('axios');
const { argv } = require('yargs');

const call = () => axios.get('http://localhost:3000');
const requestNumber = argv.requestnumber || 10;

// Parallel requests
(async () => {
  console.log(`Calling ${requestNumber} times`);
  console.time('parallelRequest');
  const calls = Array.from({ length: requestNumber }, call);
  await Promise.all(calls);
  console.timeEnd('parallelRequest');
})();
