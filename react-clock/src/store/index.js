import { observable, computed, action } from 'mobx'

import { getFormatTimeStr, getTime } from '../utils'

class TimerStore {
    hour = 0
    min = 0
    sec = 0
    @observable hourStr = ''
    @observable minStr = ''
    @observable secStr = ''

    @action increaseSec = () => {
        this.sec++
        const timer = getTime(this.hour, this.min, this, sec)
        this.hourStr = getFormatTimeStr(this.hour)
        this.minStr = getFormatTimeStr(this.min)
        this.secStr = getFormatTimeStr(this.sec)
    }
}

export default new TimerStore()