import React, { useState } from 'react'

const Form = () => {
  const [formdata ,setFormdata] = useState({
      
    username :"",
    email:"",
    password:"",
    confirmpassword:""
  })


  const handleSubmit =(e)=>{
    e.preventDefault();
  }

  const handleChange =(e)=>{

const {name,value} = e.target;

setFormdata({...formdata , [name] : value})
  }
  
  return (
    <div>
      <h1 style={{color :"blue"}}>Form Validation</h1>
      <form action="" onSubmit={handleSubmit}>
      
      <div>
      <label >User Name : </label>
      <input type="text" 
      name='username' 
      value={formdata.username}
      placeholder='Enter your User name'
      onChange={ handleChange} />
      </div>

      <div>
      <label >Email : </label>
      <input type="email" 
      name='email' 
      value={formdata.email}
      placeholder='Enter your Email' 
      onChange={ handleChange}/>
      </div>

      <div>
      <label >Password : </label>
      <input type="password" 
      name='password' 
      value={formdata.password}
      placeholder='Enter your Password' 
      onChange={ handleChange}/>
      </div>

      <div>
      <label >Confirm password : </label>
      <input type="password" 
      name='confirmpassword' 
      value={formdata.confirmpassword}
      placeholder='Reenter your password' 
      onChange={ handleChange}/>
      </div>



      </form>
    </div>
  )
}

export default Form
