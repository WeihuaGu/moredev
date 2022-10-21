import {require} from './require.js'    
    var Client = require('node-ssdp').Client
    var client = new Client()
    var flagresponse = false

    client.on('response', function (headers, statusCode, rinfo) {
      flagresponse = true
      console.log(headers);
      console.log(rinfo);
    });

    // Or get a list of all services on the network

    client.search('urn:schemas-upnp-org:service:candotask:1')
    if(!flagresponse){
    	setTimeout(function() {},1000)
    }
