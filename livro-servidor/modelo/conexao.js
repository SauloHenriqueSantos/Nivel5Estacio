const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose.connect('mongodb://desenv:Fortaleza@localhost:27017/?authMechanism=SCRAM-SHA-256', options);

module.exports = mongoose;