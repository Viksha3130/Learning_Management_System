import React, {useState  , useEffect} from 'react'
import Slidebar from './Slidebar';
import AdminNavbar from './AdminNavbar'
import tx from './tx.css'
import {
    Card,  CardBody,
    CardTitle,  Button
  } from 'reactstrap';
import axios from 'axios'
import {useHistory , useParams} from 'react-router-dom'


const EditTest=() => {
     
    let history = useHistory();
    const {id} = useParams()
    
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


     useEffect(() => {
         loadTest()
     } , []);


    const onsubmit= async e => {
       e.preventDefault();
       await axios.put(`http://localhost:8000/Testdetail/${id}` , test)
       history.push("/view-test")

    }

    const loadTest = async () => {
        const result = await axios.get(`http://localhost:8000/Testdetail/${id}`);
        setTest(result.data)
    }
        return (
            <div>
            <Slidebar/>
           <AdminNavbar/>
        
            
                  <h4 >Edit Test Details</h4> 
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
               
               

           <Button className="inputxt btn-info">Save & Submit</Button>
           </form>
           
           
         </CardBody>
       </Card>
                          </div>
                      </div>
                  
                  </div>
              
            </div>
        )
    }

export default EditTest
