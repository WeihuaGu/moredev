    import {require} from './require.js' 
    import {app} from './app.js'    
    var Server = require('node-ssdp').Server
    const { v4: uuidv4 } = require('uuid');
    
    var server = new Server({
    	udn: uuidv4(),
	location: app.get('serverurl')
    })
    server.addUSN('urn:schemas-upnp-org:service:candodownload:1');

    server.on('advertise-alive', function (headers) {
    });
    server.on('advertise-bye', function (headers) {
    });

    // start the server
    server.start();
    process.on('exit', function(){
      server.stop() 
    })
