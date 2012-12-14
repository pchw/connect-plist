/**
 * Module dependencies.
 */

var plist = require('plist');

var fn = function(){
  return function(req, res, next){
    res.plist = function(obj){
      /**
       * res.plist(body, status) and res.plist(status, body) are acceptable.
       */
      if (2 == arguments.length) {
        if ('number' === typeof arguments[1]) {
          res.statusCode = arguments[1];
        } else {
          res.statusCode = obj;
          obj = arguments[1];
        }
      }

      var body = plist.build(obj);
      res.getHeader('Content-Type') || res.setHeader('Content-Type', 'application/x-plist');
      return res.end(body);
    };
    next();
  };
};

/**
 * Expose the middleware.
 */
module.exports = fn;