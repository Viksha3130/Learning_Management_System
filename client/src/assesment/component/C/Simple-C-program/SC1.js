import React , {Component} from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import axios from 'axios'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');





class SC1 extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        profileImg: ''
    }
}

onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
}

onSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg)
    axios.post("http://localhost:4000/api/file-submit", formData, {
    }).then(res => {
        console.log(res)
    })
}
render(){
    
      const code = 'const a = 0;';
        return (
        <div>
              <h5>C Program to Check if a given Integer is Positive or Negative</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program takes the given integer and checks whether the integer is positive or negative.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take the integer which you want to check as input.</li>
                     <li> Using if,else statements check whether the integer is greater or lesser than zero.</li>
                     <li> If it is greater than or equal to zero, then print the ouput as “it is a positive number”.</li>
                     <li> If it is lesser than zero, then print the ouput as “it is a negative number”.</li>
                     <li>Exit.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter a number</p>
                       <p className="problem">-10</p>
                       <p className="problem">-10 is a negative number</p>  
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter a number</p>
                       <p className="problem">  45</p>
                       <p className="problem"> 45 is a positive number</p>
                            
                        

                 </div>
             </div>
             <div className="col-6 ">
             <h2>Code editor</h2>
             <CodeMirror className="codemirror"    
                    value=''
                    options={{
                      mode: 'xml',
                      theme: 'material',
                      lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                    }}
                    selection={{
                      ranges: [{
                        anchor: {ch: 8, line: 5},
                        head: {ch: 37, line: 5}
                      }],
                      focus: true // defaults false if not specified
                    }}
                    onSelection={(editor, data) => {}}
                    scroll={{
                      x: 50,
                      y: 50
                    }}
                    onScroll={(editor, data) => {}}
                    cursor={{
                      line: 5,
                      ch: 10
                    }}
                    onCursor={(editor, data) => {}}
                  
                  />
                <button type="button" className="btn btn-info mt-2">Submit</button>
                  
                    
  
                 </div>
                 
                 <div className="col-12 " >
                   <form onSubmit={this.onSubmit} >
                     
                   <div className="custom-file ">
                   <label >Submit</label>
                      <input type="file"  name="file" multiple className="custom-file-input " id="customFile" onChange={this.onFileChange} />
                  <label className="custom-file-label" htmlFor="customFile">Choose a file</label>
                             <input type="submit"  className="btn btn-info btn-block mt-4" />
                    </div>
                    
                   </form>
                  
                 

           
                 </div>
             </div>
               
              

            </div>
           
        </div>
        )
                  }              
}

export default SC1
