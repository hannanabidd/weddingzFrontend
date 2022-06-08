import React, { Fragment } from 'react';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';
import Categories from './Categories';
import Featured from './Featured';
import './home.css';
import HomeBanner from './HomeBanner';
import InhouseServices from './InhouseServices';
import Venues from './Venues';

function Home(){
    return(
        <Fragment>
            <HomeBanner />
            <Venues />
            <Categories />
            <InhouseServices/>
            <Featured />
            <Blogs />
            <Footer />
        </Fragment>
    )
}

export default Home;