import React, { Fragment } from 'react';
import LgHeadings from '../Common/LgHeadings';
import Footer from '../Footer/Footer';


function BlogsDetails(){
    return(
        <Fragment>
        <section className='normal-section '>
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8 blog-text'>
                    <h1>GORG Wedding Of A Stylist Who Nailed The 'Red Sabya' Bridal Look<span className='bubble-span'>!</span></h1>
                      <p>Very seldom do we come across brides who totally wow us with not one, but each and every bridal look on their wedding. And when the bride is a stylist herself, you know the bridal looks have to be on point! The stylist for Khush Magazine, Tanishq Malhotra got hitched recently, amusingly to a groom with the same name! Her wedding was all things drool-worthy, right from the bridal outfits to the heirloom and floral jewellery, and we are absolute fans of her bridal portraits in particular! Her 'Sabya red' lehenga with the embroidered veil to the gorgeous customised detachable trail for the reception, everything about this wedding was gorgeous- and if you're a bride-to-be, then get ready to pin it to win it at your wedding!</p>
                <div className="blog-img">
                    <h4>Meet Tanishq and Tanishq</h4>
                    <img src="/home/p-four.png" alt="save money" height="100%" width="60%"/>
                    <img src="/home/p-five.png" alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Engagement!</h4>
                    <img src="/home/p-nine.png" alt="save money" height="100%" width="60%"/>
                    <img src="/home/p-seven.png" alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Cocktail!</h4>
                    <img src="/home/p-eight.png" alt="save money" height="100%" width="60%"/>
                    <img src="/home/p-nine.png" alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Moemnts of the Event</h4>
                    <img src="/home/p-ten.png" alt="save money" height="100%" width="60%"/>
                    <img src="/home/p-twelve.png" alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Haldi Event!</h4>
                    <img src="/home/p-ther.png" alt="save money" height="100%" width="60%"/>
                    <img src="/home/p-foorteen.png" alt="save money" height="100%" width="60%"/>
                </div>
            
                </div>
                <div className='col-2'></div>

             </div>
             </div>
        </section>
        <Footer />
        </Fragment>
    )
}

export default BlogsDetails;