import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class M6 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Find HCF of a given Number </h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p> C Program finds HCF of a given Number using Recursion.</p>
                 <h2>Problem Solution</h2>
                <p>C Program, we are reading the two integer numbers using ‘a’ and ‘b’ variables respectively. 
                  The hcf() function is used to find the HCF of two entered integers using recursion. HCF is the Highest Common Factor.</p>
                 <p>While loop is used to check that both ‘a’ and ‘b’ variable values are not equal. If the condition is true then execute the loop. 
                   Otherwise, if the condition is false it will return the value.</p>
                  <p>If else condition statement is used to check the value of ‘a’ variable is greater than the value of ‘b’ variable.
                     If the condition is true, then return the value. Otherwise, if the condition is false,
                     then execute else statement and return two integer variable value. Print the HCF of a given number using printf statement.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the two numbers to find their HCF: 24 36</p>
                       <p className="problem">The HCF of 24 and 36 is 12.</p>

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

export default M6
