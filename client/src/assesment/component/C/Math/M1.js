import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class M1 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Calculate the Simple Interest</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p> C Program calculates the simple interest.</p>
                 <h2>Problem Solution</h2>
                 <p>This C Program calculates the simple interest given the principal amount, rate of interest and time.
                    The formula to calculate the simple interest is: simple_interest = (p * t * r) / 100 
                   where p is principal amount, t is time & r is rate of interest.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the values of principal_amt, rate and time</p>
                       <p className="problem">12 5 10</p>
                       <p className="problem">Amount = Rs. 12.00</p>  
                       <p className="problem">Rate = Rs. 10.00%</p>
                       <p className="problem">Time = 5 years</p>
                       <p className="problem">Simple interest =  6.00</p>
                            
                        

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
                  
                    
  
                 </div>
                 <button className="Sbtn">Submit</button>
             </div>
               
               

            </div>
           
        </div>
        )
    }
}

export default M1
