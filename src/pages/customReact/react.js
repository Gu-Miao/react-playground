function createElement(type, props, ...children) {
  let _props
  const childrenLength = children.length
  if (childrenLength === 1) {
    _props = { ...props, children: children[0] }
  } else if (childrenLength > 1) {
    _props = { ...props, children }
  }

  return {
    type,
    props: _props
  }
}

export { createElement }
