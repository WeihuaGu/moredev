import {require} from './require.js'
import task from './api/task.js'
const express = require('express')
const getip = require('internal-ip')
const app = express()
app.use(task)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


var ip = getip.v4.sync()
const server = app.listen(0)
const port = server.address().port
console.log(`start app with ${ip}:${port}`)
app.set('serverurl','http://'+ip+':'+port)

export {app}
