import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC8 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Find Sum of Digits of a Number using Recursion</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This C program finds the sum of digits of a number using recursion.</p>
                 
                 <h2>Problem Solution</h2>
             
          <p>In this C program, we are reading the integer number using the ‘num’ variable. The function sum() is used to find sum of digits of a number using recursion.</p>
          <p>In function sum() check the value of ‘num’ variable is not equal to 0. If the condition is true execute the statement. Divide the value of ‘num’ variable by 10 integer value. Add the resulted value along with the modulus of the value of ‘num’ variable. Print the sum of digits of a number using recursion.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                       <p className="problem">Enter the number: 2345</p>
                       <p className="problem">Sum of digits in 2345 is 14</p>
                    
                       
                    
                       
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

export default SC8