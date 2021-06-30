import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Matrix3 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Check if 2 Matrices are Equal</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>C Program checks whether the 2 Matrices are Equal. The program first reads 2 matrices and then checks both the matrices are equal. 
                   If both the matrices are equal then display they are equal.
                    If both the matrices are not equal then display they are different.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Declare two 2D array, of some fixed capacity.</li>
                     <li> Take input from users the number of rows and columns. Accordingly define the elements of the array.</li>
                     <li> Declare a flag variable with initial value as 1, which will indicate the equal/unequal matrix.</li>
                     <li>Start a for loop with 2 iterators, i and j, and access each element of the two arrays using these.</li>
                     <li>Compare the elements of both the two arrays at the same location, and set flag to 0 in inequality occurs.</li>
                     <li>The matrix will be equal if flag remains 1 and has not been changed.</li>
                    
                 </ol>
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

export default Matrix3