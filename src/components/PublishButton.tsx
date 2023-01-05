type PublishButtonProps = {
  onClick: () => void
  isPublished: boolean
}

const PublishButton = (props: PublishButtonProps) => {
  return (
    <button onClick={() => props.onClick()}>公開状態: {props.isPublished.toString()}</button>
  )
}

export default PublishButton