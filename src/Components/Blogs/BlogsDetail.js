import React, { Fragment, useEffect, useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { blogsURL } from '../URLs';
import {UserContext} from "../UserContext"
import Footer from '../Footer/Footer';


function BlogsDetail() {
    const [ user, setUser ] = useContext(UserContext)
    const [blogsData, setBlogsData] = useState([])
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        title: [],
        shortDescription:[],
        description:[],
        photos:[],
        createdAt:"",
    })
    let { id } = useParams();
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(blogsURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const json = await data.json();
            setBlogsData(json.data.allBlogs)
            console.log(json.data.allBlogs)
            let result = json.data.allBlogs.filter(word => word._id.includes(id));
            console.log(result)
            setLoader(true)
            setData({
                title:result[0].title,
                shortDescription:result[0].shortDescription,
                description:result[0].description,
                photos:result[0].photos,
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
    <Fragment>
        <section className='normal-section '>
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-8 blog-text'>
                    <h1>{data.title[0]}<span className='bubble-span'>!</span></h1>
                      <p>{data.description}</p>
                      <div className="blog-img">
                        <img src={data.photos[0]} alt="save money" height="100%" width="60%"/>
                     </div>
                <div className="blog-img">
                    <h4>Meet Tanishq and Tanishq</h4>
                    <img src={data.photos[1]} alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Engagement!</h4>
                    <img src={data.photos[2]} alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Cocktail!</h4>
                    <img src={data.photos[3]} alt="save money" height="100%" width="60%"/>
                </div>
                <div className="blog-img">
                    <h4>Moemnts of the Event</h4>
                    <img src={data.photos[4]} alt="save money" height="100%" width="60%"/>
                </div>
                </div>
                <div className='col-2'></div>

             </div>
             </div>
        </section>
        <Footer/>
        </Fragment>
  )
}

export default BlogsDetail