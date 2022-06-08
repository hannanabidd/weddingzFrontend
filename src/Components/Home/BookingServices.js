import React from 'react';


function BookingServices(){
    return(
        <section className="section">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12 ">               
                     <div className="overlay">
                          <img className='hall-bg' src={'/home/venuebooking-b.jpg'} alt="hellow" />
                          <div className="title-book">
                               <h1 >venue Booking Services</h1>
                          </div>
                            <div className="features">
                                   <img className='features-book' src={'/home/features-book.png'} height='100' alt="hellow" />                             
                            </div>
                     </div>
                     <div className="works">
                         <h1>How it works?</h1>
                         <img className='works-book' src={'/home/book-works.png'} height='100' alt="hellow" />                             
                     </div>
                 </div>
                </div>
            </div>
        </section>
    )
}

export default  BookingServices;