import React from 'react';
import {Link} from 'react-router-dom';
import './toolbar.css';




const Sidedrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    return(
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <ul>
            <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/venues">
                            Venues
                        </Link>
                    </li>
                    <li>
                        <Link to="/vendorcategories">
                            Vendors
                        </Link>
                    </li>
                    <li>
                        <Link to="/compare">
                            Compare
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/costcalculator">
                             Cost Calculator
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/gallery">
                             Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs">
                             Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                             Login
                        </Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Sidedrawer;