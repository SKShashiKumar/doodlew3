import React,{useState} from 'react';
import Sidebar from './Sidebar';
import './Navbar.css'
const Navbar = () => {
    const [navs,setNavs] = useState(false)
    return ( 
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light posStk">
        <div className="navbar-brand" onClick={() => {(setNavs(!navs))}} >
        { navs ? <Sidebar/> :
         <div className="navbar-brand">
            <img src="https://img.icons8.com/ios-filled/20/000000/menu--v1.png" alt="menu"/>
        </div> }
        </div>

        <div className='ml-auto'>
        <h4 className="">MyFood</h4>
        </div>

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <h4>Mail</h4>
        </ul>

    </nav>
        </>
     );
}
 
export default Navbar;