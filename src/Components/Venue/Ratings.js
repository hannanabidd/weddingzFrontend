import { useState, Fragment } from "react";
import { FaStar } from "react-icons/fa";
import './venue.css';
import { writeReviewURL } from "../URLs"

const colors = {
    pink: "#FF6085",
    grey: "#a9a9a9"
    
};

const venueId = localStorage.getItem("venueId");
console.log(venueId);


function Ratings() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [rating, setRating] = useState(0)
  const [review,setReview] = useState('');
    

  function GiveReview(e){
      setReview(e.target.value)
  }
  function overlayFunctionOn(){
    document.getElementById("form-overlay").style.display = "block"
  }
  function overlayFunctionOff(){
      document.getElementById("form-overlay").style.display = "none"
  }
  function hideOverlay(){
      document.getElementById("form-overlay").style.display = "none"
      document.getElementById("success").style.display = "block"
  }
  function keepOverlay(){
      document.getElementById("form-overlay").style.display = "none"
      document.getElementById("failed").style.display = "block"
  }
const reviewRating = 3
  const SubmitForm = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('review', review);
    formData.append('reviewRating', reviewRating);

    const data = await fetch( `https://weddingz-server.herokuapp.com/api/v1/venues/${venueId}/reviews`, {
      method:'POST', 
      body:JSON.stringify({review, reviewRating}),
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
    if(data.status === 200){ 
        console.log(data.status)
        return(
            <Fragment>
                {hideOverlay()}
            </Fragment>
        )
    }
    else{
        console.log(data.statusText)
        return(
            <Fragment>
                {keepOverlay()}
            </Fragment>
        )
    }
}



  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <section className="review-section">
      <h5> Rate Vendor </h5>
          <div id="form-overlay" onClick={overlayFunctionOff}>
                <div className="loader" id="loader">
                    <div className="loader-mini">
                    </div>
                </div>
                <div style={{display:"none"}} id="success">
                    <p style={{color:"green"}}>
                        Success
                        </p>
                    </div>                            
                    <div style={{display:"none"}} id="failed">
                        <p style={{color:"red"}}>
                            Failed
                        </p>
                    </div>
            </div>
                     
    <div style={styles.container}>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (      
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1) }
              onMouseOver={() => handleMouseOver(index + 1)  }
              onMouseLeave={handleMouseLeave}           
              color={(hoverValue || currentValue) > index ? colors.pink : colors.grey}
              style={{marginRight: 10, cursor: "pointer"}}/>
          )
        })}
      </div>
         <form className="form-row" onSubmit={SubmitForm}> 
            <textarea placeholder="What's your experience?" className="review-textarea" onChange={GiveReview} rows= "8"   />   
                <button className="review-btn" onClick={overlayFunctionOn}>
                  Submit
                </button>
          </form>
    </div>
    
    </section>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",

  },
  stars: {
    display: "flex",
    flexDirection: "row",
    height: "50px",
  },

};




export default Ratings;