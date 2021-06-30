import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class M12 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C program to Calculate the Value of nPr</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>C Program calculates the value of nPr.</p>
                 <h2>Problem Solution</h2>
                 <p>C program, we are reading the two integer values using ‘n’ and ‘r’ variables respectively. 
                   The fact() function is used to find all possible rearrangement of the elements. 
                   A permutation is a re-arrangement of elements of a set. 
                   Any duplication of the collected elements in different orders is allowed. 
                   A permutation therefore tends to be a large number.</p>
                  <p>If condition statement is used to check the integer value is less than or equal to 1. 
                    If the condition is true, then execute the statement and return the value as 1.
                     Otherwise, if the condition is false then execute the else statement.</p>
                  <p>Compute the integer value with the next previous value i.e if the integer value is 3.
                     Multiply the value as 3*2 then the resultant value 6 with 1 and return the value to ‘npr’ variable.
                      Divide the value of ‘integer’ variable by fact(). Compute the difference of the value of 
                      ‘integer’ variable by the value of ‘r’ power variable.
                     Print the value of nPr using the printf statement.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter value for n and r</p>
                       <p className="problem">5 4</p>
                       <p className="problem">Permutation values is = 120</p>  
              
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

export default M12
