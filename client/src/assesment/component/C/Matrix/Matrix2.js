import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Matrix2 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Perform Matrix Multiplication </h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>C program to perform Matrix multiplication of two matrices and displays the result. We use 2 D array to represent a matrix and resulting matrix is stored in a different matrix.</p>
                 
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem"> Enter rows and columns for Matrix A respectively: 2  2</p>
                       <p className="problem">Enter rows and columns for Matrix B respectively: 2 2</p>
                       <p className="problem">Enter elements in Matrix A:</p>  
                       <p className="problem">12 56</p>
                       <p className="problem"> 45 78</p>
                       <p className="problem">Enter elements in Matrix B:</p>
                       <p className="problem">2 6</p>
                       <p className="problem">5 8</p>
                       <p className="problem">matrix multiplication of A and B the result is:</p>
                       <p className="problem">304  520  </p>
                       <p className="problem">480  894</p>
                            
                        
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
                  
                    
  
                 </div></div>
             
                
            </div>
        </div>
        )
    }
}

export default Matrix2