import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Article, Counter, TextInput, ToggleButton } from "./components";

const App = () => {
  const [id, setId] = useState('yutotakakura')

  const ids = ['deatiger', 'aws', 'google']
  const getrandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])
  return (
    <div>
      <Article
        title={'こんにちは'}
        content={'今日はいい天気です。'}
      />
      <TextInput />
      <Counter />
      <ToggleButton />
      <p>{id}</p>
      <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2" onClick={() => getrandomId()}>idを変更</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))