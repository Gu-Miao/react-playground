import React, { useState } from 'react'
import { ModalClass } from '@/components/Modal'

export default function Dialog() {
  const [showClassModdal, setShowClassModdal] = useState(false)
  const [showFuncModal, setShowFuncModal] = useState(false)
  return (
    <div>
      <h1>Dialog</h1>
      <button
        onClick={() => {
          setShowClassModdal(true)
        }}
      >
        open class modal
      </button>
      <button
        onClick={() => {
          setShowFuncModal(true)
        }}
      >
        open func modal
      </button>
      <ModalClass
        show={showClassModdal}
        onClose={() => {
          setShowClassModdal(false)
        }}
        title="my class dialog"
        body={<div>红红火火恍恍惚惚</div>}
        footer={<button>ok</button>}
      />
      <ModalClass
        show={showFuncModal}
        onClose={() => {
          setShowFuncModal(false)
        }}
        title="my func dialog"
        body={<div>函数组件存在问题</div>}
        footer={<button>ok</button>}
      />
    </div>
  )
}
