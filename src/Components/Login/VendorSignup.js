import React, { Fragment, useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { signUpURL } from '../URLs';
import './login.css';



function SignUp(){
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        document.getElementById("toolbar").style.display="none";

    })
    function firstPassword(e){
        setPassword(e.target.value)
    }
    function secondPassword(e){
        setConfirmPassword(e.target.value)
    }
    function userName(e){
        setName(e.target.value)
    }
    function userEmail(e){
        setEmail(e.target.value)
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
    function checkPassword(e){
        e.preventDefault();
        if(password === confirmPassword){
            console.log("true")
        }
        else{
            console.log(password, confirmPassword)
            console.log("false")
        }
    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        const headers = {
            method:'POST',
            body:JSON.stringify({name, email, password, confirmPassword, role: "vendor"}),
            headers: new Headers({
                "Content-Type":"application/json",
            })
        }
        const userData = await fetch(signUpURL, headers)
        if(userData.status === 201){
            console.log(userData.status)
            return(
                <Fragment>
                    {hideOverlay()}
                    {navigate('/vendor-login')}
                </Fragment>
            )
        }
        else{
            console.log(userData.status)
            return(
                <Fragment>
                    {navigate('/vendor-signup')}
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
                                    Vendor SignUp
                                </h2>
                                <form className='form-row' onSubmit={SubmitForm}>
                                    <input className='login-email col-lg-12' name='email' onChange={userEmail} placeholder='Email..' type="email" required/>
                                    <input className='login-email col-lg-12' name='name' onChange={userName} placeholder='Business Name...' type="name" required/>
                                    <input className='login-email col-lg-12' name='password' onChange={firstPassword} placeholder='Password..' type="password" required/>
                                    <input className='login-email col-lg-12' name='confirmPassword' onChange={secondPassword} placeholder='Confirm Password..' type="password" required/>
                                    <button type='submit' onClick={() => {overlayFunctionOn();}} className='view-more-btn'>
                                          Sign Up 
                                    </button>
                                </form>
                                <button className='view-more-btn' onClick={() => {overlayFunctionOn(); }}>
                                        logout
                                </button>
                            </div>
                            <div className='col-lg-12 flex-vh-center-column'>
                                <div className='black-line'>
                                </div>
                                <p className=''>
                                    Already have an account? <Link to="/vendor-login"><span className='bubble-span'>Login</span></Link>
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