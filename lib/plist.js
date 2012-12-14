/**
 * Module dependencies.
 */

var plist = require('plist');

/**
 * Expose the middleware.
 */
module.exports = fn;


var fn = function(){
  return function(req, res, next){
    res.plist = function(obj){
      /**
       * res.plist(body, status) and res.plist(status, body) are acceptable.
       */
      if (2 == arguments.length) {
        if ('number' === typeof arguments[1]) {
          this.statusCode = arguments[1];
        } else {
          this.statusCode = obj;
          obj = arguments[1];
        }
      }

      var body = plist.build(obj);
      this.charset = this.charset || '';
      this.get('Content-Type') || this.set('Content-Type', 'application/x-plist');

      return this.send(body);
    };
  };
};