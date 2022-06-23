import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewURL } from '../URLs';
import '../Venue/venue.css' 

function DisplayReviews() {

    const [reviewData, setReviewData] = useState([])
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        name :"",
        review:"",
        createdAt:"",
        id:"",
        reviewRating:""
    })
    let { id } = useParams();
    useEffect(() => {
        async function fetchReviewData(){
            const data = await fetch(`https://weddingz-server.herokuapp.com/api/v1/venues/${id}/reviews`, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const json = await data.json();
            console.log(json)
            setReviewData(json.data.allVendors)
            
            setLoader(true)
            setData(json)       
        }
        fetchReviewData()
    }, [])
    if(loader){
        <p>
            Loading...
        </p>
    }


  return (
    <section className=" get-reviews">
        <div className="container">
            <div className="row">
                {data?.data?.reviews?.map((i=>{
                    return(
                        <Fragment>
                        <div className="col-12 review-list">
                    <img src="/home/profile-icon.png" alt="save money" height="100%" width="40px"/>
                     <h4>
                         {i.user?.name}         
                     </h4>
                </div>
                <div className="rev">
                    <p> {i.review}</p>
                    <p className="p-date"> {i.createdAt}</p>
                </div>   
                </Fragment>    
                    )
                }))}
                
            </div>
        </div>
    </section>
  )
}

export default DisplayReviews