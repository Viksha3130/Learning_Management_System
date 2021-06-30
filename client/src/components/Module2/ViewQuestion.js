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

const ViewQuestion =() => {
    const [Testdetail , setTest] = useState([]);
 

    useEffect(() => {
      loadtest();
    } , [])  

    const loadtest =  async ()  => {
        const result = await axios.get(`http://localhost:8003/Question`)
        setTest(result.data)
    }

   
    const deleteTest = async id => {
         await axios.delete(`http://localhost:8000/Testdetail/${id}`);
         loadtest()
    }

  



        return (
            <div>
                  <Slidebar/>
           <AdminNavbar/>
        
                     <h4>Questions</h4>
                     <div className="containers">
                      <div className="row">
                          <div className="col-12 ">
                          <div className="container">
             <Card >
            
         <CardBody>
         {Testdetail.map((questions   => 
          <div className="conatiner">
              <ul>
                 <div className="row question">
         <p key={questions.id}> {questions.question}</p>
              <ol>
                  <div className="row">
                 <div className="col-6 option">
                    <p key={questions.id}>{questions.optionA}</p>
                  </div>
                  <div className="col-6 option">
                     <p key={questions.id}>{questions.optionB}</p>
                  </div>
                  </div>
                  <div className="row">
              <div className="col-6 option">
                    <p>{questions.optionC}</p>
                  </div>
                  <div className="col-6 option">
                     <p>{questions.optionD}</p>
                  </div>
                  </div>

              </ol>
                  <p> {questions.answer}</p>
                  </div>
              </ul>
          
          </div>
          ) )}
          
    
                           <Button className="vtb  btn-info">
                           <Link to={`/Edit-Test/${Testdetail.id}`} className="lk">
                           <FontAwesomeIcon className="user" icon="edit"  size="1x" color="white"></FontAwesomeIcon>  
                            Edit </Link>
                             
                               </Button>
                               <Button className="vtb btn-info" onClick={() => deleteTest(Testdetail.question)}><FontAwesomeIcon className="user" icon="trash"  size="1x" color="white">
                                   </FontAwesomeIcon>Delete</Button>


   
           
         </CardBody>
       </Card>
  
             </div>
                       
          
                              </div>
                             
                            
                         
                              </div>
                              </div>
                              </div>

            
        )
    
}

export default ViewQuestion
