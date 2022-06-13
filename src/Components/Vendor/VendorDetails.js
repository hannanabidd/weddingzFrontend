import React, { Fragment, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { vendorURL } from '../URLs';
import '../Venue/venue.css' 
import Ratings from './Ratings';
import {UserContext} from "../UserContext";
import DisplayReviews from "./DisplayReviews";
import {Breadcrumb} from 'antd';
import ImageGallery from "react-image-gallery";

function VendorDetails(){
    const [ user, setUser ] = useContext(UserContext)
    const [vendorData, setVendorData] = useState([])
    const [loader, setLoader] = useState(false)
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
    let { id } = useParams();
    useEffect(() => {
        async function fetchVendorData(){
            const data = await fetch(vendorURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            console.log("Hello")
            const json = await data.json();
            setVendorData(json.data.allVendors)
            console.log(json.data.allVendors)
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
        fetchVendorData()
    }, [])
    if(loader){
        <p>
            Loading...
        </p>
    }

    const images = data.photos.map((photo) => {
        return {
          original: photo,
          originalHeight: "auto",
          originalWidth: "100%",
        };
      });


  return (
    
    <section className="normal-section main-venue">
    <Fragment>
    <div className="container">
                    <Breadcrumb>
                        <Breadcrumb.Item><a className="bread-text"  href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item> <a className="bread-text" href="/vendorcategories">Vendor Categories</a></Breadcrumb.Item>  
                        <Breadcrumb.Item> <a className="bread-text">{data.title}</a></Breadcrumb.Item>           
                    </Breadcrumb>
        <div className="row vendorContainer">
            <div className="col-lg-8">
                <div className="overlap">
                 <img className='venue-img' src={data.photos[1]} height="400px" width="100%" alt="" />
                 <div className='title-details'>
                     <div className='row'>
                         <div className='col-lg-9'>
                           <h2 className='title-d'>{data.title}</h2>  
                           <h5 className='area-d'>{data.area}</h5>
                           <p className='address-d'>{data.address}Johar Town</p>
                            <h5 className='contact-d'>Contact</h5>
                            <p>{data.contactNo} </p>
                        </div>
                         <div className='col-lg-3'>
                            <div className='ratings'>
                                     <img src={process.env.PUBLIC_URL + `/home/ratings.svg`} alt="" /> {data.ratingsAverage}
                            </div>
                         </div>
                     </div>
                 </div>
                 </div>
                 <div className='image-slider'>
                          <ImageGallery
                                autoPlay={false}
                                items={images}
                                showBullets
                                showThumbnails={false}
                            />
                 </div>
            </div>
            <div className="col-lg-4">
                <div className="price-box">
                    <div className="col-lg-12 starting">
                        <h5>Pricing Info</h5>
                    </div>
                    <div className="row">
                    <div className="col-lg-12 ">
                        <h3 className="price-timeslot bottom">Rs.{data.price}<span className="price-timespan">(Taxes Included)</span> <span className="price-times">Per Event</span> </h3>
                        
                    </div>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="row space">
                      <div className="col-lg-6">
                             <button className="btn-contact">View Contact</button>
                      </div>
                      <div className="col-lg-6">
                              <button className="btn-message">Send message</button>
                      </div>
                      <div className="line"></div>
                        <div className="availabilty-form">
                            <h5>Hi, {data.title}</h5>
                            <form className="mailto" href="${user.email}">
                                <div className="row next-line">
                                        <div className="col-lg-6">
                                                 <input type="text" className="message-fields" placeholder="Enter Name" />
                                        </div>
                                        <div className="col-lg-6">
                                             <input type="tel" className="message-fields" placeholder="Enter Number" />
                                        </div>
                                </div>
                                <div className="row next-line">
                                        <div className="col-lg-6">
                                                 <input type="email" className="message-fields" placeholder="Enter Email" />
                                        </div>
                                        <div className="col-lg-6">
                                             <input type="date" className="message-fields" placeholder="Enter Date" />
                                        </div>
                                </div>
                                <div className="row next-line">
                                        <div className="col-lg-6">
                                                 <input type="text" className="message-fields" placeholder="Total No.of guests" />
                                        </div>
                                        <div className="col-lg-6">
                                             <input type="text" className="message-fields" placeholder="Clients perhead Offer" />
                                        </div>
                                </div>
                                 <div className="row next-line">
                                        <div className="col-lg-6">
                                                 <input type="text" className="message-fields" placeholder="Function Type" />
                                        </div>
                                        <div className="col-lg-6">
                                             <input type="text" className="message-fields" placeholder="Morning/Evening" />
                                        </div>
                                </div>
                                <div className="row next">
                                    <button type="submit"  className="btn-availablility">Check Availability & Prices</button>
                                    <p className="btn-p">Complete information ensures you get accurate and timely vendor responses</p>
                                </div>
                            </form>
                        </div>
                    </div>         
                    <div className="row">
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="about-box">
                <div className="about-title">
                    <h3 >About <span>{data.title}</span></h3>
                </div>
                <div className="about-description">
                   <p>{data.description}</p> 
                    <h5>Description</h5>
                    <p>This vendor, {data.title} started practicing  in 2002 as is well known for her unique makeup styles and techniques. She works according to the clients and requirements of the clients, so as to deliver the desired results. She has professional skills and expertise that will make you look stunning on your wedding day.
It’s a dream of every bride to look the best on her wedding day, Rachel Matai understands this and strives to give you the best makeover. Rachel Matai strongly believes in client satisfaction and she will go all in to make you look like a princess. For a makeup artist it is very important to possess an excellent knowledge about makeup and Rachel has an abundance of knowledge when it comes to skin textures and how to treat them. She uses products from brands like Bobbi Brown, Estee lauder, Urban Decay, Anastasia Beverly Hills, MAC, Huda Beauty. If you want flawless makeup, just tell her and she will turn your vision into reality. She is a refined makeup artist who specializes in doing bridal makeup and hairstyles that go with your look. She has been serving for a long time in the industry and her main aim is to bring a smile on the bride's face. She focuses on giving you flawless skin and highlights all your best features.
She has a team to take care of your facial treatments and hair treatments. Natural dewy foundation application and focusing on bringing out the best feature of the face, is her makeup style. She can understand your taste and enhance your look by her makeup. She is very cooperative and customer friendly. She is a makeup artist with a vision and does not take a lot of time to bring out the best in you. She is very professional.</p>
                    
                    <h5>Services Offered</h5>
                    <p>Contact Hamzoo Palace to make your special day look more memorable. She is from Indore but can travel to different cities for her work, the cost of which is borne by the client. Rachel Matai offers a bunch of services which can be tailored and customised as per your needs and preferences. Book her today to get a pretty bridal makeover for your wedding. Services offered by Rachel Matai are: Bridal HD Makeup, 
Hair Extension, 
Engagement Makeup, 
Party Makeup, 
Hair Styling, 
Draping, 
Makeup Extensions, 
False Lashes</p>
                </div>

            </div>
        </div>
        <div className="row">
            <div className="policies-box">
                <div className="row">
                    <div className="col-lg-3 policy">
                        <h5>Industry Experience</h5>
                        <p>5 Years</p>
                        <p>{data.startingYear}</p>
                    </div>
                    <div className="col-lg-3 policy">
                    <h5>Payment Terms</h5>
                    <p>25% Advance</p>
                        <p>{data.DJPolicy}</p>
                    </div>
                    <div className="col-lg-3 policy">
                    <h5>Travel Cost</h5>
                    <p>Outstation Travel & Stay charges borne by client </p>
                        <p>{data.refundPolicy}</p>
                    </div>
                    <div className="col-lg-3 policy">
                        <h5>Any Famous Events</h5>
                        <p>Master Paints Wedings</p>
                        <p>{data.cateringPolicy}</p>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="row">
            <div className="review-box">
                <div className="about-title">
                        <h3 >Reviews for <span>{data.title}</span> </h3>
                </div>
                <div className='col-lg-8 write-review'>
                    <h4>Review {data.title}</h4>                
                        <div className='review-sec'>
                                <Ratings />
                         </div>            
                </div>
                <div className="reviews">
                   <DisplayReviews/>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
            
            </section>

  )
}

export default VendorDetails