import React, { Component } from 'react'
import {useState} from 'react'
import axios from 'react'
function UserLogin() {
  

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
      setPassword(e.target.value)
    }

    const handleSubmit=()=>{
      console.log(email,password)
      axios.post('http://localhost:8081/test/',{
        // fname:fname,
        // lname:lname,
        email:email,
        // phone:phone,
        password:password
        
      })
      .then(result=>{
        console.log(result.data)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          {/* <button type="submit" className="btn btn-primary" onClick={handleApi}> */}
          <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  
}

export default UserLogin;