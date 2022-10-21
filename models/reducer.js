const initState = {
	lockid: null
}
	
export default function reducer(pre = initState, action) {
    const { type, data } = action;
    switch (type) {
        case 'lockid': return Object.assign({}, pre, { lockid: data })
        default: return pre
    }
}

