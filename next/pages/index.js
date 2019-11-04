import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import App from './App'

import '../style.less'

const Main = () => {
    return (
        <Fragment>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" key="ie" />
                <title>简书</title>
                <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" key="favicon" />
            </Head>
            <div id="root">root</div>
            <App />
        </Fragment>
    )
}

export default Main
