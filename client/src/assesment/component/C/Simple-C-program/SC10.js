import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC10 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Find whether a Number is Prime or Not using Recursion</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>The following C program, using recursion, finds whether the entered number is a prime number or not.</p>
                 
                 <h2>Problem Solution</h2>
             
              <p>In this C program, we are reading the integer number using ‘num’ variable. A prime number is an integer that has no integral factor but itself and 1. The check variable is used to call the primeno() function by passing the value of ‘num’ variable and the value of division of ‘num’ variable value by 2 as an argument. </p>
              <p>The primeno() function is used to find whether the entered number is a prime number or not. If else condition statement is used to check the value of ‘i’ variable is equal to 1 and return the value of ‘i’ variable to the called variable ‘check’.</p>
              <p>Otherwise, if the condition is false execute the else statement and call the primeno() function by passing the value of ‘num’ variable and the decrement the value of ‘i’ variable by 1. Return the resulted value to the called variable ‘check’.</p>
              <p>If else condition statement is used to check that the value of ‘check’ variable is equal to 1. If the condition is true print the statement as prime number. Otherwise, if the condition is false print the statement as not a prime number.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Case:1</p>
                       <p className="problem">Enter a number: 456</p>
                       <p className="problem">456 is not a prime number</p>
                       
                   
                <p className="case">Case:2</p>
                       <p className="problem">Enter a number: 89</p>
                       <p className="problem"> 89 is a prime number</p>
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

export default SC10