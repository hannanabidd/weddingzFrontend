import React, { Fragment, useEffect, useState } from 'react';
import LgHeadings from '../Common/LgHeadings';
import { venueURL } from '../URLs';
import './compare.css';
import Footer from "../Footer/Footer";
import {Breadcrumb} from 'antd';

function Compare(){
    const [venueData, setVenueData] = useState([])
    const [compareOne, setCompareOne] = useState('')
    const [compareTwo, setCompareTwo] = useState('')
    const [displayValue, setDisplayValue] = useState('none')
    const [loader, setLoader] = useState(false)
    const [disable, setDisable] = useState(true)
    const [buttonDisable, setButtonDisable] = useState(true)
    const [resultOne, setResultOne] = useState({
        title:"",
        price:0,
        category:"",
        ratingsAverage:0,
    })
    const [resultTwo, setResultTwo] = useState({
        title:"",
        price:0,
        category:"",
        photos:[],
        ratingsAverage:0,
    })
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
            setLoader(true)
        }
        fetchData()
    }, [])
    function handleChangeOne(e){
        setCompareOne(e.target.value)
        console.log(e.target.value)
        setDisable(false)
    }
    function handleChangeTwo(e){
        setCompareTwo(e.target.value)
        console.log(e.target.value)
        setButtonDisable(false)
    }
    function compareFunction(){
        const result1 = venueData.filter(word => word._id.includes(compareOne));
        const result2 = venueData.filter(word => word._id.includes(compareTwo));
        console.log(result1)
        console.log(result2)
        setResultOne({
                title:result1[0].title,
                price:result1[0].price,
                category:result1[0].category,
                ratingsAverage:result1[0].ratingsAverage,
                parking:result1[0].parking,
                area:result1[0].area,
                cateringPolicy:result1[0].cateringPolicy,
                refundPolicy:result1[0].refundPolicy,
                DJPolicy:result1[0].DJPolicy,
                decorPolicy:result1[0].decorPolicy,
                kitchen:result1[0].kitchen,
                website:result1[0].website,
                contactNo:result1[0].contactNo,
        })
        setResultTwo({
            title:result2[0].title,
            price:result2[0].price,
            category:result2[0].category,
            ratingsAverage:result2[0].ratingsAverage,
            parking:result2[0].parking,
            area:result2[0].area,
            cateringPolicy:result2[0].cateringPolicy,
            refundPolicy:result2[0].refundPolicy,
            DJPolicy:result2[0].DJPolicy,
            decorPolicy:result2[0].decorPolicy,
            kitchen:result2[0].kitchen,
            website:result2[0].website,
            contactNo:result2[0].contactNo,
        })
        setDisplayValue('flex')
    }
    if(loader){
        <p>
            Loading...
        </p>
    }
    return(
        <Fragment>
        <section className='normal-section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <LgHeadings heading_name="Compare" />
                        <p className='compare-main-description'>
                            Compare the best weddings halls according to your need
                        </p>
                        <Breadcrumb>
                        <Breadcrumb.Item><a className="bread-text"  href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item> <a className="bread-text" href="/venues">Venues</a></Breadcrumb.Item> 
                        <Breadcrumb.Item> <a className="bread-text" href="/compare">Compare</a></Breadcrumb.Item>           
                    </Breadcrumb>
                    </div>
                    <div className='col-lg-6 flex-vh-center'>
                        <select onChange={handleChangeOne} className="compare-select">
                            <option defaultValue>Choose...</option>
                            {venueData.map((i=> {
                                return(
                                    <option key={i._id} value={i._id}>{i.title}</option>
                                )
                            }))}
                        </select>
                    </div>
                    <div className='col-lg-6 flex-vh-center'>
                        <select onChange={handleChangeTwo} className="compare-select" disabled={disable}>
                            <option defaultValue>Choose...</option>
                            {venueData.map((i=> {
                                return(
                                    <option key={i._id} value={i._id}>{i.title}</option>
                                )
                            }))}
                        </select>
                    </div>
                    <div className='col-12 flex-vh-center'>
                        <button onClick={compareFunction} disabled={buttonDisable} className='view-more-btn'>Compare</button>
                    </div>
                </div>
                <div className='row table-responsive' style={{display:displayValue}}>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Features</th>
                            <th scope="col">{resultOne.title}</th>
                            <th scope="col">{resultTwo.title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Price</th>
                            <td>
                                {resultOne.price}
                            </td>
                            <td>
                                {resultTwo.price}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Area</th>
                            <td>
                                {resultOne.area}
                            </td>
                            <td>
                                {resultTwo.area}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Category</th>
                            <td>
                                {resultOne.category}
                            </td>
                            <td>
                                {resultTwo.category}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Contact Info</th>
                            <td>
                                +92{resultOne.contactNo}
                            </td>
                            <td>
                                +92{resultTwo.contactNo}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Ratings</th>
                            <td>
                                {resultOne.ratingsAverage}
                            </td>
                            <td>
                                {resultTwo.ratingsAverage}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Kitchen</th>
                            <td>
                                {resultOne.kitchen}
                            </td>
                            <td>
                                {resultTwo.kitchen}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Parking</th>
                            <td>
                                {resultOne.parking}
                            </td>
                            <td>
                                {resultTwo.parking}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Refund Policy</th>
                            <td>
                                {resultOne.refundPolicy}
                            </td>
                            <td>
                                {resultTwo.refundPolicy}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Refund Policy</th>
                            <td>
                                {resultOne.cateringPolicy}
                            </td>
                            <td>
                                {resultTwo.cateringPolicy}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">Decor Policy</th>
                            <td>
                                {resultOne.decorPolicy}
                            </td>
                            <td>
                                {resultTwo.decorPolicy}
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">DJ Policy</th>
                            <td>
                                {resultOne.DJPolicy}
                            </td>
                            <td>
                                {resultTwo.DJPolicy}
                            </td>
                        </tr>
                       
                                   
                    </tbody>
                    </table>
                </div>
            </div>
        </section>
        <Footer/>
        </Fragment>
    )
}

export default Compare;