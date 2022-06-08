import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings";
import { vendorURL } from "../URLs";


function Featured(){
    const [featuredData, setFeaturedData] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(vendorURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const json = await data.json();
            const newArray = json.data.allVendors.slice(0,4)
            setFeaturedData(newArray)
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
                    <div className="col-12">
                        <LgHeadings heading_name="Featured Vendors" />
                    </div>
                    {featuredData.map((i=> {
                        return(
                            <div className="col-lg-3" key={i._id}>
                                <Link 
                                        to={{pathname:`/vendors/${i._id}`}}
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
                    {/* <div className="col-12 flex-vh-center">
                        <Link to="/vendorcategories">
                            <div className="view-more-btn">
                                View More
                            </div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Featured;