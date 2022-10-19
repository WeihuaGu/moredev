import {require} from './require.js'
const express = require('express')
const getip = require('internal-ip')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


var ip = getip.v4.sync()
const server = app.listen(0)
const port = server.address().port
app.set('serverurl','http://'+ip+':'+port)

export {app}
