import React from 'react';
import { Link } from "react-router-dom";


function VendorMenu(){
    return(
        <div className="col-lg-3">
            <div className="dashboard-box">
            <div className="col-lg-12">
                <Link to="/vendor-dashboard">
                    <div className="dashboard-btn">
                        Dashboard
                    </div>
                </Link>
            </div>
            <div className="col-lg-12">
                <Link to="/vendor-dashboard/information">
                    <div className="dashboard-btn">
                         Add New Venue
                    </div>
                </Link>
            </div>
            <div className="col-lg-12">
                <Link to="/vendor-dashboard/informationv">
                    <div className="dashboard-btn">
                         Add New Vendor
                    </div>
                </Link>
            </div>
            <div className="col-lg-12">
                <Link to="/vendor-dashboard/portfolio">
                    <div className="dashboard-btn">
                        Portfolio
                    </div>
                </Link>
            </div>
            <div className="col-lg-12">
                <Link to="/vendor-dashboard/membership">
                    <div className="dashboard-btn">
                        Membership Plans
                    </div>
                </Link>
            </div>
            {/* <div className="col-lg-12">
                <Link to="/vendor-dashboard/reviews">
                    <div className="dashboard-btn">
                        Reviews
                    </div>
                </Link>
            </div> */}
            {/* <div className="col-lg-12">
                <Link to="/vendor-dashboard/menu">
                    <div className="dashboard-btn">
                        Menu
                    </div>
                </Link>
            </div> */}
            <div className="col-lg-12">
                <Link to="/vendor-dashboard/bookings">
                    <div className="dashboard-btn">
                        Bookings
                    </div>
                </Link>
            </div>
            </div>            
        </div>
    )
}

export default VendorMenu;