import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC18 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Illustrate Pass by Value</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>The program illustrates pass by value method.</p>
                 
                 <h2>Problem Solution</h2>
                 
                 <ol>
                     <li>  Take two numbers as input and store it in the variables num1 and num2 respectively.</li>
                     <li> Call the function swap and pass the variables num1 and num2 as parameters to the function swap.</li>
                     <li>  In function swap, recieve the parameters through variables a and b respectively.</li>
                     <li> Copy the value of variable a to the variable temp. Copy the value of variable b to the variable a and copy the value of variable temp to the variable b. This will do the swapping ONLY in the swap() function, but it will NOT change the value of variables in the main() function.</li>
                     <li>Print the variables num1 and num2 in the main function as output and exit.</li>
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Output</p>
                       <p className="problem">Before swapping num1 = 10 num2 = 20</p>
                       <p className="problem">After swapping num1 = 10 num2 = 20</p>
    
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

export default SC18