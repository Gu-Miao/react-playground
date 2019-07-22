import axios from 'axios'

import { url } from '../config'
import { print } from './'

const ajax = axios.create({
    baseURL: url
})

export const get = (url, params) => new Promise((resolve, reject) => {
    ajax
        .get(url, params)
        .then(data => resolve(data))
        .catch(err => {
            reject()
            print(err, url, 'error')
        })
})

export const get = (url, params) => new Promise((resolve, reject) => {
    ajax
        .get(url, params)
        .then(data => resolve(data))
        .catch(err => {
            reject()
            print(err, url, 'error')
        })
})
