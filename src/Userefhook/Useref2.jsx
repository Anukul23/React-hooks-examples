import React, { useRef } from 'react'

const Useref2 = () => {
    const inputElement = useRef();

    const buttonclick = ()=>{

        inputElement.current.style.background = "red"
    }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={buttonclick}>Click Me </button>
    </div>
  )
}

export default Useref2
