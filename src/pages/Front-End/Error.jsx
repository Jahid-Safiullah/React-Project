import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h1 className='fw-bold'>404</h1>
        <h3> This Page is not found on the server.</h3>
      
         <img className=''style={{height:"200px"}} src="src/assets/google-error-bot.png" alt="error" />
        <h5><Link style={{textDecoration:"none"}} to="/">Go to Home </Link></h5>
    </div>
  )
}
