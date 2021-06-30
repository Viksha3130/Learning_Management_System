import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Matrix5 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Determine if a given Matrix is a Sparse Matrix</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>C Program determines the given matrix is a sparse matrix.</p>
                 <h2>Problem Solution</h2>
                 <p>In this C program, we are reading the order of the matrix row and column using ‘m’ and ‘n’ variables respectively. 
                   Using for loop the coefficient elements of the matrix is assigned to the variable ‘array[i][j]’. Using if condition statement,
                    check the coefficient element values of the matrix are equal to zero. 
                   If the condition is true then it will execute if condition statement and increment the count variable value.</p>
                   <p>The sparse matrix has more zero elements than non zero elements of the matrix. 
                     To check the given matrix is sparse matrix or not the if-else condition statement 
                     is used to check the multiplication of row and column of the matrix value of ‘m’ and ‘n’ variables respectively.</p>
                 <p>When dividing the element values by 2 its value should be less than the number of zero elements 
                   counted by the value of ‘counter’ variable. If the condition is true, then it will display the given matrix is sparse. Otherwise,
                    it will display the given matrix is not a sparse matrix and displays the number of zeros counted in the matrix.</p>
                 
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

export default Matrix5