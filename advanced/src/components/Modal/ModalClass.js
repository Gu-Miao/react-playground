import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import './modal.less'

export default class ModalClass extends Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }

  componentWillUnmount() {
    document.body.removeChild(this.node)
  }

  render() {
    const { show, onClose, title, body, footer } = this.props
    const maskClass = classnames({
      'bnwc-modal-mask': true,
      hide: !show
    })

    return createPortal(
      <div className={maskClass}>
        <div className="bnwc-modal">
          <div className="bnwc-modal-header">
            <span className="bnwc-modal-title">{title}</span>
            <span className="bnwc-modal-times" onClick={onClose}>
              X
            </span>
          </div>
          <div className="bnwc-modal-body">{body}</div>
          <div className="bnwc-modal-footer">{footer}</div>
        </div>
      </div>,
      this.node
    )
  }
}
