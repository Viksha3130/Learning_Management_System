import React, { useState , useEffect} from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tx from './tx.css'
import {
    Card,  CardBody,
    CardTitle,  Button
  } from 'reactstrap';
  import {Link } from "react-router-dom";
  import axios from 'axios';

const ViewTest =() => {
    const [Testdetail , setTest] = useState([]);
    const [search , setSearch] = useState('')

    useEffect(() => {
      loadtest();
    } , [])  

    const loadtest =  async ()  => {
        const result = await axios.get("http://localhost:8000/testdetail")
        setTest(result.data)
    }

    const filterTestdetail =  Testdetail.filter( tests => {
        return   tests.Testname.toLowerCase().includes(search.toLowerCase())
        })

    const deleteTest = async id => {
         await axios.delete(`http://localhost:8000/Testdetail/${id}`);
         loadtest()
    }




        return (
            <div>
                  <Slidebar/>
           <AdminNavbar/>
        
                     <h4>Test Available</h4>
                     <div className="containers">
                      <div className="row">
                          <div className="col-12 ">
                          <div className="container">
             <Card >
             <CardTitle><FontAwesomeIcon className="testdetail" icon="file-alt"  size="1x" color="black"></FontAwesomeIcon>
             <span className="td">Test Details</span>
            <input type="text" className="searchs" placeholder="Search"   onChange={e => setSearch(e.target.value)}/>
            </CardTitle>
         <CardBody>
   

           <table className="table border shadow" >
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Test-Name</th>
        <th scope="col">Test-Duration</th>
        <th scope="col">Test-Description</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody >
      {filterTestdetail.map((test , index) => 
      <tr>
        <th scope="row" >{index +1}</th>
        <td >{test.Testname}</td>
        <td >{test.Testduration}</td>
        <td >{test.Testdescription}</td>
       <td> <Button className="vtb  btn-info">
                           <Link to={`/Edit-Test/${test.id}`} className="lk">
                           <FontAwesomeIcon className="user" icon="edit"  size="1x" color="white"></FontAwesomeIcon>  
                            Edit </Link>
                             
                               </Button>
                               <Button className="vtb btn-info" onClick={() => deleteTest(test.id)}><FontAwesomeIcon className="user" icon="trash"  size="1x" color="white">
                                   </FontAwesomeIcon>Delete</Button>

                                   <Button className="vtb btn-info"><FontAwesomeIcon className="user" icon="users"  size="1x" color="white">
                                       </FontAwesomeIcon>Enrolled Users</Button>
                               </td>
                               </tr>
        )}
    </tbody>
    </table>
           
         </CardBody>
       </Card>
  
             </div>
                       
          
                              </div>
                             
                            
                         
                              </div>
                              </div>
                              </div>

            
        )
    
}

export default ViewTest
