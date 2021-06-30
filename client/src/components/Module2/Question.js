import React, { useState , useEffect } from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import tx from './tx.css'
import {Link } from "react-router-dom";
import axios from 'axios';
import {
    Card,  CardBody,
    CardTitle,  Button
  } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Question =() =>{
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

        return (
            <div>
                  <Slidebar/>
           <AdminNavbar/>
        <div>  
            <input type="text" className="searchss" placeholder="Search"   onChange={e => setSearch(e.target.value)}/>
            </div>
            <h4>Question Section</h4>
               
                <div className="container">
                    <div className="row">
                        <div className="col-12 offset-1">
           
           <table className="table border " >
    
    <tbody >
      {filterTestdetail.map((test , index) => 
      <tr>
        <th scope="row" >{index +1}</th>
        <td>{`Test id:${test.id}`}</td>
        <td >{test.Testname}</td>
       <td> <Button className="vtb  btn-info">
       <Link to={`/View-Question/${test.id}`} className="lk">
                           <FontAwesomeIcon className="user" icon="eye"  size="1x" color="white"></FontAwesomeIcon>  
                           View Questions 
                             </Link>
                               </Button>
                               
                               <Link to={`/Add-Question/${test.id}`} className="lk">
                                   <Button className="vtb btn-info"><FontAwesomeIcon className="user" icon="plus"  size="1x" color="white">
                                       </FontAwesomeIcon>Add Questions</Button>
                                       </Link>
                               </td>
                               </tr>
        )}
    </tbody>
    </table>
           
       
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Question
