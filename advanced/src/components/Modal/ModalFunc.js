import React, { useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import classnames from 'classnames'
import './modal.scss'

const Modal = props => {
  const { title, body, footer, show, onClose } = props
  const node = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    document.body.appendChild(node)
    return () => {
      document.body.removeChild(node)
    }
  }, [node])

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
    node
  )
}

export default Modal
