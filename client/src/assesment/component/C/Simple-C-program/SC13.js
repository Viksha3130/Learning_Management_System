import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC13 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Check whether a given Number is Armstrong</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This C Program checks whether a given number is armstrong number.</p>
                 
                 <h2>Problem Solution</h2>
                <p>In this C program, we are reading the integer value using ‘number’ variable. An Armstrong number is an n-digit base b number, such that the sum of its digits raised to the power n is the number itself. Hence, 153 because 13 + 53 + 33 = 1 + 125 + 27 = 153.</p>
                <p>Using while loop checks the value of ‘number’ variable is not equal to 0. If the condition is true, execute the iteration of the loop. The ‘rem’ variable is used to compute the modulus of the value of ‘number’ variable by 10 and ‘cube’ variable is used to compute the cube of the value of ‘rem’ variable using pow().</p>
              <p>Then ‘sum’ variable is used to compute the summation of the value of ‘sum’ variable with the value of ‘cube’ variable. The If-else condition statement is used to check both the value of ‘sum’ variable and the value of ‘temp’ variable are equal. If the condition is true, then it will print Armstrong number. Otherwise, it will execute the else condition statement and print not Armstrong number.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Case:1</p>
                       <p className="problem">enter a number : 370</p>
                       <p className="problem">The given no is armstrong no</p>
                       
                       
                   
                <p className="case">Case:2</p>
                       <p className="problem">enter a number : 1500</p>
                       <p className="problem"> The given no is not a armstrong no</p>
                    
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

export default SC13