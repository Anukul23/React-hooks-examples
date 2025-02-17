import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [value ,setValue] = useState(0);

    const count = useRef(0);
    
useEffect(()=>{
    count.current = count.current+1
})
  return (
    <div>
      <button onClick={()=>setValue(value+1)}>Increment by 1</button>
      <h1>{value}</h1>
      <button onClick={()=>setValue(value-1)}>Decrement by 1</button>
      <h1>Render Count :{count.current} </h1>
    </div>
  )
}

export default UseRef
