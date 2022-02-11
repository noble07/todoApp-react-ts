import { useRef } from 'react'
import './styles.css'

interface Props {
  input: string,
  setInput: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void
}

const InputField = ({input , setInput, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className='input'
      onSubmit={e => {
        handleAdd(e)
        inputRef.current?.blur()
      }}
    >
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter a task'
        className='input__box'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField