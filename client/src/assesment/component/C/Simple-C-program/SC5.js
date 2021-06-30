import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC5 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Read Two Integers M and N & Swap their Values</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This program reads two integers & swaps their values.</p>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>  Take the two integers as input and store it in the variables m and n respectively.</li>
                     <li> Call function swap. Pass addresses of variables to the function swap.</li>
                     <li> Receive the addresses by the two pointers ptr1 and ptr2.</li>
                     <li> First copy the value stored at &m to the variable temp.</li>
                     <li> Copy the value stored at &n to &m. </li>
                     <li> Copy the value in the variable temp to &n.</li>
                     <li> Print the variables m and n as output and exit</li>
                     
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                       <p className="problem">Enter the values of M and N</p>
                       <p className="problem">2 3</p>
                       <p className="problem">Before Swapping:M =  2.00    N =  3.00</p>
                       <p className="problem"> After Swapping:M  =  3.00    N =  2.00</p>
                    
                       
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
                
                </div>
            </div>
        </div>
        )
    }
}

export default SC5
