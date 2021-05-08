function render(vnode, container) {
  const { type } = vnode
  let node

  if (type === 'TEXT') {
    node = document.createTextNode('')
  } else {
    node = document.createElement(type)
  }

  

  container.append(node)
}

export { render }
