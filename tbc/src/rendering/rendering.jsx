import { useState } from 'react'

function Form() {
    const [conversionResult, setConversionResult] = useState({value: 0, from: '', to: ''})

    const handleValue = (event) => {
        // console.log(conversionResult)
        // conversion function tba
        setConversionResult({value: event.target.value, from: conversionResult, to:conversionResult.to})
        console.log(conversionResult)
    }
    const handleConversionFrom = (event) => {
        // console.log(conversionResult)
        setConversionResult({value: conversionResult.value, from: event.target.value, to:conversionResult.to})
        console.log(conversionResult)
    }
    const handleConversionTo = (event) => {
        // console.log(conversionResult)
        setConversionResult({value: conversionResult.value, from: conversionResult.from, to:event.target.value})
        console.log(conversionResult)
    }
    const handleSubmit = (event) => {
        console.log(conversionResult)
        event.preventDefault()
    }
  return (
    <form action="" onSubmit={handleSubmit} id="form">
      <fieldset>
        <legend>Converter</legend>
        <label htmlFor="value">value</label>
        <input name="value" type="text" id="inputValue" onChange={handleValue}></input>
        <br></br>
        <label htmlFor="conversion">Convert from</label>
        <select name="conversion" id="conversions" onChange={handleConversionFrom}>
          <option value="feet">Feet</option>
          <option value="inches">Inches</option>
          <option value="yard">Yard</option>
        </select>
        <label htmlFor="conversion">to</label>
        <select name="conversion" id="conversions" onChange={handleConversionTo}>
          <option value="feet">Feet</option>
          <option value="inches">Inches</option>
          <option value="yard">Yard</option>
        </select>
        <br></br>
        <button type='submit'>Convert</button> 
      </fieldset>
    </form>
  );
}

export default Form;
