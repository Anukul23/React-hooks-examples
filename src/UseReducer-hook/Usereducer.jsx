import React, { useReducer } from 'react'

const Usereducer = () => {
 const initialvalue = {count :0}

 const reducer = (state ,action)=>{

    switch(action.type){
        case "increse" :{
            return {count : state.count+1}
        }
        case "decrese" : {
            return {count : state.count-1}
        }
        default :{
            return state;
        }
    }

   
 }
     const [state , dispatch] = useReducer(reducer ,initialvalue)

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type : "increse"})} style={{marginRight :"10px", borderRadius :"10px"}}>Increment</button>
      <button onClick={()=>dispatch({type : "decrese"})}>Decrement</button>
    </div>
  )
}

export default Usereducer
