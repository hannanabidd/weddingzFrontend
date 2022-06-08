import React, {useEffect, useState , Fragment} from "react";
import { Link } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings";
import { photographersURL } from "../URLs";
import './vendor.css';
import Footer from "../Footer/Footer"


function Photographers(){
    const [photographersData, setphotographersData] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(photographersURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const json = await data.json();
            const newArray = json.data.vendor
            console.log(json.data.vendor)
            setphotographersData(newArray)
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
        <Fragment>
        <section className="normal-section popular-venues-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <LgHeadings heading_name="Best Photographers In Lahore" />
                    </div>
                    {photographersData.map((i=> {
                        return(
                            <div className="col-lg-4" key={i._id}>
                                <Link 
                                    to={{pathname:`/photographers/${i._id}`}}
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
        </section>
        <Footer />
        </Fragment>
    )
}

export default Photographers;