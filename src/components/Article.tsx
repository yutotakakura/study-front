import { useState } from "react"
import { Content, PublishButton, Title } from "./index"

// propsは引数のようにコンポーネントに渡される値
// コンポーネント内で更新はできない
type ArticleProps = {
  title: string
  content: string
}

const Article = (props: ArticleProps) => {
  // stateはコンポーネントの内部で宣言・制御される値
  // stateをpsopsに渡すには、関数化して渡す
  const [isPublished, setIsPublished] = useState(false)
  const publishArticle = () => {
    setIsPublished(true)
  }
  // コールバック関数か関数事態を渡す
  // propsに渡すときに関数を実行しない(無限レンダリングが起きる)
  return (
    <div>
      <Title title={props.title}/>
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
    </div>
  )
}

export default Article