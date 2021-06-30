import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Matrix4 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Check if a given Matrix is an Identity Matrix</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p> C Program checks a given Matrix is an Identity Matrix.
                    Identity matrix is a square matrix with 1’s along the diagonal from upper left to lower right and 0’s in all other positions. 
                   If it satisfies the structure as explained before then the matrix is called as identity matrix.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>  Declare a 2D array (matrix), of some fixed capacity.</li>
                     <li>  Take input from users the number of rows and columns. Accordingly define the elements of the array.</li>
                     <li> Run a nested for loop with 2 iterators, i and j which will help to locate each element of the array.</li>
                     <li>Inside the loop, create a condition which checks whether the element at right diagonal is 1 and remaining elements are 0s or not.</li>
                     <li>A variable flag is created and is set to 1 initially. This flag is set to 0 if it does not satisfy the above condition.</li>
                     <li>Appropriate message is printed according to the value of flag.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter the order of the matrix (mxn): 3   3</p>
                       <p className="problem">where m = number of rows and      n = number of columns</p>
                       <p className="problem">Enter the elements of the matrix</p>
                       <p className="problem">1 0 0</p>
                       <p className="problem">0 1 0</p>
                       <p className="problem"> 0 0 1</p>
                       <p className="problem">It is a IDENTITY MATRIX</p>
                      
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter the order of the matrix (mxn): 3   3</p>
                       <p className="problem">where m = number of rows and      n = number of columns</p>
                       <p className="problem">Enter the elements of the matrix</p>
                       <p className="problem">1 2 3</p>
                       <p className="problem">5 9 8</p>
                       <p className="problem"> 4 6 7</p>
                       <p className="problem">It is a  Not a IDENTITY MATRIX</p>
                        
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

export default Matrix4