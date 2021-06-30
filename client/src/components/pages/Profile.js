import React, {useContext, useEffect } from 'react'
import AuthContext  from '../../context/authContext/authContext'
import Navbar from '../layouts/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Card,  CardBody,
  } from 'reactstrap';
  import {Link } from "react-router-dom";
  import axios from 'axios';

 const Profile = () => {
    const { user} = useContext(AuthContext)
    const {getUser} =   useContext(AuthContext)
    useEffect ( () => {
         getUser()
         //eslint-disable-next-line
    }, [])
    return (
        <div >
            <Navbar/>
            <Card className="Profilecard">
         
         <CardBody>
              <form >
               <div style={{margin:"3%"}}>
               <div  className="row" >
                   <div className="col-2" > <img style={{width:"180px" , height:"180px" , borderRadius:"100px" }}
                   src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"></img>
                    <h3 style={{ margin:"20%" ,textAlign:"center"}}>{user && user.username}</h3>
                   </div>
                   <div  className="col-10">
                      <div style={{borderBottom:" 1px solid grey", color:"grey"}}>
                    <Link to="/Edit-Profile/id">  <FontAwesomeIcon icon="pencil-alt" pull="right" size="2x" color="grey" /></Link> 
                          <h2 style={{fontSize:"2.5rem"}}>Profile </h2>
                      
                      </div>
                     
                       <div style={{display:"flex" , justifyContent:"space-between" , marginTop:"2%"}}>
                       <h5> Name : <span> {user && user.username}</span> </h5>
                       <h5> Username : <span> {user && user.email}</span> </h5>
                       <h5>Email : <span>{user && user.email}</span></h5>
                       <h5>Mobile : <span>{user && user.mobile}</span></h5>
                   
                       </div>
                        <h5 style={{marginTop:"5%"}}>About</h5>
                        <h5>{user && user.about}</h5>
                   </div>
               </div>
           </div>
        
           </form>  
            </CardBody>
    </Card>
            
          
        </div>
    )
}
 export default Profile