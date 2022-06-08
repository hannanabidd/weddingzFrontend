import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LgHeadings from '../Common/LgHeadings';
import { blogsURL } from "../URLs";
import './blogs.css';
import Footer from "../Footer/Footer"


function Blogs(){
    const [blogsData, setBlogsData] = useState([])
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState({
        title:"",
        price:0,
        category:"",
        photo:[],
    })
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(blogsURL, {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                },
            })
            const json = await data.json();
            setBlogsData(json.data.allblogs)
            console.log(json)
            setLoader(true)
            setData(json)   
        }
        fetchData()
    }, [])

    return(
        <Fragment>
        <section className='normal-section grey-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <LgHeadings heading_name="Blogs" />
                    </div>
                    {data?.data?.allBlogs?.map((i => {
                        return(
                            <div className='col-lg-4' key={i.id}>
                                <Link to={{pathname:`/blogs/${i._id}`}}>
                                    <div className='blogs-box'>
                                        <div className='blogs-img-box'>
                                            <img className='blogs-img' src={i.photos[0]} alt="" />
                                        </div>
                                        <div className='blogs-details'>
                                            <h4 className='blogs-title'>
                                                {i.title[0]}
                                            </h4>
                                            <p className='blogs-description'>
                                                {/* {i.description} */}
                                                Momments Captured by the Camera
                                            </p>
                                            <p className='blogs-date'>
                                                {i.createdAt}
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
        <Footer/>
        </Fragment>
    )
}

export default Blogs;