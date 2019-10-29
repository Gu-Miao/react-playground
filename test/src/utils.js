/**
    * 建立WS链接相关的方法jSESSIONID:''
    * @param {String} wsUrl :建立webSocket链接的Url
    */
const estabConnectWithWS = wsUrl => {
    console.log('url', wsUrl)
    const ws = new WebSocket(wsUrl)

    // let result = ''
    ws.onopen = function (e) {
        console.log('连接上 ws 服务端了')
        ws.send(JSON.stringify({ flag: wsUrl, data: 'Hello WebSocket!' }))
    }
    ws.onmessage = (msg) => {
        console.log('接收服务端发过来的消息: %o', msg)
        // var msgJson = JSON.parse(msg.data)
        // result += msgJson.MsgBody + '\n'
        // if (msgJson.MsgCode === '999999') {//多设备在线的异常发生时
        //     window.location.href = '/#/'
        // } else if (msgJson.MsgCode === '555555') {//用户退出系统的时候
        //     ws.close()
        //     window.location.href = '/#/'
        // }
        // alert(msgJson.MsgBody)
    }
    ws.onclose = function (e) {
        console.log('ws 连接关闭了')
        console.log(e)
    }
}

export default estabConnectWithWS