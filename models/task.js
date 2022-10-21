import { v4 as uuidv4 } from 'uuid'
var getlockid = (pre) =>{
	var date = new Date((new Date()).getTime())
	return pre+'-'+date+'-'+uuidv4()

}


const getactionsetlockid = (pre)=>{
	return { type: 'lockid',data: getlockid(pre) }
}
export {
	getactionsetlockid
}
