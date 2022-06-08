import React, { Fragment, useEffect, useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { loginURL } from '../URLs';
import axios from "axios";
import './login.css';
import { UserContext } from "../UserContext"


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [user , setUser] = useContext(UserContext);

    const navigate = useNavigate();
    useEffect(()=>{
        document.getElementById("toolbar").style.display="none";
    })

    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
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
    const SubmitLogin = async(e) => {
        e.preventDefault();
        const headers = {
            method:'POST',
            body:JSON.stringify({email, password, role: "customer"}),
            headers: new Headers({
                "Content-Type":"application/json",
            })
        }
        const userData = await axios.post(loginURL, {email,password, role})
        // console.log(userData)
        if(userData.status === 200){
            console.log(userData)
            localStorage.setItem("token",userData.data.token)
            const user = await axios.get(
                `https://weddingz-server.herokuapp.com/api/users/me`,{headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }}
              );
            console.log(user)
            setUser(user.data.data.user)
            return(
                <Fragment>
                    {hideOverlay()}
                    {navigate('/')}
                    {document.getElementById("toolbar").style.display="block"}
                </Fragment>
            )
        }
        else{
            console.log(userData.status)
            return(
                <Fragment>
                    {navigate('/login')}
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
                            <div className='col-lg-5 login-box'>
                                <h2 className='login-heading'>
                                    Login
                                </h2>
                                <form className='form-row' onSubmit={SubmitLogin}>
                                    <input className='login-email col-lg-12' onChange={handleEmail} name='email' placeholder='Email..' type="email" required />
                                    <input className='login-email col-lg-12' onChange={handlePassword} name='password' placeholder='Password..' type="password" required />
                                    <button className='view-more-btn' type='submit' onClick={overlayFunctionOn}>
                                        Login
                                    </button>
                                </form>
                            </div>
                            <div className='col-lg-12 flex-vh-center-column'>
                                <div className='black-line'>
                                </div>
                                <p className=''>
                                    Don't have an account? <Link to="/signup"><span className='bubble-span'>Sign Up</span></Link>
                                </p>
                                <p>Are you a vendor? <Link to="/vendor-login"> <button className='common-btn'>Business Signin</button></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;