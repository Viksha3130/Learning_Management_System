import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC14 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Generate Fibonacci Series</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This C Program generates fibonacci series.</p>
                 
                 <h2>Problem Solution</h2>
                <p>In this C program, we are reading the limit to generate the Fibonacci series using limit variable. In Fibonacci series the first two numbers in the Fibonacci sequence are 0 and 1 and each subsequent number is the sum of the previous two. For example Fibonacci series is 0, 1, 1, 2, 3, 5, 8, 13, 21…………</p>
                <p>Initially assign the value of ‘fib1’ variable as 0, the value of ‘fib2’ variable as 1 and the value of ‘count’ variable as 2. While loop is used to check the condition that the value of ‘count’ variable is less than the value of ‘limit’ variable.</p>
              <p>If the condition is true then execute the loop. Compute the value of ‘fib1’ variable and the value of ‘fib2’ variable then assign the value to ‘fib3’ variable. Increment the value of ‘count’ variable by 1. Assign the value of ‘fib2’ variable to ‘fib1’ variable and the value of ‘fib3’ variable to ‘fib2’ variable. Print the Fibonacci series using printf statement.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
             
                       <p className="problem">Enter the limit to generate the Fibonacci Series</p>
                       <p className="problem">6</p>
                       <p className="problem">Fibonacci Series is ...</p>
                       <p className="problem"> 0   1   1   2   3   5</p>
                    
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

export default SC14