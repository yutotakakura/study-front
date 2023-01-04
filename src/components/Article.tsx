type ArticleProps = {
  title: string
  content: string
}

const Article = (props: ArticleProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Article