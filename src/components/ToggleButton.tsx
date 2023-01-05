import React, { useEffect, useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('Current state is...', open)
    if (open) {
      console.log('Sbscribe database')
    }
    // クリーンアップ関数
    // レンダリング毎に一旦接続を切るみたいな感じで使う
    return () => {
      console.log('Unsubscribe database')
    }
  })
  return (
    <button onClick={toggle}>{open? 'open': 'close'}</button>
  )
}

export default ToggleButton