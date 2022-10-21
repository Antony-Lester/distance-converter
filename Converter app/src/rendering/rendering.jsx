import { useState } from 'react'
import conversion from '../conversions'
import Option from './options'


function Form() {
    const [result, setResult] = useState('')
    const [value, setValue] = useState(0)
    const [from, setFrom] = useState('feet')
    const [to, setTo] = useState('feet')

    const handleValue = (event) => {
        setValue(event.target.value)
    }
    const handleConversionFrom = (event) => {
        setFrom(event.target.value)
    }
    const handleConversionTo = (event) => {
        setTo(event.target.value)
    }
    const handleSubmit = (event) => {
      setResult(conversion(value, from, to))
        event.preventDefault()
    }
  return ( 
  <>
    <form action="" onSubmit={handleSubmit} id="form">
      <fieldset>
        <legend>Converter</legend>
        <label htmlFor="value">value </label>
        <input name="value" type="text" id="inputValue" onChange={handleValue}></input>
        <br></br>
        <label htmlFor="conversion">Convert from </label>
        <select name="conversion" id="conversions" onChange={handleConversionFrom}>
        <Option/>
        </select>
        <label htmlFor="conversion"> to </label>
        <select name="conversion" id="conversions" onChange={handleConversionTo}>
        <Option/>
        </select>
        <br></br>
        <button type='submit'>Convert</button> 
      </fieldset>
    </form>
    <h2 id='result'>{result}</h2>
   </>
  );
}

export default Form;
