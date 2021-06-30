import React, { useState } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import axios from 'axios';
import Progress from '../../Progress'
import Message from '../../Message'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const SC2 =() =>{ 
  


        return (
        <div>
              <h5>C Program to Accept two Integers and Check if they are Equal</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>This program accepts two integers and check if they are equal or not.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> Take the two integers as input and store it in the variables m and n respectively.</li>
                     <li> Using if,else statements check if m is equal to n.</li>
                     <li> If they are equal, then print the output as “M and N are equal”.</li>
                     <li> Otherwise print it as “M and N are not equal”.</li>
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter the values for M and N</p>
                       <p className="problem">3 3</p>
                       <p className="problem">M and N are equal</p>  
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter the values for M and N</p>
                       <p className="problem"> 5 8</p>
                       <p className="problem">M and N are not equal</p>
                            
                        

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
                    <form >
                      
                    <div className="custom-file ">
                    <label >Submit</label>
                       <input type="file"  name="file"  className="custom-file-input " id="customFile" />
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
 
 export default SC2
 
                  
                    
  
                
                
                