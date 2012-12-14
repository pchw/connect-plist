var connect = require('connect');
var plist = require('../lib/plist.js');

var data = { 'a': 'test stringy thingy', 'b': 'this contains non base64 ✔ ' };

connect()
  .use(connect.logger('dev'))
  .use(plist())
  .use(function(req, res){
    return res.plist(data);
  })
  .listen(3000);