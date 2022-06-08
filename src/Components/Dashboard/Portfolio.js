import React from 'react';
import { Link } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings"
import VendorMenu from "../Common/VendorMenu"
import "./dashboard.css";

function Portfolio(){
    return(
        <section className="vendor-Portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 ">
                          <LgHeadings heading_name="Vendor Dashboard"/>
                      </div>
                      <div className="row">
                          <VendorMenu/>
                          <div className="col-lg-9">
                              <div className="dashboard-box pink">
                                  <div className="dashboard-box">
                                      <div className="row">
                                    <div className="col-lg-12 box">
                                             <Link to="/portfoliomain">
                                                 <div className="text-center">
                                                    <img src="../home/hall.png" className="porfolio-img" />
                                                    <div class="centered">Upload Images</div>
                                                 </div>
                                             </Link>
                                    </div>
                                    </div>
                              </div>
                              
                                  <div className="dashboard-box">
                                   <h2>Guidlelines for Image Upload</h2>
                                   <h5><span className="important">Important!</span> Add Cover Image carefully. It will be used as a main image of your portfolio.</h5>
                                   <h5>As “pictures speak louder than words”, we request you to please follow these guidelines when you are uploading images to your profile:</h5>
                                    <h5 className="guide-h5">Don't</h5>       
                                            <ul className="guide-ul">
                                                <li>Do not upload Vertical Images. All photos should be in a horizontal form.</li>
                                                <li>Do not upload selfies.</li>
                                                <li>Do not upload personal photos.</li>
                                                <li>Do not upload photos of your clients without their consent.</li>
                                                <li>Do not upload Blur photos.</li>
                                                <li>No collage pictures.</li>
                                                <li>No logos of the company on the pictures.</li>
                                            </ul>
                                    <h5 className="guide-h5">Do</h5>
                                    <ul className="guide-ul">
                                        <li>Only upload images that are related to your work/industry.</li>
                                        <li>Upload only your original work.</li>
                                        <li>Upload images with a minimum width of 400 pixels & max. size of 16MB.</li>
                                        <li>For unpaid folks: There is a 150 image limit per album. For paid folks: There is a 1000 image limit per album. 40 images can be uploaded at a time in an album  </li>
                                        <li>Images with small/edgy watermarks are only accepted.</li>
                                        <li>Upload images only in horizontal dimensions and not in vertical form.</li>
                                    </ul>                                   
                                  </div>
                              
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;