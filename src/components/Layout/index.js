import React from 'react'
import { Link } from 'react-router-dom'
import router from '@/router'
import './layout.less'

export default function index(props) {
  return (
    <div className="layout">
      <div>
        {router.map(
          router =>
            router.title !== 'error' && (
              <Link to={router.path} key={router.title}>
                {router.title}
              </Link>
            )
        )}
      </div>
      {props.children}
    </div>
  )
}
