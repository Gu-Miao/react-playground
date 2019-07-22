// 判断是否为整数
const isInteger = num => Math.floor(num) === num

export const getFormatTimeStr = (timeNum, isHour) => {
    if (timeNum && typeof timeNum === 'string') {
        console.log('getFormatTimeStr: Already string.')
        return
    }
    if (typeof timeNum !== 'number') {
        console.log('getFormatTimeStr: Arg type is wrong.')
        return
    }

    if (!isInteger(timeNum)) {
        console.log('getFormatTimeStr: Arg need to be integer.')
        return
    }

    if (isHour && timeNum >= 24) {
        console.log('getFormatTimeStr: Arg hour must in (0,23).')
        return
    }

    if (timeNum < 0 || timeNum >= 60) {
        console.log('getFormatTimeStr: Arg must in (0,60).')
        return
    }

    if (timeNum < 10) {
        return '0' + timeNum.toString()
    }

    return timeNum.toString()

}

export const getTime = (hour, min, sec) => {
    if (sec === 60) {
        return { hour, min: ++min, sec: 0 }
    }
    
    if (sec === 60 && min === 59) {

        return { hour: ++hour, min: 0, sec: 0 }
    }

    if (sec === 60 && min === 59 && hour === 23) {
        return { hour: 0, min: 0, sec: 0 }
    }

    return { hour, min, sec }
}