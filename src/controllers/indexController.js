const asyncUtil = require('./../util/asyncUtil');
const runJob = require('./../modules/job');

module.exports = {
  index: asyncUtil(async (req, res, next) => {
    await runJob();
    res.send({ message: 'Done' });
  }),
};
