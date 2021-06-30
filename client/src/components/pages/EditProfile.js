import React, {useContext , useEffect ,useState } from 'react'
import AuthContext from '../../context/authContext/authContext'
import Navbar from '../layouts/Navbar'
import {
    Card,  CardBody,
     Button
  } from 'reactstrap';
  import {Link } from "react-router-dom";
  import axios from 'axios'
  import {useHistory } from 'react-router-dom'
  import { Form } from 'react-bootstrap';

 const EditProfile = () => {
  let history = useHistory();
    const context = useContext(AuthContext)
    const { user} = useContext(AuthContext)
    const { addUser, edituser, clearEdit, update_user } = context
    const {getUser} =   useContext(AuthContext)
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect ( () => {
        if (edituser !== null) {
            setUser(edituser)
          } else {
            setUser({
              username: '',
              mobile: '',
             about:''
            })
          }
        }, [edituser, context])
        const [users,setUser] = useState({
            username: '',
           mobile: '',
           about:''
          })
          const { username, mobile, about } = user
  const onchange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const onsubmit = (e) => {
    e.preventDefault();
    if (edituser === null) {
      addUser(user);

    } else {
      update_user(user)
      clearEdit()
    }
    setUser({
      username: '',
      mobile: '',
      about: '',
    })
  }


    return (
        <div >
            <Navbar/>
            <Card className="Profilecard">
         
         <CardBody>
         <form onSubmit={e => onsubmit(e) } >
               <div style={{margin:"3%"}}>
               <div  className="row" >
                   <div className="col-2" > <img style={{width:"180px" , height:"180px" , borderRadius:"100px" }}
                />
                <Form.Control type="file" name="profileImage" onChange={(e) =>setImage(e.target.files[0])}/>
                <Button className=" btn btn-info" style={{ margin:"3%" }} >Update Profile </Button>
                  
                   </div>
                  
                   <div  className="col-6">
                      <div style={{borderBottom:" 1px solid grey", color:"grey"}}>
                   
                          <h2 style={{fontSize:"2.5rem"}}>Edit-Profile </h2>
                      
                      </div>
                     
                       <div style={{margin:"5%"}}>

                      
                       <h5> Name :  <div className={'inputSBox'}>
                        <input className="inputS"  
                        type="text" placeholder="Username"
                        name="username" value={username} onChange={onchange} required
                     
                      />
                        
                    </div> </h5>
                    <h5 style={{marginBottom:"5%"}}>Username : <div style={{marginLeft:"2%"}} >
                    {user && user.email}
                        
                    </div></h5>
                    <h5 style={{marginBottom:"5%"}}>Email : <div style={{marginLeft:"2%"}} >
                    {user && user.email}
                        
                    </div></h5>
                       <h5> Mobile :  <div className={'inputSBox'}>
                        <input className="inputS "  
                        type="text" placeholder="Mobile"
                        name="mobile" value={mobile} onChange={onchange} required
                     
                      />
                       </div> </h5>
                    
                       </div>
                       </div>
                      
                       <div className="col-4">
                       <h5 style={{marginTop:"20%"}}>About</h5>
                      
                       <div  style={{height:"60%" , width:"100%"}}>
                        <textarea   style={{height:"100%" , width:"100%"}}
                        type="text" 
                        name="about" value={about} onChange={onchange} required />

                        </div>
                        <div style={{marginLeft:"48%"}}>
                        {edituser !== null ? <Button style={{margin:"5%" }} onClick={clearEdit} value="Cancel">Cancle</Button> : null}     
                        <Button value={edituser !== null ? 'Update ' : 'Add '}>Update</Button>
                        
                        </div>
                        
                        
                       </div>
                       
                       
                   
               </div>
           </div>
        </form>
               
            </CardBody>
    </Card>
            
          
        </div>
    )
}
 export default EditProfile