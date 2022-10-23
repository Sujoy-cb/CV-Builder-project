import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {RiEyeCloseFill, RiEyeFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './Signup&Signin.css'

const Signup = () => {
  let [passType, setPasstype] = useState(false)
  let [passType2, setPasstype2] = useState(false)

  let handleEye= ()=>{
    setPasstype(!passType)
  }
  let handleEye2= ()=>{
    setPasstype2(!passType2)
  }

  return (
    <div className="signupbody">
      <div className="signupform">
        <h2>Create Account</h2>
        <div>
          <input type="text" placeholder='Your full name'/>
        </div>
        <div>
          <input type="email" placeholder='Email address'/>
        </div>
        <div className="pass">
          <input type={passType? "text" : "password"} placeholder='Type your password'/>
          {passType?
          <RiEyeFill className='eye' onClick={handleEye}/>
          :
          <RiEyeCloseFill className='eye' onClick={handleEye}/>
          }

        </div>
        <div className="pass">
          <input type={passType2? "text" : "password"} placeholder='Confirm password'/>
          {passType2?
          <RiEyeFill className='eye' onClick={handleEye2}/>
          :
          <RiEyeCloseFill className='eye' onClick={handleEye2}/>
          }
        </div>
        <div className="button">
          <Button variant="primary">Create Account</Button>
        </div>
        <p className='link'>Already have an account? <Link className='mainlink' to="/signin">Signin</Link></p>
      </div>
    </div>
  )
}

export default Signup