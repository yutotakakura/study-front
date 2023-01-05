import { Content, Title } from "./index"

type ArticleProps = {
  title: string
  content: string
}

const Article = (props: ArticleProps) => {
  return (
    <div>
      <Title title={props.title}/>
      <Content content={props.content} />
    </div>
  )
}

export default Article