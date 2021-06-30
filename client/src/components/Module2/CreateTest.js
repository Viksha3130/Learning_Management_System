import React, {useState } from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import tx from './tx.css'
import {
    Card,  CardBody,
    CardTitle,  Button
  } from 'reactstrap';
import axios from 'axios'
import {useHistory} from 'react-router-dom'


const CreateTest=() => {
     
    let history = useHistory();

    const [test , setTest] = useState({
        Testname:"",
       Testdescription:"",
       Testduration:"",
       Testinstruction:""
    });
    const {Testname,Testdescription,  Testduration,  Testinstruction} = test;

    const onInputChange = e=> {
        setTest({...test,[e.target.name] : e.target.value})
    }

    const onsubmit= async e => {
       e.preventDefault();
       await axios.post("http://localhost:8000/Testdetail" , test)
       history.push("/view-test")

    }
        return (
            <div>
            <Slidebar/>
           <AdminNavbar/>
        
            
                  <h4 >Create New Test</h4> 
                  <div className="container">
                      <div className="row">
                          <div className="col-12 columnw align-self-center offset-3">
                          <Card className="test">
         
         <CardBody>
         
          <CardTitle className="CardTitle">Please Fill In The Details</CardTitle>
          

           <form onSubmit={e => onsubmit(e) }>
           <div className={'txtBox'}>
                        <input className="inputxt "  
                        type="text" placeholder="Test Name"
                        name="Testname"  value={Testname} onChange={e => onInputChange(e)} />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt "  
                        type="text" placeholder="Test Description"
                        name="Testdescription" value={Testdescription} onChange={e => onInputChange(e)}  />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt"  
                        type="text" placeholder="Test Duration in Minutes"
                        name="Testduration"value={Testduration} onChange={e => onInputChange(e)}   />
                        </div>
                        <div className={'txtBox'}>
                        <textarea className="inputxt"  
                        type="text" placeholder="Test Instructions..."
                        name="Testinstruction" value={Testinstruction} onChange={e => onInputChange(e)} />
                        </div>
               
               

           <Button className="inputxt btn-info">Create Test</Button>
           </form>
           
           
         </CardBody>
       </Card>
                          </div>
                      </div>
                  
                  </div>
              
            </div>
        )
    }

export default CreateTest
