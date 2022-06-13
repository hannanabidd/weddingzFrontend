import React, {useState, Fragment, useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings";
import {UserContext} from "../UserContext";
import { createBlogURL } from "../URLs";
import Loader from "../Loader"


function CreateBlog() {
const [ user, setUser ] = useContext(UserContext)
const [title, setTitle] = useState([]);
const [shortDescription, setShortDescription] = useState([]);
const [description, setDescription] = useState([]);
const navigate = useNavigate();
const[loader, SetLoader] = useState(false)
    useEffect(() =>
    setTimeout(() =>{
        SetLoader(true)
    },1500)[loader]  
    )
    if (!loader) {
        return <Loader/>;
    }

function blogTitle(e){
    setTitle(e.target.value)
}
function blogDescription(e){
    setDescription(e.target.value)
}
function blogShortDescription(e){
    setShortDescription(e.target.value)
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

const SubmitForm = async(e) => {
    e.preventDefault();
    const imageID = document.querySelector('#image');
    console.log(imageID.files);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('shortDescription', shortDescription);
    for(let i=0; i < imageID.files.length; i++){
        formData.append("photos", imageID.files[i]);
    console.log(formData)}
    console.log(formData)
    const data = await fetch(createBlogURL, {
        method: 'POST',
        body: formData,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    if(data.status === 200){ 
        console.log(data.status)
       {navigate('/allblogs')}  
        return(
            <Fragment>
                {hideOverlay()}
            </Fragment>
        )
    }
    else{
        console.log(data.statusText)
        return(
            <Fragment>
                {keepOverlay()}
            </Fragment>
        )
    }
    }
  return (
      <section className="normal-section">
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
           <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                            <LgHeadings heading_name="Create New Blog"/>
                    </div>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                        <form className="form-row" onSubmit={SubmitForm}> 
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" className="messagefields" placeholder="Title" onChange={blogTitle} />
                                </div>
                                <div className="col-lg-6">  
                                    <input type="text" className="messagefields" placeholder="Short Description" onChange={blogShortDescription} />
                                </div>
                                <div className="col-lg-12">  
                                    <textarea type="text" className="messagefields" placeholder="Detail Description" rows= "5" onChange={blogDescription} />
                                </div>
                                <div className="col-lg-6">  
                                    <input type="text" className="messagefields" placeholder="Enter First Heading"  onChange={blogTitle} />
                                </div>
                                <div className="col-lg-6">  
                                    <input type="text" className="messagefields" placeholder="Enter Second Heading"  onChange={blogTitle} />
                                </div>
                                <div className="col-lg-6">  
                                    <input type="text" className="messagefields" placeholder="Enter Third Heading"  onChange={blogTitle} />
                                </div>
                                <div className="col-lg-6">  
                                    <input type="text" className="messagefields" placeholder="Enter Four Heading"  onChange={blogTitle} />
                                </div>
                                <p>NOTE: please select pictures accordingly. First picure will be your Cover Image</p>
                                <div className="col-lg-12">
                                    <input type="file" name="image[]" id="image" className="form-picture"   multiple/>
                                </div>
                                <div className="blogdiv"> 
                                <button className="blog-btn" onClick={overlayFunctionOn}>
                                        Submit
                                </button>
                                </div>
                            </div>
                            </form>       
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </div>
      </section>
   
  )
}

export default CreateBlog
