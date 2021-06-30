import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC6 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Convert the given Binary Number into Decimal</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                  
                    
                 <h2>Problem Description</h2>
                <p>This program takes a binary number as input and converts it into decimal number.</p>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> Take a binary number and store it in the variable num.</li>
                     <li>Initialize the variable decimal_val to zero and variable base to 1.</li>
                     <li>Obtain the remainder and quotient of the binary number. Store the remainder in the variable rem and override the variable num with quotient.</li>
                     <li> Multiply rem with variable base. Increment the variable decimal_val with this new value.</li>
                     <li>  Increment the variable base by 2. </li>
                     <li>Repeat the steps 3, 4 and 5 with the quotient obtained until quotient becomes zero.</li>
                     <li> Print the variable decimal_val as output.</li>
                     
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                       <p className="problem">Enter a binary number(1s and 0s)</p>
                       <p className="problem">10101001</p>
                       <p className="problem">The Binary number is = 10101001</p>
                       <p className="problem">Its decimal equivalent is = 169</p>
                    
                       
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
                 
                </div>
            </div>
        </div>
        )
    }
}

export default SC6