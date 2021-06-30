import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class NPA5 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Check if a Matrix is Invertible</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>This C program checks if a matrix is invertible. 
                   The key idea is to first find out the determinant of the given matrix. 
                   If it is a non-zero quantity, then the given matrix is invertible, 
                   otherwise there is no inverse of that matrix.</p>
                 
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the 9 elements of matrix: 1 2 3 4 5 1 2 3 4</p>
                       <p className="problem">The matrix is</p>
                       <p className="problem">1	2	3	</p>  
                       <p className="problem">4	5	1</p>
                       <p className="problem"> 2	3	4	</p>
                       <p className="problem">The given matrix has an inverse!!!</p>
                            
                        
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

export default NPA5