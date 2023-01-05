type ContentProps = {
  content: string
}

const Title = (props: ContentProps) => {
  return <p>{props.content}</p>
}

export default Title