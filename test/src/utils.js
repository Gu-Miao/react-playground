/**
 * 建立websocket链接
 * @param {String} wsUrl websocket地址 
 * @returns {Object} websocket实例
 */
const estabConnectWithWS = wsUrl => {
    const ws = new WebSocket(wsUrl)
    ws.onopen = () => {
        console.log('连接上 ws 服务端了')
    }
    // ws.onmessage = res => {
    //     // console.log('接收服务端发过来的消息: %o', res)
    //     callback(res)
    // }
    ws.onclose = e => {
        console.log('ws 连接关闭了')
        console.log(e)
    }

    return ws
}

export default estabConnectWithWS