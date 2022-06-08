import React, { Fragment, useEffect } from "react";
import LgHeadings from "../Common/LgHeadings";
import animationFunction from '../Common/animationFunction';


const data = [
    {
        id:0,
        vendorName: "Weddingz Discovery Assistance",
        price:750,
        vendorDescription:"Quickly book any one category",
        features:[
            {
                id:0,
                img:"/home/Group65.png",
                feature:"For any 1 category"
            },
            {
                id:1,
                img:"/home/Group65.png",
                feature:"Best price negotiation"
            },
            {
                id:2,
                img:"/home/Group65.png",
                feature:"Get vendors with date availability within your budget & locationt"
            },
            
        ]
    },
    {
        id:1,
        vendorName: "Weddingz Booking Assistance",
        price:1500,
        vendorDescription:"Assistance upto 3 main categories",
        features:[
            {
                id:0,
                img:"/home/Group65.png",
                feature:"For any 3 categories"
            },
            {
                id:1,
                img:"/home/Group65.png",
                feature:"Best price negotiation"
            },
            {
                id:2,
                img:"/home/Group65.png",
                feature:"Sms alert on new offers"
            },
            {
                id:3,
                img:"/home/Group65.png",
                feature:"Get vendors with date availability within your budget & location"
            }
        ]
    },
    {
        id:2,
        vendorName: "Weddingz Planning Assistance",
        price:3000,
        vendorDescription:"Complete planning solution for all categories (venues to honeymoon ) with standardised contracts.",
        features:[
            {
                id:0,
                img:"/home/Group65.png",
                feature:"For all categories"
            },
            {
                id:1,
                img:"/home/Group65.png",
                feature:"Get vendors with date availability within your budget & location"
            },
            {
                id:2,
                img:"/home/Group65.png",
                feature:"Best price negotiation"
            },
            {
                id:3,
                img:"/home/Group65.png",
                feature:"Free digital invite/ discounted video invite"
            },
            {
                id:4,
                img:"/home/Group65.png",
                feature:"Sms alert on new offers"
            },
            {
                id:5,
                img:"/home/Group65.png",
                feature:"Legal advisory on terms of contract including Covid related scenarios"
            }
  
        ]
    }
]


function GenieServices(){
    useEffect(() => {
        animationFunction('vendorBox')
    })
    return(
        <section className="normal-section">
            <div className="container">
                <div className="row">
                <div className="col-lg-12 ">
                     <LgHeadings heading_name="Genie Services" />
                 </div>
                 <div className="flex-vh-center">
                <div className="right-line"></div>
                </div>
                    <div className="col-lg-4 center-items ">    
                    <div className="border-right">                 
                        <img src="/home/money.jpg" alt="save money" height="100%" width="200px"/>
                        <h2 className="heading">Save Money</h2>           
                        <p>We will negotiate the price and offer you best deals possible.</p>      
                    </div> 
                    </div>
                    
                    <div className="col-lg-4 center-items ">
                        <div className="border-right">
                        <img src="/home/time.jpg" alt="save time" height="100%" width="200px"/>
                        <h2 className="heading">Save Time</h2>
                        <p>We recommend vendors available for your dates in your budget.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 center-items">
                        <div className="">
                        <img src="/home/stress.jpg" alt="save stress" height="100%" width="200px"/>
                        <h2 className="heading">Save Stress</h2>
                        <p >We help with vendors contracts, so deliverables are assured.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-vh-center">
                <div className="right-line"></div>
                </div>
                <div className="row">
                    
                    <h2 className="heading-pa">Select Pacakge</h2>
                    <p className="paragraph-pa">Weddingz Genie will help you out!</p>
                    <Fragment>
                        {data.map((i => (
                            <div className="col-lg-4" key={i.id}>
                            <div className="vendorBox">
                                    <h6 className="vendor-h">
                                        {i.vendorName}
                                    </h6>
                                    <div className="form-line"></div>
                                    <h3 className="vendor-h2">
                                        Rs.{i.price} <span className="vendorMonth">only</span></h3>
                                    <p className="vendorPara">
                                        {i.vendorDescription}
                                    </p>
                                    {i.features.map((k => {
                                        return(
                                            <div className=" vendorBox-option" key={k.id}>
                                                <img className="vendorBox-tick" src={k.img} alt="img" />
                                                <p className="vendorBox-text ml-10">
                                                    {k.feature}
                                                </p>
                                            </div>
                                        )
                                    }))}
                                    <div className="req-div">
                                        <button className="vendorBox-btn br-5 mt-20">Request</button>
                                    </div>
                            </div>
                        </div>
                        )))}
                        </Fragment>                 
                        
                        </div>
            </div>    
        </section>
    )
}

export default  GenieServices;