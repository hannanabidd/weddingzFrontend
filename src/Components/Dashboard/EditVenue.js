import React, { Fragment, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { venueURL } from '../URLs';
import { Link, useNavigate } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings"
import VendorMenu from "../Common/VendorMenu"
import { venueEditURL } from "../URLs"
import "./dashboard.css";
import { Radio } from 'antd';
import {UserContext} from "../UserContext"


function EditVenue(){
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
    const [cateringPolicy, setCateringPolicy] = useState('');
    const [DJPolicy, setDJPolicy] = useState('');
    const [decorPolicy, setDecorPolicy] = useState('');
    const [refundPolicy, setRefundPolicy] = useState('');
    const [kitchen, setKitchen] = useState('');
    const [parking,setParking] = useState('');
    const [website,setWebsite] = useState('');
    const [facebook,setFacebook] = useState('');
    const [instagram,setInstagram] = useState('');
    const [spacesAvailable,setSpacesAvailable] = useState('');
    const [area,setArea] = useState('');
    const [facilities,setFacilities] = useState('');
    const [perHeadMorning,setPerHeadMorning] = useState('');
    const [perHeadEvening,setPerHeadEvening] = useState('');
    const [startingYear,setStartingYear] = useState('');
    const [advanceBooking,setAdvanceBooking] = useState('');
    const [data, setData] = useState({
        title:"",
        id:"",
        price:0,
        category:"",
        ratingsAverage:0,
        parking:"",
        cateringPolicy:"",
        refundPolicy:"",
        DJPolicy:"",
        decorPolicy:"",
        kitchen:"",
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
        startingYear:0,
        advanceBooking:0,
        spacesAvailable:"",
        perHeadMorning:"",
        perHeadEvening:"",
     
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
    function venueCateringPolicy(e){
        setCateringPolicy(e.target.value)
    }
    function venueDJPolicy(e){
        setDJPolicy(e.target.value)
    }
    function venueDecorPolicy(e){
        setDecorPolicy(e.target.value)
    }
    function venueRefundPolicy(e){
        setRefundPolicy(e.target.value)
    }
    function venueKitchen(e){
        setKitchen(e.target.value)
    }
    function venueParking(e){
        setParking(e.target.value)
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
    function venueSpaceAvailable(e){
        setSpacesAvailable(e.target.value)
    }
    function venueArea(e){
        setArea(e.target.value)
    }
    function venueFacilities(e){
        setFacilities(e.target.value)
    }
    function venuePerHeadMorning(e){
        setPerHeadMorning(e.target.value)
    }
    function venuePerHeadEvening(e){
        setPerHeadEvening(e.target.value)
    }
    function venueStartingYear(e){
        setStartingYear(e.target.value)
    }
    function venueAdvanceBooking(e){
        setAdvanceBooking(e.target.value)
    }
    let { id } = useParams();
    useEffect(() => {
        async function fetchVenueData(){
            const data = await fetch(venueURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            console.log("Hello")
            const json = await data.json();
            
            let result = json.data.allVenues.filter(word => word._id.includes(id));
            console.log(result)
            setLoader(true)
            setData({
                title:result[0].title,
                id:result[0].id,
                price:result[0].price,
                category:result[0].category,
                ratingsAverage:result[0].ratingsAverage,
                parking:result[0].parking,
                location:result[0].location,
                cateringPolicy:result[0].cateringPolicy,
                refundPolicy:result[0].refundPolicy,
                DJPolicy:result[0].DJPolicy,
                decorPolicy:result[0].decorPolicy,
                kitchen:result[0].kitchen,
                imgCover:result[0].imgCover,
                company:result[0].company,
                contactNo:result[0].contactNo,
                comments:result[0].comments,
                website:result[0].website,
                description:result[0].description,
                area:result[0].area,
                address:result[0].address,
                facebookUrl:result[0].facebookUrl,
                instagramUrl:result[0].instagramUrl,
                startingYear:result[0].startingYear,
                advanceBooking:result[0].advanceBooking,
                spacesAvailable:result[0].spacesAvailable,
                perHeadMorning:result[0].perHeadMorning,
                perHeadEvening:result[0].perHeadEvening,
               
            })
        }
        fetchVenueData()
    }, [])

    // ...................

    
    const SubmitForm = async(e) => {      
        const i = category
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('category', category.value)
        formData.append('contactNo', contactNo);
        formData.append('description', description);
        formData.append('DJPolicy', DJPolicy);
        formData.append('cateringPolicy', cateringPolicy);
        formData.append('decorPolicy', decorPolicy);
        formData.append('refundPolicy', refundPolicy);
        formData.append('kitchen', kitchen);
        formData.append('parking', parking);
        formData.append('website', website);
        formData.append('facebook', facebook);
        formData.append('instagram', instagram);
        formData.append('spacesAvailable', spacesAvailable);
        formData.append('area', area);
        formData.append('facilities', facilities);
        formData.append('perHeadMorning', perHeadMorning);
        formData.append('perHeadEvening', perHeadEvening);
        formData.append('startingYear', startingYear);
        formData.append('advanceBooking', advanceBooking);
        console.log(formData)
        const datav = await fetch( `https://weddingz-server.herokuapp.com/api/v1/venues/${id}`, {
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
                          <LgHeadings heading_name="Vendor information"/></div>
                              
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
                                <div className="col-lg-8"> <input type="text" name='email' value={user.email}  className="form-control" />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Brand Title*</h4></div>
                                <div className="col-lg-8"> <input type="text"  value={title} name='title' placeholder={data.title} onChange={titleName} className="form-control" />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Price*</h4></div>
                                <div className="col-lg-8"> <input type="number" name='price' value={price} placeholder={data.price} className="form-control" onChange={venuePrice}/>                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Category Name*</h4></div>
                                <div className="col-lg-8"> 
                                <select className="form-control" placeholder="Select Category" name='category'  onChange={venueCategory}  >
                                    Select Category
                                    <option value="Marquees" name="category">Marquees</option>
                                    <option value="Banquet Halls" name="category" >Banquet Halls</option>
                                    <option value="Farmhouses" name="category" >Farmhouses</option>
                                    
                                </select>                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Contact Person Name*</h4></div>
                                <div className="col-lg-8"> <input type="text" className="form-control"  />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Contact Number*</h4></div>
                                <div className="col-lg-8"> <input type="number" className="form-control" placeholder={data.contactNo} value={data.contactNo} name='contactNo' onChange={venueContact} />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Area</h4></div>
                                <div className="col-lg-8"> <input type="text" name='area' placeholder={data.area} value={area} className="form-control" onChange={venueArea} />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Website Link</h4></div>
                                <div className="col-lg-8"> <input type="url" placeholder={data.website} value={website} className="form-control" onChange={venueWebsite} />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Facebook URL</h4></div>
                                <div className="col-lg-8"> <input type="url" placeholder={data.facebook} value={facebook} className="form-control" onChange={venueFacebook} />                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Instagram URL</h4></div>
                                <div className="col-lg-8"> <input type="url" placeholder={data.instagram}  value={instagram} className="form-control"  onChange={venueInstagram}/>                 
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Give Detailed Information of your venue </h4></div>
                                <div className="col-lg-8"> <textarea class="form-control" name='description' placeholder={data.description} value={description} onChange={venueDescription} id="exampleFormControlTextarea1" rows="7"></textarea>                
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Add more facilties offered by the vendor </h4></div>
                                <div className="col-lg-8"> <textarea class="form-control" name='description' placeholder={data.facilities} value={facilities} onChange={venueFacilities} id="exampleFormControlTextarea1" rows="7"></textarea>                
                                </div>
                            </div>
                            <div className="row" style={{marginTop: "10px"}}>
                                <div className="col-lg-4"><h4 className="info-h">Add spaces available in the venue </h4></div>
                                <div className="col-lg-8"> <textarea class="form-control" name='description' placeholder={data.spacesAvailable} value={spacesAvailable} onChange={venueSpaceAvailable} id="exampleFormControlTextarea1" rows="7"></textarea>                
                                </div>
                            </div>
                          

                            {/* Additional Information */}

                            <div className="col-lg-12 box-headingg">
                                <h4>Additional Information</h4>
                            </div>
                            <div className="row info-padding">
                                 <p className="radio-p">What year did your venue start operations?</p>
                                 <div className="col-lg-5"> <input type="text"  placeholder={data.startingYear} onChange={venueStartingYear} className="form-control mar" />                 
                                </div>
                            </div>
                            <div className="form-line"></div>

                            <div className="row info-padding">
                                 <p className="radio-p">What is the per head price in the Morning?</p>
                                 <div className="col-lg-5"> <input type="Number" name='price' placeholder={data.perHeadMorning} onChange={venuePerHeadMorning}  className="form-control mar" />                 
                                </div>
                            </div>
                            <div className="form-line"></div>

                            <div className="row info-padding">
                                 <p className="radio-p">What is the per head price in the Evening?</p>
                                 <div className="col-lg-5"> <input type="Number" placeholder={data.perHeadEvening} onChange={venuePerHeadEvening} className="form-control mar" />                 
                                </div>
                            </div>
                            <div className="form-line"></div>

                            <div className="row info-padding">
                                 <p className="radio-p">What is the booking amount (in percentage terms you take) to block a date?</p>
                                 <div className="col-lg-5"> <input type="text" placeholder={data.advanceBooking} onChange={venueAdvanceBooking} className="form-control mar"  />                 
                                </div>
                            </div>
                            <div className="form-line"></div>

                            <Radio.Group  className="info-padding" placeholder={data.parking} onChange={venueParking} >
                                  <p className="radio-p">Is parking available at the venue?</p>
                                    <Radio className="radio-flex" value={"There is sufficient parking available"}>There is sufficient parking available</Radio>
                                    <Radio className="radio-flex" value={"Parking is available near the venue"}>Parking is available near the venue</Radio>
                                    <Radio className="radio-flex" value={"No parking available"}>No parking available</Radio>
                                </Radio.Group>

                            <div className="form-line"></div>

                            <Radio.Group  className="info-padding" placeholder={data.refundPolicy} onChange={venueRefundPolicy}>
                                  <p className="radio-p">Please describe your cancellation policy ( if a user initiates cancellation) including whether you provide refunds of booking amounts , and terms for doing so.</p>
                                    <Radio className="radio-flex" value={"No Refund Offered after booking"}>No Refund Offered after booking</Radio>
                                    <Radio className="radio-flex" value={"No Refund Offered However Date Adjustment Can Be Done"}>No Refund Offered However Date Adjustment Can Be Done</Radio>
                                    <Radio className="radio-flex" value={"Full Refund Offered"}>Full Refund Offered</Radio>
                            </Radio.Group>

                            <div className="form-line"></div>

                            <Radio.Group  className="info-padding" placeholder={data.cateringPolicy} onChange={venueContact}>
                                  <p className="radio-p">What is your policy on catering?</p>
                                    <Radio className="radio-flex" value={"Inhouse catering, Outside vendors not permitted"}>Inhouse catering, Outside vendors not permitted</Radio>
                                    <Radio className="radio-flex" value={"Inhouse catering, Outside vendors allowed"}>Inhouse catering, Outside vendors allowed</Radio>
                                    <Radio className="radio-flex" value={"No inhouse services, outside vendors allowed"}>No inhouse services, outside vendors allowed</Radio>
                            </Radio.Group>

                            <div className="form-line"></div>
                            
                            <Radio.Group  className="info-padding" placeholder={data.decorPolicy} onChange={venueDecorPolicy} >
                                  <p className="radio-p">What is your policy on decor?</p>
                                    <Radio className="radio-flex" value={"Decorators should be chosen only from enlisted Panel"}>Decorators should be chosen only from enlisted Panel</Radio>
                                    <Radio className="radio-flex" value={"Outside decorators permitted with extra chanrge"}>Outside decorators permitted with extra chanrge</Radio>
                                    <Radio className="radio-flex" value={"In-house Decor available "}>In-house Decor available </Radio>
                            </Radio.Group>

                            <div className="form-line"></div>
                            
                            <Radio.Group  className="info-padding" placeholder={data.DJPolicy} onChange={venueDJPolicy}>
                                  <p className="radio-p">What is your policy on DJ's?</p>
                                    <Radio className="radio-flex" value={"In house DJ available, Outside DJ permitted"}>In house DJ available, Outside DJ permitted</Radio>
                                    <Radio className="radio-flex" value={"In house DJ not available, Outside DJ permitted"}>In house DJ not available, Outside DJ permitted</Radio>
                                    <Radio className="radio-flex" value={"In house DJ available, Outside DJ not permitted"}>In house DJ available, Outside DJ not permitted</Radio>
                            </Radio.Group>

                            <div className="form-line"></div>

                            <Radio.Group  className="info-padding" placeholder={ data.kitchen } onChange={venueKitchen}>
                                  <p className="radio-p">Is kitchen available at the venue?</p>
                                    <Radio className="radio-flex" value={"Not Available at the venue"}>Not Available at the venue</Radio>
                                    <Radio className="radio-flex" value={"Available and free to use"}>Available and free to use</Radio>
                                    <Radio className="radio-flex" value={"Available but have to pay extra for it"}>Available but have to pay extra for it</Radio>
                            </Radio.Group>
                                
                            <div className="form-line"></div>
                               
                            <div className="form-submit">
                            <button type='submit'  className='submit-btn' onClick={overlayFunctionOn}>
                                  Edit
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

export default EditVenue
