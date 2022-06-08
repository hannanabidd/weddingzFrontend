import React, { Fragment } from "react";


function HomeBanner(){
    return(
        <Fragment>
            <section className='home-banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2'>
                            <div className='search-box flex-vh-center'>
                                {/* <input type="text" placeholder="Search for wedding halls…" className='search' /> */}
                                <h1>"Plan Your Best Day With Weddingz"</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <img className='flowers' src={process.env.PUBLIC_URL + '/home/flowers.png'} alt="" />
            </section>
        </Fragment>
    )
}

export default HomeBanner;