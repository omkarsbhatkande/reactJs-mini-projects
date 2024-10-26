import {useState} from 'react'

const Form = () => {

  const [text,setText] = useState('');
  return (
    <div>
      <form>
        <input onChange={(e)=>setText(e.target.value)} type="text" value={text} />
        <h1>{text}</h1>
      </form>
    </div>
  )
}

export default Form
