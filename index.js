var SCSocket = require('./lib/scsocket');
module.exports.SCSocket = SCSocket;

module.exports.Emitter = require('emitter');

module.exports.connect = function (options) {
  return new SCSocket(options);
};