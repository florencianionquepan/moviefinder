import React, {useState, Fragment} from 'react'

export default function MiHeader() {

  const [text, setText]=useState()
  const [updated, setUpdated]=useState()

  const textOnChange=(event)=>{
    setText(event.target.value)
  }

  const buttonOnClick=()=>{
    setUpdated(text)
  }

  return (
    <Fragment>
        <input type="text" value={text} onChange={textOnChange}/>
        <button onClick={buttonOnClick}>Actualizar</button>
        <p>Peli vieja: {text}</p>
        <p>Peli Nueva: {updated}</p>
    </Fragment>
    
  )
}
