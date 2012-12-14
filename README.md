connect-plist

Connect middleware that add capability sending response as plist format to your application.

Installation
----

    $ npm install connect-plist

Example
----

    var connect = require('connect');
    var plist = require('connect-plist');

    var data = { 'a': 'test stringy thingy', 'b': 'this contains non base64 ✔ ' };

    connect()
      .use(connect.logger('dev'))
      .use(plist())
      .use(function(req, res){
        return res.plist(data);
      })
      .listen(3000);

open browser to `http://localhost:3000/`, you will get following plist:

    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
      <dict>
        <key>a</key>
        <string>test stringy thingy</string>
        <key>b</key>
        <string>this contains non base64 ✔ </string>
      </dict>
    </plist>


License
----
The MIT License