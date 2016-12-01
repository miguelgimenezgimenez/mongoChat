'use strict';

const Message = require('../models/message.js');

exports.getAll = function* () {
  this.body = yield Message.find();
};

exports.post = function* () {
  const newMsg = new Message(this.request.body);
  yield newMsg.create();
  this.status = 200;
};

