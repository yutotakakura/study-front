import React from "react";
import ReactDOM from "react-dom";
import Article from "components/Article";

const App = () => {
  return (
    <div>
      <Article
        title={'こんにちは'}
        content={'今日はいい天気です。'}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))