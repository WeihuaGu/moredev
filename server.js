    import {require} from './require.js' 
    import {app} from './app.js'    
    var Server = require('node-ssdp').Server
    import  { v4 as uuidv4 } from 'uuid'
    
    var server = new Server({
    	udn: uuidv4(),
	location: app.get('serverurl')
    })
    server.addUSN('urn:schemas-upnp-org:service:candotask:1');

    server.on('advertise-alive', function (headers) {
    });
    server.on('advertise-bye', function (headers) {
    });

    // start the server
    server.start();
    process.on('exit', function(){
      server.stop() 
    })
