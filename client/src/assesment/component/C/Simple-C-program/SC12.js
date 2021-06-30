import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC12 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Reverse a Number & Check if it is a Palindrome</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This C program accepts an integer, reverse it and also checks if it is a palindrome or not.</p>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take the number which you have to reverse as the input and store it in the variable num.</li>
                     <li>Copy the input number to the another variable temp.</li>
                     <li> Firstly initialize the variable reverse to zero.</li>
                     <li>Obtain the remainder of the input number.</li>
                     <li>Multiply the variable reverse with 10 and add the Obtained remainder to it and store the result in the same variable.</li>
                     <li>Obtain the quotient of the input number and considering this as input number repeat the steps as mentioned above until the obtained quotient becomes zero.</li>
                     <li> When it becomes zero, using if,else statement check whether the reversed number is equal to original number or not.</li>
                     <li> If it is equal, then print the output as “Number is a palindrome”, otherwise print the output as “Number is not a palindrome”.</li>
                 </ol>
             
           
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Case:1</p>
                       <p className="problem">Enter an integer</p>
                       <p className="problem">6789</p>
                       <p className="problem">Given number is = 6789</p>
                       <p className="problem">Its reverse is  = 9876</p>
                       <p className="problem">Number is not a palindrome</p>
                       
                   
                <p className="case">Case:2</p>
                       <p className="problem">Enter an integer</p>
                       <p className="problem"> 58085</p>
                       <p className="problem">Given number is = 58085</p>
                       <p className="problem">Its reverse is  = 58085</p>
                       <p className="problem">Number is  a palindrome</p>         
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

export default SC12