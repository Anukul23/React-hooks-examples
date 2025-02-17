import React, { useState } from 'react'

const State = () => {
    const [count,setCoutnt] = useState(0)
  return (
    <div>
      <h1>I am clicked {count} times</h1>
      <button onClick={()=> setCoutnt(count+1)}>Incremennt</button>
      <button onClick={()=>setCoutnt(count-1)}>Decrement</button>
    </div>
  )
}

export default State

// it is used for to manage states in component level with the use state we can updade any value in our componnent.
// we can manage our state wuth the help of state . 
