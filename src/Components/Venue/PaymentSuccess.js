import React from "react";
import { Link } from "react-router-dom";


function PaymentSuccess(){
    return(
        <section className="simple-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 box-pay offset-lg-3">
                                <img src={process.env.PUBLIC_URL + '/home/Logo.jpg'} width="200px" height="100%" alt="check" />
                                <h3><span className="bubble-span">W</span>eddingz</h3>
                        <div className="payment-success  h-100vh">
                            <img src={process.env.PUBLIC_URL + '/home/payment-success.svg'} alt="check" />
                            <h2 className="payment-success-text color-gray900">
                                Payment Success!
                            </h2>
                            <p className="payment-success-info color-gray800">
                                Thank you for booking with Weddingz! 
                            </p>
                            <Link to="/">
                                <p className="payment-success-info color-gray800">
                                    Click here to go to Homepage
                                </p>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentSuccess;