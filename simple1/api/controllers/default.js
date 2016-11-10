'use strict';
var util = require('util');

module.exports = {
  test: doTest
};

function doTest(req, res) {
  // req.swagger.params.name.value || 'strangerX';
  // var hello = util.format('Hello, %s!', name);
  //res.json(hello);
  //var path = req.swagger.apiPath;
  //var body = req.swagger.swaggerObject.paths[path];

  try {  
  	var method = req.method.toLowerCase();
	var r = req.swagger.path[method].responses.default.description;
	if (r[0] === '{') {
		r = JSON.parse(r);
	}
  	res.json(r);
  } catch (ex) {
  	res.json(req.swagger.apiPath);
  }
}
