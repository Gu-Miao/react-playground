import React, { useEffect, useReducer, createRef } from 'react'
import { SearchBar } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import noData from '../images/no_data.png'

const initalState = {
    map: null,
    autoComplete: null,
    list: [],
    isDrawerOpen: false,
    search: ''
}

const INIT_MAP = 'INIT_MAP'
const INIT_AUTO_COMPLETE = 'INIT_AUTO_COMPLETE'
const UPDATE_LIST = 'UPDATE_LIST'
const PUSH_LIST = 'PUSH_LIST'
const UPDATE_IS_DRAWER_OPEN = 'UPDATE_IS_DRAWER_OPEN'
const UPDATE_SEARCH = 'UPDATE_SEARCH'

const reducer = (state, action) => {
    const reducerMap = new Map()
        .set(INIT_MAP, { ...state, map: action.map })
        .set(UPDATE_LIST, { ...state, list: action.list })
        .set(PUSH_LIST, { ...state, list: [...state.list, action.list] })
        .set(UPDATE_IS_DRAWER_OPEN, { ...state, isDrawerOpen: action.isDrawerOpen })
        .set(UPDATE_SEARCH, { ...state, search: action.search })
        .set(INIT_AUTO_COMPLETE, { ...state, autoComplete: action.autoComplete })

    const res = reducerMap.get(action.type)
    if (res) {
        return res
    } else {
        throw new Error(`action type ${action.type} 不存在`)
    }
}

const MapFind = () => {
    const [state, dispatch] = useReducer(reducer, initalState)
    const searchBarElement = createRef()
    // console.log('searchBarElement', searchBarElement)

    useEffect(() => {

        // 实例化高德地图
        const { AMap } = window
        console.log('AMap', searchBarElement)
        dispatch({
            type: INIT_MAP,
            map: new AMap.Map('map', {
                resizeEnable: true
            })
        })
        AMap.plugin('AMap.Autocomplete', () => {
            dispatch({
                type: INIT_AUTO_COMPLETE,
                autoComplete: new AMap.Autocomplete({
                    input: searchBarElement.current ? searchBarElement.current.inputRef : document.querySelector('input.am-search-value'),
                    datatype: 'all',
                    citylimit: true,
                    city: '西宁'
                })
            })
        })
    }, [])

    const searchChange = value => {
        dispatch({
            type: UPDATE_SEARCH,
            search: value
        })
    }

    const searchSubmit = () => {
        state.autoComplete.search(state.search, (status, res) => {
            console.log('智能搜索', status, res)

            if (status === 'complete') {
                dispatch({
                    type: UPDATE_LIST,
                    list: res.tips
                })
            } else if (status === 'no_data') {
                dispatch({
                    type: UPDATE_LIST,
                    list: [<img src={noData} alt="no_data" />]
                })
            } else {
                throw new Error(res)
            }
        })
    }

    console.log('stat', state.list)

    return (
        <main id="#map-find">
            <SearchBar
                cancelText="搜索"
                value={state.search}
                showCancelButton={true}
                placeholder="输入搜索内容"
                onChange={searchChange}
                onCancel={searchSubmit}
                ref={searchBarElement}
            />
            <div id="map" />
            <ul className="list">
                {
                    state.list.map((item, index) => {
                        console.log('item', item)
                        return (
                            <li key={`list-${index}`} className="list-item">
                                {/* {item} */}
                                {item.name}{item.address}
                                {
                                    item.type === 'img' ?
                                        item :
                                        <>
                                            <div>{item.name}</div>
                                            <div>{item.address}</div>
                                        </>
                                }
                                你好
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default MapFind