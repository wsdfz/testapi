'use strict';
var util = require('util');

module.exports = {
  hello: hello,
  hello1: hello
};

function hello(req, res) {
  var name;
  if (req.swagger.params.name) {
 	name = req.swagger.params.name.value || 'stranger';
  } else {
	name = 'strangerA';
  }
  var hello = util.format('Hello, %s!', name);

  res.json(hello);
}
