type PublishButtonProps = {
  onClick: () => void
  isPublished: boolean
}

const PublishButton = (props: PublishButtonProps) => {
  return (
    <button onClick={() => props.onClick()}>ε¬ιηΆζ: {props.isPublished.toString()}</button>
  )
}

export default PublishButton