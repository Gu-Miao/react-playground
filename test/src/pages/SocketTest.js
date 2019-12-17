import React, { useState, useEffect } from 'react'

const SocketTest = () => {

    const [msg, setMsg] = useState('')
    const [ws, setWs] = useState(null)

    useEffect(() => {
        try {
            setWs(new WebSocket(`ws://192.168.5.164:6008/webSocket/chat/130302199207041627,13062619921201003X/13062619921201003X`))
        } catch (err) {
            console.log('cuowu')
            setMsg(`错误消息：${err}`)
        }

        return () => {
            if (ws) {
                ws.close()
            }
        }
    }, [])

    useEffect(() => {
        if (ws) {
            ws.onerror = err => {
                console.log('websocket 连接错误', err)
                setMsg(`websocket 连接错误${JSON.stringify(err)}`)
            }

            ws.onopen = res => {
                console.log('websocket 连接成功', res)
                setMsg(`websocket 连接成功${JSON.stringify(res)}`)
            }

            ws.onmessage = res => {
                console.log('websocket 接受消息', res)
                setMsg(`websocket 接受消息${JSON.stringify(res)}`)
            }
        }
    }, [ws])

    return (
        <pre>{msg}</pre>
    )
}

export default SocketTest