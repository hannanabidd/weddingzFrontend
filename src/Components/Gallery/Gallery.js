import React,{useState,useEffect, Fragment} from 'react'
import LgHeadings from "../Common/LgHeadings"
import Loader from '../Loader'
import { galleryURL } from '../URLs'
import './gallery.css'
import Footer from "../Footer/Footer"


function Gallery(){
    const [gallery, setGallery]= useState([])
    const [loader,setLoader] = useState(false)
    
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(galleryURL,{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const json = await data.json()
            setGallery(json.data.gallery)
            console.log(json)
            setLoader(true)
        }
        fetchData()
    },[])
    

    const [model,setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc]= useState("");
    const getImg = (photos) => {
        console.warn(photos)
        setTempImgSrc(photos);
        setModel(true);
    }
    if(loader){
        <p>
            Loading...
        </p>
    }
  return (
      <Fragment>
      <section className="normal-section popular-venues-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <LgHeadings heading_name="Weddingz Gallery" />
                    </div>
                    <div className={model? "model open" : "model"}>
                        <img src={tempimgSrc}/>
                    </div>
                    {gallery.length === 0 ? <Loader /> :
                           <div className="gallery">
                                {gallery[0].photos.map((i, index) =>{
                                    return(
                                        <div className="pics" key={index} onclick={()=> getImg(i.photos[i])}>
                                            <img width= "100%" src={i} alt="no image" />
                                        </div>
                                    )
                                })}
                           </div>
                        }
                        
                 </div>
           </div>
     </section>
     <Footer />
     </Fragment>
  )
}

export default Gallery


