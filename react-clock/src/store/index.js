import { observable, action } from 'mobx'

import { getFormatTimeStr, getTime } from '../utils'

class TimerStore {
    hour = 0
    min = 0
    sec = 0
    @observable hourStr = '...'
    @observable minStr = '...'
    @observable secStr = '...'

    @action increaseSec = () => {
        this.sec++
        const { hour, min, sec } = getTime(this.hour, this.min, this.sec)
        this.hourStr = getFormatTimeStr(hour, true)
        this.minStr = getFormatTimeStr(min)
        this.secStr = getFormatTimeStr(sec)
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }

    initTime = () => {
        const now = new Date()
        this.hour = now.getHours()
        this.min = now.getMinutes()
        this.sec = now.getSeconds()
    }
}

export default new TimerStore()