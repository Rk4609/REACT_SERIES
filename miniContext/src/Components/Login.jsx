import React, { useContext,useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')
     const {setUser} = useContext(UserContext)

     const handlesubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
     }
  return (
    <div className='main' >
        <h1>Login</h1>
        <input type='text'
        placeholder='enter username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />

         <input type='password'
        placeholder='enter password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login