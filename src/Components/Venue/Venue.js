import React, { Fragment, useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { venueURL } from '../URLs';
import Ratings from './Ratings';
import {Stripe} from './Stripe';
import DisplayReviews  from './DisplayReviews';
import {UserContext} from "../UserContext";
import Footer from '../Footer/Footer';
import { Breadcrumb } from 'antd';
import ImageGallery from "react-image-gallery";

function Venue(){
    const [ user, setUser ] = useContext(UserContext)
    const [venueData, setVenueData] = useState([])
    const [loader, setLoader] = useState(false)
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
        menu:{
            title:"",
            price:"",
            foodItemOne:"",
            foodItemTwo:"",
            foodItemThree:"",
            foodItemFour:"",
            foodItemFive:"",
            foodItemSix:"",
        },
        startingYear:0,
        advanceBooking:0,
        spacesAvailable:"",
        perHeadMorning:"",
        perHeadEvening:"",
        facilitiesOffered:"",
     
    })
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
            setVenueData(json.data.allVenues)
            console.log(json.data.allVenues)
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
                photos:result[0].photos,
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
                facilitiesOffered:result[0].facilitiesOffered,
                menu:{
                    title:result[0].title,
                    price:result[0].price,
                    foodItemOne:result[0].foodItemOne,
                    foodItemTwo:result[0].foodItemTwo,
                    foodItemThree:result[0].foodItemThree,
                    foodItemFour:result[0].foodItemFour,
                    foodItemFive:result[0].foodItemFive,
                    foodItemSix:result[0].foodItemSix,
                }
            })
        }
        fetchVenueData()
    }, [])
    if(loader){
        <p>
            Loading...
        </p>
    }
    localStorage.setItem('venueId',data.id)
    
    const handleBooking = (id )=>{
        console.log(id)
    Stripe(id)
    Ratings(id)
    DisplayReviews(id)
    }

    const images = data.photos.map((photo) => {
        return {
          original: photo,
          originalHeight: "auto",
          originalWidth: "100%",
        };
      });

    return(

        <section className="normal-section main-venue">
            <Fragment>
            <div className="container ">
                     <Breadcrumb>
                        <Breadcrumb.Item><a className="bread-text"  href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item> <a className="bread-text" href="/venues">Venues</a></Breadcrumb.Item>  
                        <Breadcrumb.Item> <a className="bread-text" href="">{data.title}</a></Breadcrumb.Item>           
                    </Breadcrumb>
                <div className="row venueContainer">
                    <div className="col-lg-8 ">
                        <div className="overlap">
                         <img className='venue-img' src={data.photos[1]} height="400px" width="100%" alt="" />
                         <div className='title-details'>
                             <div className='row'>
                                 <div className='col-lg-9'>
                                   <h2 className='title-d'>{data.title}</h2>  
                                   <h5 className='area-d'>{data.area}</h5>
                                   <p className='address-d'>{data.address}</p>
                                    <h5 className='contact-d'>Contact</h5>
                                    <p>{data.contactNo}</p>
                                </div>
                                 <div className='col-lg-3'>
                                    <div className='ratings'>
                                             <img src={process.env.PUBLIC_URL + `/home/ratings.svg`} alt="" /> {data.ratingsAverage}
                                    </div>
                                 </div>
                             </div>
                         </div>
                         </div>
                        <div  className='image-slider'>
                    
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
                                <h3 className="price-timeslot bottom">Rs.{data.perHeadMorning}<span className="price-timespan">(Taxes Included)</span> <span className="price-times">Morning</span> </h3>
                                <h3 className="price-timeslot">Rs.{data.perHeadEvening}<span className="price-timespan">(Taxes Included)</span> <span className="price-times">Evening</span> </h3>
                              <button id="book-venue" className="book-venue-btn" data-venue-id={id} type="submit" onClick={()=>handleBooking(id)}>Book Venue</button>

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
                                    <form>
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
                                            <button type="submit" className="btn-availablility">Check Availability & Prices</button>
                                            <p className="btn-p">Complete information ensures you get accurate and timely vendor responses</p>
                                        </div>
                                    </form>
                                </div>
                              
                            </div>
                                
                            <div className="row">

                                    
                            </div>
                            
                        </div>
                        {/* <div className="footer-logos-box">
                            <a href={data.facebookUrl}>
                                <div className="footer-circle flex-vh-center">
                                    <img className='footer-logo' src={process.env.PUBLIC_URL + `/home/facebook.svg`} alt="" />
                                </div>
                            </a>
                            <a href= {data.instagramURL}>
                                <div className="footer-circle flex-vh-center">
                                    <img className='footer-logo' src={process.env.PUBLIC_URL + `/home/instagram.svg`} alt="" />
                                </div>
                            </a>
                        </div> */}
                    </div>
                </div>
                <div className="row">
                    <div className="about-box">
                        <div className="about-title">
                            <h3 >About <span>{data.title}</span></h3>
                        </div>
                        <div className="about-description">
                           <p>{data.description}</p> 
                            <h5>Facilities Offered</h5>
                            <p>{data.facilitiesOffered}The wedding location offers a complete package right from the wedding food caterers to wedding decorators and other wedding related services, although the client is given the freedom of choice to avail services from various wedding decorators in accordance to their preferences.Sheraton Grand Palace Indore serves alcohol in its premises and so alcohol cannot be outsourced to the venue. Given Sheraton Grand Palace Indore an opportunity, you are sure to be awestruck with the services extended and professionalism portrayed with on time performance that you are sure to recommend this enormous setting to your close family and friends.</p>
                            <h5>Space Available</h5>
                            <p>{data.spacesAvailable}This venue offers specially curated services to its clients that are hassle free throughout all the wedding functions. The trained professionals work as a unit in pulling off a great bash with respect to all your choices conscientiously with excellent dedication. The property at Sheraton Grand Palace Indore is maintained earnestly to make sure there isn't a single opportunity for their clients to complain about. Sheraton Grand Palace Indore offers diligent services to its guests making it a luxurious wedding venue who constantly craves for excellence in whatever they do. It is a one stop shop for all the value added services offered under one single roof to make it easily reachable for their clients</p>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="policies-box">
                        <div className="row">
                            <div className="col-lg-3 policy">
                                <h5>Start of venue</h5>
                                <p>{data.startingYear}</p>
                            </div>
                            <div className="col-lg-3 policy">
                            <h5>DJ Policy</h5>
                                <p>{data.DJPolicy}</p>
                            </div>
                            <div className="col-lg-3 policy">
                            <h5>Refund Policy</h5>
                                <p>{data.refundPolicy}</p>
                            </div>
                            <div className="col-lg-3 policy">
                                <h5>Catering Policy</h5>
                                <p>{data.cateringPolicy}</p>
                            </div>
                            <div className="col-lg-3 policy">
                                <h5>Decor Policy</h5>
                                <p>{data.decorPolicy}</p>
                            </div>
                            <div className="col-lg-3 policy">
                            <h5>Kitchen</h5>
                                <p>{data.kitchen}</p>
                            </div>
                            <div className="col-lg-3 policy">
                            <h5>Parking</h5>
                                <p>{data.parking}</p>
                            </div>
                            <div className="col-lg-3 policy">
                                <h5>Advance Booking</h5>
                                <p>{data.advanceBooking}%</p>
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
                <Footer/>
            </Fragment>
            
        </section>
    )
}

export default Venue;