import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC17 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Illustrate Pass by Reference</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This program illustrates pass by reference.</p>
                 
                 <h2>Problem Solution</h2>
                 
                 <ol>
                     <li>  Initialize the variable num to 10.</li>
                     <li> Call the function cube and pass the address of variable num as parameter.</li>
                     <li>  In the function definition, receive the parameter through pointer x and compute the cube of the variable through pointer x.</li>
                     <li> Print the variable num as output in the main function and exit. </li>
                     
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Output</p>
                       <p className="problem">the cube of the given number is 1000</p>
    
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

export default SC17