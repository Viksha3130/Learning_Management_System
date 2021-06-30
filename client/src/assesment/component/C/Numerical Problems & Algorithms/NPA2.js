import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class NPA2 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Find Inverse of a Matrix</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>This C program sorts a given array of integer numbers using Bubble Sort technique. The algorithm gets its name from the way smaller elements “bubble” to the top of the list. Because it only uses comparisons to operate on elements, it is a comparison sort. Time Complexity of this algorithm is O(n2).</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output</p>
                       <p className="problem">Enter the order of the Square Matrix : 3</p>
                       <p className="problem">Enter the elements of 3X3 Matrix : 3 5 2 1 5  8 3 9 2</p>
                       <p className="problem">The inverse of matrix is : </p>  
                       <p className="problem">  0.704545        -0.090909       -0.340909 </p>  
                       <p className="problem">-0.250000          -0.000000        0.250000 </p>  
                       <p className="problem">  0.068180          0.136364       -0.113636 </p>  
                   
                        
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

export default NPA2