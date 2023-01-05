import React, { useState } from "react"

const TextInput = () => {
  const [name, setName] = useState('')
  
  const handleName = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value)
    console.log(event.currentTarget.value)
  }
  return (
    <input
      onChange={event => handleName(event)}
      type={'text'}
      value={name}
    />
  )
}

export default TextInput