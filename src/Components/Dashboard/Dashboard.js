import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings";
import { myVenuesURL, myVendorURL} from "../URLs";
import './dashboard.css' 
import VendorMenu from "../Common/VendorMenu"
 

function AllVenues(){
    const [venueData, setVenueData] = useState([])
    const [featuredData, setFeaturedData] = useState([])
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        title:[],
        description:[],
        createdAt:"",
        photo:[],
    })
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(myVenuesURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            })
            const json = await data.json();
            console.log(json)
            setVenueData(json.data.allVenues)
            setLoader(true)
            setData(json)   
        }
        fetchData()
    }, [])
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(myVendorURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
            })
            const json = await data.json();
            console.log(json);
            setFeaturedData(json.data.vendors)
            setLoader(true)
        }
        fetchData()
    }, [])
    if(loader){
        <p>
            Loading...
        </p>
    }
    return(
        <section className="normal-section popular-venues-section">
            <div className="container">
                <div className="row">
                    
                    <div className="row">
                          <VendorMenu/>
                    
                    <div className="col-lg-9 row">
                    <div className="col-12 dash-h1">
                        <h1>Venues<span className="bubble-span">.</span> </h1>
                    </div>
                    {data?.data?.venues?.map((i=> {
                        return(
                            <div className="col-lg-4" key={i._id}>
                                <Link 
                                    to={{pathname:`/edit-venue/${i._id}`}}
                                >
                                    <div className="venue-box">
                                        <div className='ratings'>
                                            <img src={process.env.PUBLIC_URL + `/home/ratings.svg`} alt="" /> {i.ratingsAverage}
                                        </div>
                                        <img className='venue-img' src={i.photos[0]} alt="" />
                                        <div className="venue-details">
                                            <h6 className="venue-name">
                                                {i.title}
                                            </h6>
                                            <p className="venue-price">
                                                Starting at Rs. {i.price}/-                                          
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }))}   

                    <div className="formline"></div>
                    <div className="col-12 dash-h1">
                        <h1>Vendors<span className="bubble-span">.</span> </h1>
                    </div>
                    {featuredData?.map((i=> {
                        return(
                            <div className="col-lg-4" key={i._id}>
                                <Link 
                                        to={{pathname:`/edit-vendor/${i._id}`}}
                                >
                                    <div className="venue-box"> 
                                        <div className='ratings'>
                                            <img src={process.env.PUBLIC_URL + `/home/ratings.svg`} alt="" /> {i.ratingsAverage}
                                        </div>
                                        <img className='venue-img' src={i.photos[0]} alt="" />
                                        <div className="venue-details">
                                            <h6 className="venue-name">
                                                {i.title}
                                            </h6>
                                            <p className="venue-price">
                                                Starting at Rs. {i.price}/-
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }))}

                </div>              
            </div>
            </div>
        </div>
     </section>
    )
}

export default AllVenues;