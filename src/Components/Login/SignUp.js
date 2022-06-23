import React, { Fragment, useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { signUpURL } from '../URLs';
import './login.css';
import {isEmail, isStrongPassword} from 'validator';


function SignUp(){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState('')
    const [invalid, setInvalid] = useState(false)
    const [valid, setValid] = useState(false)
    const [disable, setDisable] = useState(true);
    const [invalidSecond, setInvalidSecond] = useState(false)
    const [validSecond, setValidSecond] = useState(false)

    useEffect(()=>{
        document.getElementById("toolbar").style.display="none";

    })
    useEffect(()=> {
        checkPassword()
        checkFinalValidation()
    })
    function firstPassword(e){
        e.preventDefault();
        setPassword(e.target.value)
        if(isStrongPassword(e.target.value, {
            minLength:8, minLowercase:1,minSymbols:1,minUppercase:1
        })){
            setInvalid(false)
            setValid(true)
        }
        else{
            setValid(false)
            setInvalid(true)
        }
    }
    function secondPassword(e){
        e.preventDefault();
        setConfirmPassword(e.target.value)
        if(isStrongPassword(e.target.value, {
            minLength:8, minLowercase:1,minSymbols:1,minUppercase:1
        })){
            setInvalidSecond(false)
            setValidSecond(true)
        }
        else{
            setInvalidSecond(true)
            setValidSecond(false)
        }
    }
    function userName(e){
        e.preventDefault();
        setName(e.target.value)
    }
    function userEmail(e) {
        e.preventDefault();
        setEmail(e.target.value)
        if(isEmail(e.target.value)){
            setEmailError('')
        }
        else{
            setEmailError('Invalid Email')
        }
    }
    
  
    function overlayFunctionOn(){
        document.getElementById("form-overlay").style.display = "block"
    }
    function overlayFunctionOff(){
        document.getElementById("form-overlay").style.display = "none"
    }
    function hideOverlay(){
        document.getElementById("form-overlay").style.display = "none"
        document.getElementById("success").style.display = "block"
    }
    function keepOverlay(){
        document.getElementById("form-overlay").style.display = "none"
        document.getElementById("failed").style.display = "block"
    }
  
    function checkPassword(){
        if(password !== confirmPassword){
            setInvalidSecond(true)
            setValidSecond(false)
        }
        else{
            setInvalidSecond(false)
        }
    }

    function checkFinalValidation(){
        if(name !== '' && email !== ''  && password === confirmPassword && password !== ''){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    const SubmitForm = async(e) => {
        e.preventDefault();
        const headers = {
            method:'POST',
            body:JSON.stringify({name, email, password, confirmPassword, role: "customer"}),
            headers: new Headers({
                "Content-Type":"application/json",
            })
        }
        const userData = await fetch(signUpURL, headers)
        if(userData.status === 200){
            console.log(userData.status)
            return(
                <Fragment>
                    {hideOverlay()}
                </Fragment>
            )
        }
        else{
            console.log("hello")
            console.log(userData.status)
            return(
                <Fragment>
                    {navigate('/signup')}
                    {keepOverlay()}
                </Fragment>
            )
        }
    }
    return(
        <section className=''>
            <div id="form-overlay" onClick={overlayFunctionOff}>
                <div className="loader" id="loader">
                    <div className="loader-mini">
                    </div>
                </div>
                <div style={{display:"none"}} id="success">
                    <p style={{color:"green"}}>
                        Success
                    </p>
                </div>                            
                <div style={{display:"none"}} id="failed">
                    <p style={{color:"red"}}>
                        Failed
                    </p>
                </div>
            </div>
            <div className='container-fluid' style={{paddingLeft:"0px", paddingRight:"0px"}}>
                <div className='row' style={{marginLeft:"0px", marginRight:"0px"}}>
                    <div className='col-lg-6' style={{paddingLeft:"0px", paddingRight:"0px"}}>
                        <img className='login-img' src={process.env.PUBLIC_URL + `/home/login.jpeg`} alt="" />
                    </div>
                    <div className='col-lg-6' style={{paddingLeft:"0px", paddingRight:"0px"}}>
                        <div className='row' style={{marginLeft:"0px", marginRight:"0px"}}>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-5 sign-up-box'>
                                <h2 className='login-heading'>
                                    Sign Up
                                </h2>
                                <form className='form-row' onSubmit={SubmitForm}>
                                     <div>
                                          <input className='login-email col-lg-12' name='name' onChange={userName} placeholder='Name...' type="name" required/>
                                    </div>
                                    <div>
                                            <input className={`login-email col-lg-12 ${emailError !== '' ? "error-border" : "" }`} name='email' onChange={userEmail} placeholder='Email..' type="email" required/>
                                            <p className="input-info-text error-text-color">{emailError}</p>
                                    </div>
                                    <div className="email-container">
                                        <div className="email-container">
                                            <input className={`login-email col-lg-12 ${invalid ? 'error-border' : '' }`} name='password' onChange={firstPassword} placeholder='Password..' minLength="8" type="password" required/>
                                            {/* <img className={`input-img ${invalid ? "" : "display-none"}`} src={process.env.PUBLIC_URL + '/home/error-img.svg'} alt="check0" />
                                            <img className={`input-img ${valid ? "" : "display-none"}`} src={process.env.PUBLIC_URL + '/home/check.svg'} alt="check1" /> */}
                                        </div>
                                             <p className={`input-info-text ${invalid ? 'error-text-color' : ""}`}>Must have at least 8 characters with at least one capital letter and a special character</p>       
                                    </div>
                                    <div className="email-container">
                                        <div className="email-container"> 
                                            <input className={`login-email col-lg-12 ${invalidSecond ? 'error-border' : '' }`} name='confirmPassword' onChange={secondPassword} placeholder='Confirm Password..' type="password" minLength="8" required/>
                                            {/* <img className={invalidSecond ? "input-img" : "display-none"} src={process.env.PUBLIC_URL + '/home/error-img.svg'} alt="check2" />
                                            <img className={validSecond ? "input-img" : "display-none"} src={process.env.PUBLIC_URL + '/home/check.svg'} alt="check3" /> */}
                                        </div>
                                            <p className={`input-info-text col-lg-12 ${invalidSecond ? 'error-text-color' : ""}`}>Must have at least 8 characters with at least one capital letter and a special character</p>
                                    </div>
                                    <Link to="/login">
                                    <button type='submit' onClick={overlayFunctionOn} className={`view-more-btn ${disable ? "opacity-03": "opacity-01"}`} disabled={disable}>
                                        Sign Up
                                    </button>
                                    </Link>
                                </form>
                            </div>
                            <div className='col-lg-12 flex-vh-center-column'>
                                <div className='black-line'>
                                </div>
                                <p className=''>
                                    Already have an account? <Link to="/login"><span className='bubble-span'>Login</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;