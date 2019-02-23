const cluster = require('cluster');
const { cpus } = require('os');

const numWorkers = cpus().length;
const { isMaster } = cluster;

if (isMaster) {
  process.stdout.write('I am master!');
  const workers = [...Array(numWorkers)].map(_ => cluster.fork());
} else {
  process.stdout.write('I am a worker!');
}
