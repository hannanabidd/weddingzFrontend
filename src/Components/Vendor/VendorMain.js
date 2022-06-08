import React from "react";
import { Link } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings";

const categories = [
    {
        id:0,
        name:"Venues",
        description:"Banquet Halls, Farmhouses, Lawns, Hotels",
        url:"venue",
        pageUrl:"venues",
    },
    {
        id:1,
        name:"Bridal Wear",
        description:"Bridal Lehengas, Personalized Lehengas",
        url:"bridal-wear",
        pageUrl:"bridal-wear",
    },
    {
        id:2,
        name:"Groom Wear",
        description:"Wedding Suits, Tuxes, Sherwanis",
        url:"groom-wear",
        pageUrl:"groom-wear",
    },
    {
        id:3,
        name:"Photographers",
        description:"Photographers, Videographers",
        url:"photographers",
        pageUrl:"photographers",
    },
    {
        id:4,
        name:"Beauty Parlors",
        description:"Bridal Makeup, Mehndi Makeup, Family Makeup",
        url:"bridal-makeup",
        pageUrl:"bridal-makeup",
    },
    {
        id:5,
        name:"Decor",
        description:"Flowers, Dance Floors, DJ, Tables",
        url:"decor",
        pageUrl:"decor",
    },
    {
        id:6,
        name:"Catering",
        description:"Single Dish, Salads, Desserts",
        url:"caterings",
        pageUrl:"caterings",
    },
    {
        id:7,
        name:"Honeymoon",
        description:"Domestic Honeymoons, International Honeymoons",
        url:"honeymoon",
        pageUrl:"honeymoon",
    },
]

function VendorMain(){
    return(
        <section className="normal-section ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <LgHeadings heading_name="Wedding Categories" />
                    </div>
                </div>
                <div className="row">
                    {categories.map((i => {
                        return(
                            <div className="col-lg-6" key={i.id}>
                                <Link to={`/${i.pageUrl}`}>
                                    <div className="category-box">
                                        <img className='category-img' src={process.env.PUBLIC_URL + `/home/${i.url}.png`} alt="" />
                                        <div className="category-detail">
                                            <h3 className="category-name">
                                                {i.name}
                                            </h3>
                                            <p className="category-description">
                                                {i.description}
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
    )
}

export default VendorMain;