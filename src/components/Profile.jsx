import React, { useContext } from 'react'
import Contact from './Contact'
import { AppContext } from '../UseContext-hook/Context/Appcontext'

const Profile = () => {

    const {name} = useContext(AppContext)
  return (
    <div>
      <h1>Profile</h1>
      <h2> Name :{name}</h2>
      <Contact/>
    </div>
  )
}

export default Profile
