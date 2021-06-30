import React , {useContext , Fragment , useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from "react-router-dom";
import AuthContext  from '../../context/authContext/authContext'
import Dropdown from 'react-bootstrap/Dropdown'
import '../../App.css'


export const Navbar = () => {

 
  const {logout , clearError , userAuth , user} = useContext(AuthContext)
  const onLogout =() =>{
    logout()
    clearError()
  } 
  const userLinks = (
    <Fragment>  
        <li> <Link to="/Studentpage"><FontAwesomeIcon  icon="home" pull="right" size="2x" color="white"/></Link></li> 
        
      <li>
      <Dropdown>
  <Dropdown.Toggle className="dbbtn" id="dropdown-basic">
  {user && user.username } 
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/Profile">My Profile</Dropdown.Item>
    <Dropdown.Item href="/Change-password">Change Password</Dropdown.Item>
    <Dropdown.Item href="/Home" onClick={onLogout}>  
      Logout
      <FontAwesomeIcon icon="sign-out-alt" pull="left" size="lg" color="grey" />
      </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
     
  </li>
      
    
    </Fragment>
  
  )
  const authLinks = (
    <Fragment>
      <li>
      <Link to="/Login" className="lkbtn" >
         Login
           </Link>
    
      </li>
      <span className="sm-hide">|</span>
      <li>
      <Link to="/Signup" className="lkbtn" >   Register
            </Link>
      </li>
   
    </Fragment>
  )
    return (
        <div className="navbar">
      <div className="logo">
       
      
        <h1 className="logo">
       E-Learn
        </h1>
   
      </div>
      <ul>
             {userAuth ? userLinks : authLinks}
           
       
      </ul>
    </div>
    )
}

export default Navbar