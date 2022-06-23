import  React, {useEffect, useState, Fragment} from "react";
import { Link } from "react-router-dom";
import LgHeadings from "../Common/LgHeadings";
import { venueURL } from "../URLs";
import { searchURL } from "../URLs";
import './venue.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Footer from "../Footer/Footer"
import { Breadcrumb } from 'antd';
import Pagination from '@mui/material/Pagination';
// import PageControl from "./PageControl"
import usePagination from "./Pagination";

function AllVenues(pageNumber, nextPage, previousPage){
    const [search, setSearch] = useState("");
    const [venueData, setVenueData] = useState([])
    const [loader, setLoader] = useState(false)
    let [page, setPage] = useState(1);

    const PER_PAGE = 12;
    const count = Math.ceil(venueData.length / PER_PAGE);
    const _DATA = usePagination(venueData, PER_PAGE);

    const pageChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
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
    
    useEffect(()=>{
        if(!search) return;
        async function fetchData(){
            const data = await fetch(searchURL+search, {
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
    },[search])
    if(loader){
        <p>
            Loading...
        </p>
    }
    return(
        <Fragment>
        <section className="normal-section popular-venues-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <LgHeadings heading_name="Venues" />
                    </div>
                    <Breadcrumb>
                        <Breadcrumb.Item><a className="bread-text"  href="/">Home</a></Breadcrumb.Item>
                        <Breadcrumb.Item> <a className="bread-text" href="/venues">Venues</a></Breadcrumb.Item>           
                    </Breadcrumb>
                    <Stack spacing={2} sx={{ width: 300 }} className="searchbar">
                        <Autocomplete 
                            id="free-solo-demo"
                            freeSolo
                            options={venueData.map((option) => option.title)}
                            renderInput={(params) => <TextField value={search} onChange={e=>setSearch(e.target.value)} {...params} label="search here" />}
                        />
                    </Stack>
                    {/* <PageControl
                        pageNumber={pageNumber}
                        nextPage={nextPage}
                        previousPage={previousPage}
                    />             */}
                   
                    <div className="row">
                    {_DATA.currentData().map((i=> {
                        return(
                            <div className="col-lg-4" key={i._id}>
                                <Link 
                                    to={{pathname:`/venues/${i._id}`}}
                                >
                                    <div className="venue-box">
                                        <div className='ratings'>
                                            <img src={process.env.PUBLIC_URL + `/home/ratings.svg`} alt="" /> {i.ratingsAverage}
                                        </div>
                                        <img className='venue-img' src={i.photos[0]} alt="" />
                                        <div className="venue-details">
                                            <h6 className="venue-name">
                                                {i.title}
                                            </h6>
                                            <p className="venue-price">
                                                Starting at Rs. {i.price}/-
                                                
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }))}   
                    </div>  
                    <Stack spacing={2}>
                        
                        <Pagination count={count}
                            size="large"
                            page={page}
                            variant="outlined"
                            shape="rounded"
                            onChange={pageChange} />
                    </Stack>
                </div>
            </div>
        </section>
        <Footer />
        </Fragment>
    )
}

export default AllVenues;