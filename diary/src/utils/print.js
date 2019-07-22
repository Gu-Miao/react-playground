export default (param, info = 'LOG', type = 'primary') => {
    const styles = {
        primary: 'color: white background: #08c padding: 0 12px',
        error: 'color: white background: #fb2803 padding: 0 12px',
        warning: 'color: white background: yellow padding: 0 12px',
        success: 'color: white background: green padding: 0 12px'
    }
    console.log(`%c↓↓↓ [${info}] ↓↓↓`, styles[type])
    if (typeof param === 'string') {
        try {
            const parse = JSON.parse(param)
            console.log(parse)
        } catch (err) {
            console.log(param)
        }
    } else {
        console.log(param)
    }
    console.log(`%c↑↑↑ [${info}] ↑↑↑`, styles[type])
}