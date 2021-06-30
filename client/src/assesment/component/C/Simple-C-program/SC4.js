import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import axios from 'axios'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

 class SC4 extends Component { 

  constructor(props) {
    super(props);
 
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
        image: ''
    }
  }
 
  onFileChange(e) {
      this.setState({ image: e.target.files[0] })
  }
 
  onSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('image', this.state.image)
      axios.post("http://localhost:5000/api/user-profile", formData, {
      }).then(res => {
          console.log(res)
      })
  }
    render() {
        return (
        <div>
              <h5>C Program to Find the Number of Integers Divisible by 5</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <ol>
                    <li>This program takes the range as input and finds the number of integers divisible by 5 in the given range.</li>
                    <li>Also finds the sum of all integers that are divisible by 5 in the given range.</li>
                    </ol>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>  Take the range as input and store it in the variables num1 and num2 respectively.</li>
                     <li> Firstly initialize the variables count and sum to zero.</li>
                     <li> Using the for loop, find all the integers that gives remainder zero when divided by 5 and print them consecutively.</li>
                     <li>  Along with this, increment both the variables i.e increment the variable count by 1 and variable sum by the number that is divisible by 5.</li>
                     <li> Print the variables count and sum as output. </li>
                     
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter the value of num1 and num2</p>
                       <p className="problem">12 17</p>
                       <p className="problem">Integers divisible by 5 are</p>
                       <p className="problem"> 15,</p>
                       <p className="problem"> Number of integers divisible by 5 between 12 and 17 = 1</p>  
                       <p className="problem"> Sum of all integers that are divisible by 5 = 15</p>    
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter the value of num1 and num2</p>
                       <p className="problem"> 1 10</p>
                       <p className="problem">Integers divisible by 5 are</p>
                       <p className="problem">5,10</p>  
                       <p className="problem"> Number of integers divisible by 5 between 1 and 10 = 2</p>  
                       <p className="problem">Sum of all integers that are divisible by 5 = 15</p>  
                            
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
                    <form  onSubmit={this.onSubmit}>
                      
                    <div className="custom-file ">
                    <label >Submit</label>
                       <input type="file" className="custom-file-input " id="customFile" onChange={this.onFileChange}  />
                   <label className="custom-file-label" htmlFor="customFile"></label>
                              <input type="submit "  className="btn btn-info btn-block mt-4"  />
                     </div>
                     
                    </form>
                    
                    <div className="col-md-6 m-auto">
                   <h3 className="text-center" ></h3>
                   </div>
                   </div>
 
                  </div>
              </div>
                
                </div>
       
       
        )
    }
}

export default SC4
