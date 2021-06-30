import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC9 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Find Reverse of a Number using Recursion</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This C program finds the reverse of a number using recursion.</p>
                 
                 <h2>Problem Solution</h2>
             
              <p>In this C program, we are reading the integer number using the ‘num’ variable. Assign the value of ‘num’ variable to ‘temp’ variable. While loop is used to check the condition the value of ‘temp’ variable is not equal to 0, if the condition is true execute the statement divide the value of ‘temp’ variable by 10. </p>
              <p>The result variable is used to call the rev() function by passing ‘num’ and ‘length’ variable value as argument. The function rev() is used to reverse the digits of the number. If else condition statement is used to check the value of ‘len’ variable is equal to 1. If the condition is true execute the statement.</p>
              <p>Otherwise, if the condition is false execute the statement. Compute the modulus of the value of ‘num’ variable by 10 integer and multiply the resulted value with 10. Compute the power of the value of ‘len’ variable using pow() function. Add the resulted value ‘num’ variable with 10. Print the reverse of a number using recursion.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                       <p className="problem">Enter an integer number to reverse: 1234</p>
                       <p className="problem">The reverse of 1234 is 4321.</p>
                    
                       
                    
                       
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

export default SC9