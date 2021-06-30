import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class NPA3 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Perform Matrix Multiplication</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>This C program performs matrix multiplication. In matrix multiplication, we take two matrices of order m*n and p*q respectively to find a resultant matrix of the order m*q where n is equal to p . Time Complexity of this algorithm is O(n3).</p>
                 
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the number of rows and columns of first matrix 3 3</p>
                       <p className="problem">Enter the elements of first matrix</p>
                       <p className="problem">1 2 0</p>  
                       <p className="problem">0 1 1 </p>
                       <p className="problem">2 0 1 </p>
                       <p className="problem">Enter the number of rows and columns of second matrix 3 3</p>
                       <p className="problem">Enter the elements of second matrix</p>
                       <p className="problem">1 1 2</p>
                       <p className="problem">2 1 1 </p>  
                       <p className="problem">1 2 1</p>
                       <p className="problem">Product of entered matrices:-</p>
                       <p className="problem">5	3	4	</p>
                       <p className="problem">3	3	2</p>
                       <p className="problem">3	4	5	</p>
                            
                        
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

export default NPA3