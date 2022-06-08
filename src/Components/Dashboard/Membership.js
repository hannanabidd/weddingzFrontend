import React, { Fragment, useEffect } from 'react';
import LgHeadings from "../Common/LgHeadings"
import VendorMenu from "../Common/VendorMenu"
import animationFunction from '../Common/animationFunction';


const data = [
    {
        id:0,
        vendorName: "Standard",
        price:3000,
        vendorDescription:"Popular Package Among The Vendors",
        features:[
            {
                id:0,
                img:"/home/Group65.png",
                feature:"Visible below Handpicked section"
            },
            {
                id:1,
                img:"/home/cross.svg",
                feature:"Visible on first page"
            },
            {
                id:2,
                img:"/home/Group65.png",
                feature:"Dedicated profile management support"
            },
            {
                id:3,
                img:"/home/Group65.png",
                feature:"Unlimited photo uploads"
            },
            {
                id:4,
                img:"/home/Group65.png",
                feature:"Call support"
            },
            {
                id:5,
                img:"/home/Group65.png",
                feature:"Can reply to reviews"
            },
            {
                id:6,
                img:"/home/Group65.png",
                feature:"Can Manage his reviews"
            },
            {
                id:7,
                img:"/home/Group65.png",
                feature:"Analytics access"
            },
            {
                id:8,
                img:"/home/Group65.png",
                feature:"Visible contact details of customers "
            },
            {
                id:9,
                img:"/home/Group65.png",
                feature:"Can be listed as multiple vendors "
            },
            {
                id:10,
                img:"/home/cross.svg",
                feature:"Lead Updates Via SMS"
            },
            {
                id:11,
                img:"/home/cross.svg",
                feature:"Get new offers for free"
            }
        ]
    },
    {
        id:1,
        vendorName: "Premium",
        price:5000,
        vendorDescription:"Premium package with Premium Services",
        features:[
            {
                id:0,
                img:"/home/Group65.png",
                feature:"Visible below Handpicked section"
            },
            {
                id:1,
                img:"/home/cross.svg",
                feature:"Visible on first page"
            },
            {
                id:2,
                img:"/home/Group65.png",
                feature:"Dedicated profile management support"
            },
            {
                id:3,
                img:"/home/Group65.png",
                feature:"Unlimited photo uploads"
            },
            {
                id:4,
                img:"/home/Group65.png",
                feature:"Call support"
            },
            {
                id:5,
                img:"/home/Group65.png",
                feature:"Can reply to reviews"
            },
            {
                id:6,
                img:"/home/Group65.png",
                feature:"Can Manage his reviews"
            },
            {
                id:7,
                img:"/home/Group65.png",
                feature:"Analytics access"
            },
            {
                id:8,
                img:"/home/Group65.png",
                feature:"Visible contact details of customers "
            },
            {
                id:9,
                img:"/home/Group65.png",
                feature:"Can be listed as multiple vendors "
            },
            {
                id:10,
                img:"/home/cross.svg",
                feature:"Lead Updates Via SMS"
            },
            {
                id:11,
                img:"/home/cross.svg",
                feature:"Get new offers for free"
            }
        ]
    }
]

function Membership(){
    useEffect(() => {
        animationFunction('vendorBox')
    })
    return(
        <section className="dashboard-membership">
            <div className="container">
                <div className="row">
                          <div className="col-lg-12 ">
                          <LgHeadings heading_name="Vendor Dashboard"/>
                      </div>
                              
                <div className="row"> 
                    <VendorMenu/>
                <div className="col-lg-9">
                    <div className="row">
                        <Fragment>
                        {data.map((i => (
                            <div className="col-lg-6" key={i.id}>
                            <div className="vendorBox">
                                    <h6 className="vendor-h">
                                        {i.vendorName}
                                    </h6>
                                    <div className="form-line"></div>
                                    <h3 className="vendor-h2">
                                        Rs.{i.price} <span className="vendorMonth">/month</span></h3>
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
                    <div className="dashboard-box h3-text"><h4>All Packages Prices are Inclusive of GST</h4></div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Membership;