import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import {RiEyeCloseFill, RiEyeFill} from 'react-icons/ri'
import {FcGoogle} from 'react-icons/fc'
import {ImFacebook2} from 'react-icons/im'
import { Link } from 'react-router-dom'
import './Signup&Signin.css'

const Signin = () => {

  let [passType, setPasstype] = useState(false)

  let handleEye= ()=>{
    setPasstype(!passType)
  }

  return (
    <div className="signupbody">
      <div className="signupform">
        <h2>Signin</h2>
        <div className="extralogin">
          <div className="icon">
            <FcGoogle/>
          </div>
          <span>or</span>
          <div className="icon" style={{color: '#1746A2'}}>
            <ImFacebook2/>
          </div>
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
        <div className="button">
          <Button variant="primary">Signin</Button>
        </div>
        <p className='link'><Link className='mainlink' to="/forgotpass">Forgot password?</Link></p>
        <p className='link'>Don't have any account? <Link className='mainlink' to="/">Signup</Link></p>
      </div>
    </div>
  )
}

export default Signin