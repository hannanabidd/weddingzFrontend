import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { venueURL } from "../URLs";
import './venue.css';


 export const SliderData = () => {
    const [venueData, setVenueData] = useState([])
    const [data, setData] = useState([])
    const [loader, setLoader] = useState({
        photos:[],
        title:"",
    })
    let { id } = useParams();
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(venueURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const json = await data.json();
            setVenueData(json.data.allVenues)
            let result = json.data.allVenues.filter(word => word._id.includes(id));
            console.log(result)
            setLoader(true)
            setData({
                photos:result[0].photos,
                title:result[0].title,

            })
        }
        fetchData()
    }, [])
    if(loader){
        <p>
            Loading...
        </p>
    }

  return (
      <div>
    {data.photos?.map((i=>{
        return(
              <img className='image' src={i} height="400px" width="100%" alt="" /> 
        )
    }))}
    
    </div>
  )
}

export default SliderData