import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class NPA4 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Check Multiplicability of Two Matrices</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>We have to write a C program to check whether the two matrices can be multiplied of not. We have to input the dimensions of two matrices i.e. number of rows and columns in each matrix and calculate whether they can be multiplied or not.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> In order to multiply two matrices, the number of columns in first matrix must be equal to the number of rows in other matrix.</li>
                     <li> For matrix 1 number of rows (say m) = 4 and number of columns (say n) = 2, and for matrix 2, m = 2 and n = 3 then we can multiply both matrices and the resulting matrix will have dimensions as: m = 4 and n = 3.</li>
                
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter the dimensions of first matrix: 4 2</p>
                       <p className="problem"> Enter the dimensions of second matrix: 2 3</p>
                       <p className="problem"> Two matrices meet the criteria for Multiplication !!!</p>  
                       <p className="problem"> Dimensions of resultant matrix are: 4X3</p>  
                      
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter the dimensions of first matrix: 3 3</p>
                       <p className="problem"> Enter the dimensions of second matrix: 2 3</p>
                       <p className="problem">   Two matrices CANNOT be multiplied !!!</p>
                            
                        
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

export default NPA4