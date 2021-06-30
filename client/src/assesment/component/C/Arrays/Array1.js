import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array1 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Calculate Sum & Average of an Array</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>We have to write a program in C such that we are reading an array of N elements
                    and then we are going to calculate the sum and average of those N elements and 
                    display it to the standard output or screen.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take a number num as input, which will indicate the number of elements in the array.</li>
                     <li>Create an array of integer with user-defined size.</li>
                     <li> Iterating through for loops (from 0 to N)), take integers as input from the user and print them.
                        These inputs are the elements of the array.</li>
                     <li>Now, start summation by iterating through all the elements and adding numbers to calculate the sum of the array.</li>
                     <li>To calculate the average, the overall sum is divided by the total number of elements in the array.</li>
                     <li>Print the sum and average values calculated.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the value of N: 5</p>
                       <p className="problem">Enter 5 numbers</p>
                       <p className="problem">10 20 30 40 50</p>  
                       <p className="problem">Input array elements</p>
                       <p className="problem"> 10 20 30 40 50</p>
                       <p className="problem"> Sum of all numbers =  150</p>
                       <p className="problem">Average of all input numbers =  30</p>
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
                 <button className="Sbtn">Submit</button>
             </div>
               
               

            </div>
           
        </div>
        )
    }
}

export default Array1
