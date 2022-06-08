import React, { Fragment, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { vendorURL } from '../URLs';
import { Link, useNavigate } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings"
import VendorMenu from "../Common/VendorMenu"
import { venueEditURL } from "../URLs"
import "./dashboard.css";
import { Radio } from 'antd';
import {UserContext} from "../UserContext"

function EditVendor(){
    const [ user, setUser ] = useContext(UserContext)
    const [loader, setLoader] = useState(false)
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [ratingsAverage, setRatingsAverage] = useState(0);
    const [price, setPrice] = useState(0);  
    const [contactNo, setContactNo] = useState(0);
    const [category, setCategory] = useState([
        {values:''}
    ]);
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [travelCost, setTravelCost] = useState('');
    const [paymentTerms, setPaymentTerms] = useState('');
    const [industryExperience,setIndustryExperience] = useState('');
    const [website,setWebsite] = useState('');
    const [facebook,setFacebook] = useState('');
    const [instagram,setInstagram] = useState('');
    const [servicesOffered,setServicesOffered] = useState('');
    const [area,setArea] = useState('');
    const [data, setData] = useState({
        title:"",
        id:"",
        price:0,
        category:"",
        ratingsAverage:0,
        photos:[],
        description:"",
        imgCover:"",
        company:"",
        contactNo:0,
        comments:"",
        website:"",
        area:"",
        address:"",
        facebookUrl:"",
        instagramURL:"",
        servicesOffered:"",
        industryExperience:"",
        paymentTerms:"",
        travelCost:"",
        famousEvents:""
    })

    function titleName(e){
        setTitle(e.target.value)
    }
    function venueRatings(e){
        const venueRatingsValue = parseInt(e.target.value)
        setRatingsAverage(venueRatingsValue)
    }
    function venuePrice(e){
        setPrice(e.target.value)
    }
    function venueContact(e){
        const venueContactValue = parseInt(e.target.value)
        setContactNo(venueContactValue)
    }
    function venueCategory(e){
        setCategory({value:e.target.value})
        console.log(e.target.value)
    }

    function venueDescription(e){
        setDescription(e.target.value)
    }
    function vendorAddress(e){
        setAddress(e.target.value)
    }
    function vendorTravelCost(e){
        setTravelCost(e.target.value)

    }
    function vendorPaymentTerms(e){
        setPaymentTerms(e.target.value)
    }
    function vendorIndustryExperience(e){
        setIndustryExperience(e.target.value)
    }
    function vendorServicesOffered(e){
        setServicesOffered(e.target.value)
    }
    function venueWebsite(e){
        setWebsite(e.target.value)
    }
    function venueFacebook(e){
        setFacebook(e.target.value)
    }
    function venueInstagram(e){
        setInstagram(e.target.value)
    }
    function venueArea(e){
        setArea(e.target.value)
    }
    let { id } = useParams();
    useEffect(() => {
        async function fetchVenueData(){
            const data = await fetch(vendorURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            console.log("Hello")
            const json = await data.json();   
            let result = json.data.allVendors.filter(word => word._id.includes(id));
            console.log(result)
            setLoader(true)
            setData({
                title:result[0].title,
                id:result[0].id,
                price:result[0].price,
                category:result[0].category,
                ratingsAverage:result[0].ratingsAverage,
                location:result[0].location,
                description:result[0].description,
                photos:result[0].photos,
                imgCover:result[0].imgCover,
                company:result[0].company,
                contactNo:result[0].contactNo,
                comments:result[0].comments,
                website:result[0].website,
                area:result[0].area,
                address:result[0].address,
                facebookUrl:result[0].facebookUrl,
                instagramUrl:result[0].instagramUrl,  
                industryExperience:result[0].industryExperience,  
                paymentTerms:result[0].paymentTerms,  
                travelCost:result[0].travelCost,  
                famousEvents:result[0].famousEvents,  
                servicesOffered:result[0].servicesOffered, 
            })
        }
        fetchVenueData()
    }, [])

    // ,.............

    const SubmitForm = async(e) => {      
        const i = category
        e.preventDefault();
 
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('category', category.value)
        formData.append('contactNo', contactNo);
        formData.append('description', description);
        formData.append('address', address);
        formData.append('travelCost', travelCost);
        formData.append('paymentTerms', paymentTerms);
        formData.append('industryExperience', industryExperience);
        formData.append('servicesOffered', servicesOffered);
        formData.append('website', website);
        formData.append('facebook', facebook);
        formData.append('instagram', instagram);
        formData.append('area', area);
        console.log(formData)
        const datav = await fetch(`https://weddingz-server.herokuapp.com/api/v1/vendors/${id}`, {
            method: 'PATCH',
            body:formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        if(datav.status === 200){  
            console.log(datav.status)
            return(
                <Fragment>
                    {hideOverlay()}
                </Fragment>
            )
        }
        
        else{
            console.log(datav.statusText)
            return(
                <Fragment>
                    {keepOverlay()}
                </Fragment>
            )
        }
    }
       
    function overlayFunctionOn(){
        document.getElementById("form-overlay").style.display = "block"
        // {navigate('/')}
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

    if(loader){
        <p>
            Loading...
        </p>
    }

  return (
    <section className="dashboard-section">
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
     <div className="container ">
          <div className="row">
              <div className="col-lg-12 ">
                  <LgHeadings heading_name="Vendor information"/>
              </div>
                      
        <div className="row"> 
            <VendorMenu/>
            
        <div className="col-lg-9">
            <form className="form-row" onSubmit={SubmitForm}>
              <div className="dashboard-box">
                    <div className="col-lg-12 box-heading">
                        <h4>Personal Information</h4>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Login Email ID*</h4></div>
                        <div className="col-lg-8"> <input type="text" name='title' value={user.email}  className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Brand Title*</h4></div>
                        <div className="col-lg-8"> <input type="text"  value={title} name='title' placeholder={data.title}  onChange={titleName} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Price*</h4></div>
                        <div className="col-lg-8"> <input type="number" name='price' value={price} placeholder={data.price} onChange={venuePrice} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Category Name*</h4></div>
                        <div className="col-lg-8"> 
                        <select className="form-control" placeholder="Select Category" defaultValue="Bridal Wear" name='category' value={category} onChange={venueCategory} >    
                            <option value="Bridal Wear" name="category">Bridal Wear</option>
                            <option value="Groom Wear" name="category" >Groom Wear</option>
                            <option value="Photographers" name="category" >Photographers</option>
                            <option value="Parlors" name="category" >Parlors</option>
                            <option value="Decor" name="category" >Decor</option>
                            <option value="Catering" name="category" >Catering</option>
                            <option value="Honeymoon" name="category" >Honeymoon</option>     
                        </select>                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Contact Person Name</h4></div>
                        <div className="col-lg-8"> <input type="text" className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Contact Number*</h4></div>
                        <div className="col-lg-8"> <input type="number" className="form-control" placeholder={data.contactNo} value={data.contactNo} name='contactNo' onChange={venueContact} />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Area</h4></div>
                        <div className="col-lg-8"> <input type="text" name='area' placeholder={data.area} value={area} onChange={venueArea} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Address</h4></div>
                        <div className="col-lg-8"> <input type="text" name='area' placeholder={data.address} value={address} onChange={vendorAddress} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Website Link</h4></div>
                        <div className="col-lg-8"> <input type="url" onChange={venueWebsite} placeholder={data.website} value={website} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Facebook URL</h4></div>
                        <div className="col-lg-8"> <input type="url" onChange={venueFacebook} placeholder={data.facebook} value={facebook} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Instagram URL</h4></div>
                        <div className="col-lg-8"> <input type="url" onChange={venueInstagram} placeholder={data.instagram}  value={instagram} className="form-control" />                 
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Give Detailed Information of your vendor </h4></div>
                        <div className="col-lg-8"> <textarea class="form-control" name='description' onChange={venueDescription} placeholder={data.description} value={description} id="exampleFormControlTextarea1" rows="7"></textarea>                
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-lg-4"><h4 className="info-h">Add more facilties offered by the vendor </h4></div>
                        <div className="col-lg-8"> <textarea class="form-control" name='description' onChange={vendorServicesOffered} placeholder={data.servicesOffered} value={servicesOffered} id="exampleFormControlTextarea1" rows="7"></textarea>                
                        </div>
                    </div>
               

                    <div className="col-lg-12 box-headingg">
                        <h4>Additional Information</h4>
                    </div>
                    <div className="row info-padding">
                         <p className="radio-p">What is your Industry Experience?(In Years)</p>
                         <div className="col-lg-5"> <input type="text"  onChange={vendorIndustryExperience} placeholder={data.industryExperience} value={industryExperience} className="form-control mar" />                 
                        </div>
                    </div>
                    <div className="form-line"></div>


                    <Radio.Group onChange={vendorPaymentTerms} className="info-padding" placeholder={data.paymentTerms}  value={paymentTerms}>
                          <p className="radio-p">What are the payment terms?</p>
                          <Radio className="radio-flex" value={"No Advance"}>No Advance</Radio>
                            <Radio className="radio-flex" value={"25% Advance"}>25% Advance</Radio>
                            <Radio className="radio-flex" value={"50% Advance"}>50% Advance</Radio>
                            <Radio className="radio-flex" value={"100% Advance"}>100% Advance</Radio>
                        </Radio.Group>

                    <div className="form-line"></div>


                    <Radio.Group onChange={vendorTravelCost} className="info-padding" placeholder={data.travelCost} value={ travelCost }>
                          <p className="radio-p">What is your tavel cost policy?</p>
                            <Radio className="radio-flex" value={"Inhouse catering, Outside vendors not permitted"}>Outstation Travel & Stay charges borne by client</Radio>
                            <Radio className="radio-flex" value={"Inhouse catering, Outside vendors allowed"}>Outstation Travel & Stay charges borne by vendor</Radio>
                            <Radio className="radio-flex" value={"No inhouse services, outside vendors allowed"}>Outstation Travel & Stay charges are divided in half</Radio>
                    </Radio.Group>
                        
                    <div className="form-line"></div>
                    <div className="form-submit">
                    <button type='submit'  className='submit-btn' onClick={overlayFunctionOn}>
                          Submit
                    </button>
                    </div>
              </div>
              
              </form>
        </div>           
         </div>
              
          </div>
     </div>
</section>
    )
}

export default EditVendor