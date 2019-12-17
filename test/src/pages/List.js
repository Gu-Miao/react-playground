import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView } from 'antd-mobile'
import { data, getData } from '../data'

class List extends Component {
    constructor(props) {
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })

        this.state = {
            dataSource,
            refreshing: true,
            isLoading: true,
            height: document.documentElement.clientHeight,
            useBodyScroll: false,
        }
    }

    componentDidUpdate() {
        if (this.state.useBodyScroll) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

        const timer = setTimeout(() => {
            this.rData = getData()
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                height: hei,
                refreshing: false,
                isLoading: false,
            })
            clearTimeout(timer)
        }, 1.5 * 1000)
    }

    onRefresh = () => {
        this.setState({ refreshing: true, isLoading: true })
        setTimeout(() => {
            this.rData = getData()
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                refreshing: false,
                isLoading: false,
            })
        }, .6 * 1000)
    }

    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('reach end', event)
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.rData = [...this.rData, ...getData()]
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            })
        }, 1 * 1000)
    }

    render() {
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        )
        let index = 0
        const row = (rowData, sectionID, rowID) => {
            const obj = data[index++]
            return (
                <div key={rowID}
                    style={{
                        padding: '0 15px',
                        backgroundColor: 'white',
                    }}
                >
                    <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
                        {obj.title}
                    </div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
                        <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
                        <div style={{ display: 'inline-block' }}>
                            <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{rowData.des}</div>
                            <div>{index}</div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <ListView
                    key={this.state.useBodyScroll ? '0' : '1'}
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                        {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    </div>)}
                    renderRow={row}
                    renderSeparator={separator}
                    useBodyScroll={this.state.useBodyScroll}
                    style={this.state.useBodyScroll ? {} : {
                        height: this.state.height,
                        border: '1px solid #ddd',
                        margin: '5px 0',
                    }}
                    pullToRefresh={<PullToRefresh
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                    onEndReached={this.onEndReached}
                    pageSize={5}
                />
            </div>
        )
    }
}

export default List