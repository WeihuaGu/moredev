import store from '../models/store.js'
import * as task from '../models/task.js'
import express from 'express'
var router = express.Router()



// define the services
router.get('/getlockid/:pre',function (req, res) {
	if(!store.getState().lockid)
		store.dispatch(task.getactionsetlockid(req.params.pre))
	res.json(store.getState().lockid)
})

export default router



