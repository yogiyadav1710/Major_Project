import React, { Component, useState } from 'react'
import axios from 'axios'
import '../index.css'
import './artist.css'
function UserSignup() {

const [fname,setFname]=useState('')
const [lname,setLname]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
// const [genre,setGenre]=useState('')
const [address,setAddress]=useState('')
const [password,setPassword]=useState('')
const [confirmpassword,setConfirmPassword]=useState('')


    const handleFname=(e)=>{
    setFname(e.target.value)
    }
    const handleLname=(e)=>{
    setLname(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
    setPassword(e.target.value)
    }
    const handlePhone=(e)=>{
    setPhone(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
        }
    const handleConfirmPassword=(e)=>{
    setConfirmPassword(e.target.value)
    }
    const handleApi= async (event)=>{
        event.preventDefault();
    console.log("Api has to work")
    // console.log(fname,lname,email,phone,password);
    const data={
        First_name:fname,
        Last_name:lname,
        Email:email,
        Phone_no:phone,
        // AddPasswordess:address,
        Address:address,
        Password:password,
        ConfirmPassword:confirmpassword
        
    }
    console.log(data)
    axios.post('http://localhost:8081/test/userReg',data)
    .then(result=>{
        // console.log(result.data)
        console.log(result)
    })
    .catch(error=>{
        console.log(error)
    })
    
    // alert('Your Form Submitted Successfully...')
    
    }
    return (
    <div className='user-signup'>
        <form className='signup'>
            <h3>Sign In</h3>

            <div className="mb-3">
        <label>First Name</label>
        <input
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            value={fname}
            onChange={handleFname}
        />
            </div>

            <div className="mb-3">
        <label>Last Name</label>
        <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            value={lname}
            onChange={handleLname}
        />
        </div>
    
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
        <label>PhoneNo</label>
        <input
            type="number"
            className="form-control"
            placeholder="Enter PhoneNo"
            value={phone}
            onChange={handlePhone}
        />
        </div>

        <div className="mb-3">
        <label>Gender</label><br></br>
        <div className="form-check form-check-inline">
        <label>Male</label>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
        <label className="form-check-label" forhtml="inlineRadio1"></label>
        </div>

        <div className="form-check form-check-inline">
        <label>Female</label>
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
        <label className="form-check-label" forhtml="inlineRadio2"></label>
        </div>


        </div>
        <div className="mb-3">
        <label>Address</label>
        <textarea className="form-control" 
        id="exampleFormControlTextarea1" 
        rows="3"
        placeholder="Enter Address"
        value={address}
        onChange={handleAddress}>
        </textarea>
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
        <label>Confirm Password</label>
        <input
            type="password"
            className="form-control"
            placeholder="Enter confirm password"
            value={confirmpassword}
            onChange={handleConfirmPassword}
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
        <button 
            type="submit" 
            className="btn btn-primary"
            onClick={handleApi}
            >

            Submit
        </button>
        </div>
        <div>
        <p className="forgot-password text-right">
        
        <a href="#">Forgot Password?</a>
        </p>
        <p className="forgot-password text-left">
        
        <a href="#">Signin</a>
        </p>
        </div>
        
    </form>
    </div>
    )

}

export default UserSignup;