import React, { useContext } from "react";
import {Link, useNavigate} from 'react-router-dom';
import './toolbar.css';
import {UserContext} from "../UserContext"

const Sidedrawer = props => {
    const [ user, setUser ] = useContext(UserContext)
    const navigate = useNavigate();
    const isActive = navProps => navProps.isActive ? "link-active" : "link-asleep";

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser({});	
        {navigate('/')}
	}

    let drawerClasses = ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    return(
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <ul>
            <li>
                        <Link to="/" className={isActive}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/venues" className={isActive}>
                            Venues
                        </Link>
                    </li>
                    <li>
                        <Link to="/vendorcategories" className={isActive}>
                            Vendors
                        </Link>
                    </li>
                    <li>
                        <Link to="/compare" className={isActive}>
                            Compare
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className={isActive}>
                             Gallery
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs" className={isActive}>
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
            </ul>
        </nav>
    )
}

export default Sidedrawer;