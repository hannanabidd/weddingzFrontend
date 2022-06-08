import React, {Fragment, useState, useContext, useEffect} from 'react';
import axios from "axios";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from '../src/Components/Footer/Footer';
import Compare from './Components/Compare/Compare';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import VendorLogin from './Components/Login/VendorLogin';
import VendorSignup from './Components/Login/VendorSignup';
import Backdrop from './Components/Toolbar/Backdrop';
import Sidedrawer from './Components/Toolbar/Sidedrawer';
import Toolbar from './Components/Toolbar/Toolbar';
import Venue from './Components/Venue/Venue';
import AllVenues from './Components/Venue/AllVenues';
import VendorMain from './Components/Vendor/VendorMain';
import Photographers from './Components/Vendor/Photographers';
import BridalWear from './Components/Vendor/BridalWear';
import GroomWear from './Components/Vendor/GroomWear';
import Honeymoon from './Components/Vendor/Honeymoon';
import Parlor from './Components/Vendor/Parlor';
import Catering from './Components/Vendor/Catering';
import Decor from './Components/Vendor/Decor';
import AllBlogs from './Components/Blogs/AllBlogs';
import BlogOne from './Components/Blogs/BlogOne';
import Dashboard from './Components/Dashboard/Dashboard';
import EditVenue from './Components/Dashboard/EditVenue';
import EditVendor from './Components/Dashboard/EditVendor';
import VendorInformation from './Components/Dashboard/VendorInformation';
import VendorForm from './Components/Dashboard/VendorForm';
import VendorMenu from './Components/Dashboard/VendorMenu';
import Membership from './Components/Dashboard/Membership';
import Portfolio from './Components/Dashboard/Portfolio';
import PortfolioMain from './Components/Dashboard/Portfolio/PortfolioMain';
import GenieServices from './Components/Home/GenieServices';
import BookingServices from './Components/Home/BookingServices';
import VendorDetails from './Components/Vendor/VendorDetails';
import { UserContext } from "./Components/UserContext"
import Gallery from './Components/Gallery/Gallery';
import CreateBlog from './Components/Blogs/CreateBlog';
import BlogsDetails from './Components/Blogs/BlogsDetail';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    
    const token = localStorage.getItem("token");

    const loadProfile = async () => {
      const user = await axios.get(
        `https://weddingz-server.herokuapp.com/api/users/me`,{headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }}
      );
    console.log(user)
    setUser(user.data.data.user)
    };
    
    if (!user?.name && token) {
      loadProfile();
    } 
  }, [user]);
  function drawerToggleClickHandler(){
    setSideDrawerOpen(!sideDrawerOpen)
  }
  function backdropClickHandler(){
    setSideDrawerOpen(!sideDrawerOpen)
  }
  let backdrop;

  if(sideDrawerOpen){
    backdrop = <Backdrop click={backdropClickHandler} />
  }
  
  const bookBtn = document.getElementById('book-tour');

  return (
    <Fragment>
      <BrowserRouter>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        <Sidedrawer show={sideDrawerOpen} drawerClickHandler={drawerToggleClickHandler} />
        {backdrop}
        <Routes>
          <Route path="/login" exact element={<Login />}  />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/vendor-login" exact element={<VendorLogin />} />
          <Route path="/vendor-signup" exact element={<VendorSignup />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/venues' exact element={<AllVenues />} />
          <Route path='/venues/:id' exact element={<Venue />} />
          <Route path='/compare' exact element={<Compare />} />
          <Route path='vendorcategories' exact element={<VendorMain />} />
          <Route path='photographers' exact element={<Photographers />} />
          <Route path='bridal-wear' exact element={<BridalWear />} />
          <Route path='groom-wear' exact element={<GroomWear />} />
          <Route path='honeymoon' exact element={<Honeymoon />} />
          <Route path='caterings' exact element={<Catering />} />
          <Route path='decor' exact element={<Decor />} />
          <Route path='bridal-makeup' exact element={<Parlor />} />
          <Route path='blogs' exact element={<AllBlogs />} />
          <Route path='vendor-dashboard' exact element={<Dashboard />} />
          <Route path='/edit-venue/:id' exact element={<EditVenue />} />
          <Route path='/edit-vendor/:id' exact element={<EditVendor />} />
          <Route path='vendor-dashboard/information' exact element={<VendorInformation />} />
          <Route path='vendor-dashboard/informationv' exact element={<VendorForm />} />
          <Route path='vendor-dashboard/menu' exact element={<VendorMenu />} />
          <Route path='vendor-dashboard/membership' exact element={<Membership />} />
          <Route path='vendor-dashboard/portfolio' exact element={<Portfolio />} />
          <Route path='portfoliomain' exact element={<PortfolioMain />} />
          <Route path='genie-services' exact element={<GenieServices />} />
          <Route path='venue-booking-services' exact element={<BookingServices />} />
          <Route path='/bridal-wear/:id' exact element={<VendorDetails />} />
          <Route path='/photographers/:id' exact element={<VendorDetails />} />
          <Route path='/bridal-makeup/:id' exact element={<VendorDetails />} />
          <Route path='/decor/:id' exact element={<VendorDetails />} />
          <Route path='/caterings:id' exact element={<VendorDetails />} />
          <Route path='/honeymoon/:id' exact element={<VendorDetails />} />
          <Route path='/vendors/:id' exact element={<VendorDetails />} />
          <Route path='/blogs-d' exact element={<BlogOne />} />
          <Route path='/blogs/:id' exact element={<BlogsDetails />} />
          <Route path='/gallery' exact element={<Gallery />} />
          <Route path='/createblog' exact element={<CreateBlog />} />
        </Routes>
        
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
