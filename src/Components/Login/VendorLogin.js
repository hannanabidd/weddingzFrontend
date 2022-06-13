import React, { Fragment, useEffect,useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { loginURL } from '../URLs';
import './login.css';
import axios from "axios";
import { UserContext } from "../UserContext"


function VendorLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setUser] = useContext(UserContext);
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        document.getElementById("toolbar").style.display="none";
    })
    useEffect(()=> {
        checkFinalValidation()
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

    function checkFinalValidation(){
        if(email !== ''  && password !== ''){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    const SubmitLogin = async(e) => {
        e.preventDefault();
        const headers = {
            method:'POST',
            body:JSON.stringify({email, password}),
            headers: new Headers({
                "Content-Type":"application/json",
            })
        }
        const userData = await axios.post(loginURL, {email,password})
        
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
                    {navigate('/vendor-dashboard')}
                    {document.getElementById("toolbar").style.display="block"}
                </Fragment>
            )
        }
        else{
            console.log(userData.status)
            return(
                <Fragment>
                    {navigate('/vendor-login')}
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
                                        Vendor Login
                                    </h2>
                                    
                                    <form className='form-row' onSubmit={SubmitLogin}>
                                        <input className='login-email col-lg-12' onChange={handleEmail} name='email' placeholder='Email..' type="email" required />
                                        <input className='login-email col-lg-12' onChange={handlePassword} name='password' placeholder='Password..' type="password" required />
                                        <button  type='submit' onClick={() => {overlayFunctionOn(); }} className={`view-more-btn ${disable ? "opacity-03": "opacity-01"}`} disabled={disable}>
                                            Login
                                        </button>
                                    </form>
                                </div>
                                
                                <div className='col-lg-12 flex-vh-center-column'>
                                    <div className='black-line'>
                                    </div>
                                    <p className=''>
                                        Register as a vendor? <Link to="/vendor-signup"><span className='bubble-span'>Business SignUp</span></Link>
                                    </p>
                                    <p>Are you a customer? <Link to="/login"> <button className='common-btn'>Customer LogIn</button></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default VendorLogin;