import React, { useEffect, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  
  const countUp = () => {
    // setCount(count + 1)だと現在のstateを参照してしまうからダメ。
    setCount(prevState => prevState + 1)
  }
  const countDown = () => {
    setCount(prevState => prevState - 1)
  }

  // 副作用：レンダリングによって引き起こされる処理
  // レンダリング毎に呼び出される
  useEffect(() => {
    console.log("Current count is...", count)
  })

  // 初回レンダリングの際のみ実行
  useEffect(() => {
    console.log("Fist rendering")
  }, [])

  /* count2が変わったら実行
  useEffect(() => {
    console.log("count2")
  }, [count2])
  */

  return (
    <div>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  )
}

export default Counter