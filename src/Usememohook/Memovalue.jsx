import React, { useMemo, useState } from 'react'

const Memovalue = () => {
    const[count,setCount] =useState(0);
    const [number ,setNumber]=useState(0);

    const handleChage = (e)=>{
        setNumber(e.target.value);
    }
    const cubeNum =(num)=>{
        return Math.pow(num ,3)
    }

    const result = useMemo(()=>cubeNum(number),[number])
  return (
    <div>
     <input type="number" onChange={handleChage}/>
     <h2>Cube of the number : {result} </h2>
     <button onClick={()=>setCount(count+1)}>Increment</button>
     <h2>Counter :{count} </h2> 
    </div>
  )
}

export default Memovalue
