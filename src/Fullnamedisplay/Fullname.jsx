import React, { useState } from 'react'

const Fullname = () => {
    const[firstname ,setFirstname] =useState("");
    const [lastname ,setLastname] =useState("");
    const[fullname , setFullname] = useState("")
  return (
    <div>
      <form action="" onSubmit={(event)=>{
        event.preventDefault()
        setFullname(`FUll Name is :  ${firstname} ${lastname}`)}}>
      <h1>Full Name Display </h1>
      <label >First Name : </label>
      <input type="text" onChange={(e)=>setFirstname(e.target.value)}/>
      <br/><br/>

      <label >Last Name : </label>
      <input type="text" onChange={(e)=>setLastname(e.target.value)} />
      <br/>
      <br />

      <button type='submit'> Submit</button>
      {firstname.length >0 && lastname.length>0 ? <h3>{fullname}</h3> : ""}
      </form>
    </div>
  )
}

export default Fullname
