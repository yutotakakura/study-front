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
      <button className="bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2 mr-4"onClick={countUp}>up</button>
      <button className="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2"onClick={countDown}>down</button>
    </div>
  )
}

export default Counter