import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Matrix1 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Calculate the Sum & Difference of the Matrices</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>Program calculates the sum & difference of the matrices. 
                     The program first reads 2 matrices and then performs both addition and subtraction of matrices.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> Create four 2D arrays (matrices), 2 for storing data, one for storing sum of the element of first two matrices,
                          one for storing difference of first two matrices.</li>
                     <li>  Define elements of the first two matrices.</li>
                     <li>Make function for reading elements of two matrices, printing elements of these two matrices 
                         and to calculate sum and difference of these matrices.</li>
                     <li>All the four operations involve a nested for loop, with two iterators i and j. 
                           Read element through scanf() and print element through printf().</li>
                     <li>Using both iterators we will locate each position of both arrays, take sum of elements of the array occurring at the same position and 
                       storing the sum in the third array at the same location. Same step to be followed for difference.</li>
                    
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

export default Matrix1