'use strict';

const Message = require('../models/message.js');



exports.getAll = function* () {
  this.body = yield Message.find();
};

exports.post = function* () {
  const newMsg = new Message({
    content: this.request.body.content,
    timestamp: this.request.body.time,
    userName: this.request.body.userName
  });
  yield newMsg.save();
  this.status = 200;
};

