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
import {Link } from "react-router-dom";

const AddQuestion=() => {
     
    let history = useHistory();
    const {id} = useParams()
    
    const [Question , setQuestion] = useState({
        question:"",
        optionA:"",
        optionB:"",
        optionC:"",
        optionD:"",
        answer:""
      

    });
    const {question,optionA,optionB,optionC,optionD,answer} =Question;

    const onInputChange = e=> {
        setQuestion({...Question,[e.target.name] : e.target.value})
    }





    const onsubmit= async e => {
       e.preventDefault();
       await axios.post(`http://localhost:8003/Queston/${id}` , Question)
       history.push("/")

    }
   
 
        return (
            <div>
            <Slidebar/>
           <AdminNavbar/>
        
            
                  <h4 >Add Questions</h4> 
                  <div className="container">
                      <div className="row">
                          <div className="col-12 columnw align-self-center offset-3">
                          <Card className="test">
         
         <CardBody>
         
          

           <form onSubmit={e => onsubmit(e) }>
           <div className={'txtBox'}>
                        <input className="inputxt "  
                        type="text" placeholder="Test Id"
                        name="id"  value={id} onChange={e => onInputChange(e)} />
                        </div>
                        <div className={'txtBox'}>
                        <textarea className="inputxt "  
                        type="text" placeholder="Question.."
                        name="question" value={question}  onChange={e => onInputChange(e)}  />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt"  
                        type="text" placeholder="Option A"
                        name="optionA"value={optionA} onChange={e => onInputChange(e)}   />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt"  
                        type="text" placeholder="Option B"
                        name="optionB"value={optionB} onChange={e => onInputChange(e)}   />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt"  
                        type="text" placeholder="Option C"
                        name="optionC"value={optionC} onChange={e => onInputChange(e)}   />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt"  
                        type="text" placeholder="Option D"
                        name="optionD"value={optionD} onChange={e => onInputChange(e)}   />
                        </div>
                        <div className={'txtBox'}>
                        <input className="inputxt"  
                        type="text" placeholder="Answer"
                        name="answer"value={answer} onChange={e => onInputChange(e)}   />
                        </div>
                   
         <Link to="/Question"><Button className="vtb btn-info">close</Button></Link>  
           <Button className="vtb btn-info">Save changes</Button>
           </form>
           
           
         </CardBody>
       </Card>
                          </div>
                      </div>
                  
                  </div>
              
            </div>
        )
    }

export default AddQuestion
