import React from 'react'
import "./Login.css"

export const Login = () => {
  return (
    
    <div class="container">
    <div class="brand-title">Login </div>
    <div class="inputs">
        <label>Email</label>
        <input type="email" placeholder="example@test.com" />
        <label>Password</label>
        <input type="password" placeholder="Min 6 charaters long" />
        <button type="submit">Login</button>
  </div>
</div>

  )
}

