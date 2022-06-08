import React from 'react';
import LgHeadings from '../Common/LgHeadings';
import { Link } from 'react-router-dom';

const services = [
    {
        id:0,
        name: 'Genie Services',
        description: 'Plan your dream wedding in your budget',
        url: "bridal-wear",
        pageUrl:"genie-services"
    },
    {
        id:1,
        name: 'Venue Booking Service',
        description: 'Best Price Guaranteed',
        url: "venue",
        pageUrl:"venue-booking-services"
    }
]


function InhouseServices(){
    return (  
                <section className="normal-section ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <LgHeadings heading_name="WZ Inhouse Services" />
                            </div>
                        </div>
                        <div className="row">
                            {services.map((i=>{
                                return(
                                    <div className="col-lg-6" key={i.id}>
                                         
                                            <div className="category-box">
                                                <img className='category-img' src={process.env.PUBLIC_URL + `/home/${i.url}.png`} alt="" />
                                                <div className="category-detail">
                                                    <h3 className="service-name">
                                                        {i.name}
                                                    </h3>   
                                                    <p className="service-description">
                                                        {i.description}
                                                    </p>
                                                </div>
                                                <div className="col-12 flex-vh-center">
                                                    <Link to={`/${i.pageUrl}`}>
                                                        <button className="know-more-btn">Know More</button>
                                                    </Link>
                                                </div>
                                            </div>

                                        
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                </section>        
    )
}

export default InhouseServices;