const axios = require('axios');
const { argv } = require('yargs');

const call = () => axios.get('http://localhost:3000');
const requestNumber = argv.requestnumber || 10;

// Cascade requests
(async () => {
  console.time('Cascade');
  for (let i = 0; i < requestNumber; i++) {
    await call();
  }
  console.timeEnd('Cascade');
})();
