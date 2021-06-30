import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class M9 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C program to Calculate the value of nCr</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>C Program Calculates the value of nCr.</p>
                 <h2>Problem Solution</h2>
               <p>C Program, we are reading the value for ‘n’ and ‘r’ variable to calculate the value of nCr. 
                 The algorithm used in this program is nCr = n! /((n-r)!r!). 
                 A combination is one or more elements selected from a set without regard to the order.</p>
                 <p>Then ‘ncr’ variable is used to compute fact(n)/(fact(r)* fact(n – r)). 
                   The fact() function is used to compute the factorial of the value. 
                   If-else condition statement is used to check the argument value of ‘z’ variable is equal to 0.
                    If the condition is true then execute the statement.</p>
                    <p>For loop is used to compute the factorial value. Initialize the value of ‘i’ variable to 1 
                      and check the value of ‘i’ variable is less than or equal to the argument value in ‘z’ variable. 
                      If the condition is true then execute the loop. Multiply the value of ‘f’ variable with each integer
                       variable value in ‘i’ variable. \
                      Compute the value for nCr and print the value of nCr using printf statement.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the value for N and R</p>
                       <p className="problem">5 2</p>
                       <p className="problem">The value of ncr is: 10</p>  
  

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

export default M9
