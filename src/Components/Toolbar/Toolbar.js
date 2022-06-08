import React, { useContext } from "react";
import Toggle from "./Toggle";
import {Link, useNavigate} from 'react-router-dom';
import './toolbar.css';
import {UserContext} from "../UserContext"

function Toolbar(props){
    const [ user, setUser ] = useContext(UserContext)
    const navigate = useNavigate();
    const isActive = navProps => navProps.isActive ? "link-active" : "link-asleep";

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser({});	
        {navigate('/')}
	}


    // console.log(user)
   return(
    <header className="toolbar" id="toolbar">
        <nav className="toolbar-navigation">
            <Toggle click={props.drawerClickHandler} />
            <Link to="/">
                <div className="toolbar-logo">
                    {/* <img src={`${process.env.PUBLIC_URL}/img/icons/headerlogo2.webp`} alt="menu-icon" /> */}
                    <p className="tool-bar-logop"><span className="bubble-span">W</span>eddingz</p>
                </div>
            </Link>
            <div className="spacer"></div>
            <div className="toolbar-navigation-items">
                <ul>
                    <li>
                        <Link to="/"  className={isActive}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/venues"  className={isActive}>
                            Venues
                        </Link>
                    </li>
                    <li>
                        <Link to="/vendorcategories"  className={isActive}>
                            Vendors
                        </Link>
                    </li>
                    <li>
                        <Link to="/compare"  className={isActive}>
                            Compare
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={isActive}>
                             Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs"  className={isActive}>
                             Blogs
                        </Link>
                    </li>
                    {(user && !user._id) ? (
                                            <li>
                                            <Link to="/login"  className={isActive}>
                                                 Login
                                            </Link>
                                        </li>
                    )
                    :(
                        <li>
                            <Link to="/vendor-dashboard">
                                 {user.name}
                            </Link></li>                   
                    )
                    }
                    {(user && user._id) ? (
                                            <li>
                                            <Link to="/login" onClick={handleLogout} className={isActive}>
                                            logout
                                            </Link>
                                        </li>
                    ):(<></>)}
                    <li ></li>
                </ul>
                
            </div>
        </nav>
    </header>
   )
}

export default Toolbar;