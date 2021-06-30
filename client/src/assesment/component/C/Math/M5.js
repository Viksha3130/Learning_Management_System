import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class M5 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Find the GCD and LCM of Two Integers</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>C Program calculates the GCD and LCM of two integers. Here GCD means Greatest Common Divisor.
                    For two integers a and b, if there are any numbers d so that a / d and b / d doesn’t have any remainder, 
                    such a number is called a common divisor. Common divisors exist for any pair of integers a and b,
                     since we know that 1 always divides any integer. We also know that common divisors can’t get 
                     too big since divisors can’t be any larger than the number they are dividing. 
                     Hence a common divisor d of a and b must have d ≤ a and d ≤ b. Here, LCM means Least Common Multiplies. 
                     For two integer a & b, to know if there are any smallest numbers d so that d / a and d / b doesn’t have a remainder. 
                   such a number is called a Least Common Multiplier.</p>
             
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter a number</p>
                       <p className="problem">30 40</p>
                       <p className="problem">GCD of 30 and 40 = 10</p>  
                       <p className="problem">LCM of 30 and 40 = 120</p>
    

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

export default M5
