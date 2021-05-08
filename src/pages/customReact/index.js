import React from 'react'
import { createElement } from './react'

const Export = () => {
  const vnode = createElement('div', {}, <div>1</div>, <div>2</div>)
  const vnode1 = createElement('div', {}, <div>1</div>, <div>2</div>)
  console.log(vnode)
  console.log(vnode1)
  return <div></div>
}

export default Export
