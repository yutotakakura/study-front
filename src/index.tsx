import React from "react";
import ReactDOM from "react-dom";
import { Article, Counter, TextInput, ToggleButton } from "./components";

const App = () => {
  return (
    <div>
      <Article
        title={'こんにちは'}
        content={'今日はいい天気です。'}
      />
      <TextInput />
      <Counter />
      <ToggleButton />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))