import React, { Fragment, useEffect, useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { loginURL } from '../URLs';
import axios from "axios";
import './login.css';
import { UserContext } from "../UserContext";
import validator from 'validator';
import {isEmail, isStrongPassword} from 'validator';
import SimpleBackdrop from '../BackDrop'
import {NotificationContainer, NotificationManager} from 'react-notifications';


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [user , setUser] = useContext(UserContext);
    const [disable, setDisable] = useState(true);
    const [emailError, setEmailError] = useState('')
    const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");


    const navigate = useNavigate();
    useEffect(()=>{
        document.getElementById("toolbar").style.display="none";
    })
    useEffect(()=> {
        checkFinalValidation()
    })
    useEffect(()=>{
		if(!error) return;
		const id = setTimeout(() => setError(""), 4000);

		return () => clearTimeout(id)
	},[error])

    function handleEmail(e) {
        e.preventDefault();
        setEmail(e.target.value)
        if(isEmail(e.target.value)){
            setEmailError('')
        }
        else{
            setEmailError('Invalid Email')
        }
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
        if(email != ''  && password != ''){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
    const SubmitLogin = async(e) => {
        e.preventDefault();
        setLoading(true);
        // if(error) {
		// 	setError(error.response?.data);
		// 	setLoading(false);
		// 	return;
		// }
      
        validator.isEmail('foo@gmail.com'); 

        console.log("hello")
        const userData = await axios.post(loginURL, {email,password, role})
        console.log(userData)
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
                    {/* {hideOverlay()} */}
                    {navigate('/')}
                    {document.getElementById("toolbar").style.display="block"}
                </Fragment>
            )
        }
        else{
            console.log(userData.status)
            setLoading(false)
            NotificationManager.error('Error message', 'Click me!', 5000)
            return(
                <Fragment>
                    {navigate('/login')}
                    {/* {keepOverlay()} */}
                </Fragment>
            )
        }
    }



    return(
        <section className='scs'>
            <SimpleBackdrop loading={loading} />
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
                                    <input className='login-email col-lg-12' onChange={handleEmail} disabled={loading} id="outlined-basic" name='email' placeholder='Email..' type="email" required  />
                                    <input className='login-email col-lg-12' onChange={handlePassword} disabled={loading} id="outlined-basic" name='password' placeholder='Password..' type="password" required />
                                    <button  type='submit' onClick={SubmitLogin} disabled={loading} className={`view-more-btn ${disable ? "opacity-03": "opacity-01"}`} >
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
            <NotificationContainer/>
        </section>
    )
}

export default Login;