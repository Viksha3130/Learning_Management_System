import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC15 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Find if a given Year is a Leap Year</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This program takes a year as input and finds whether a year is leap year or not.</p>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> Take a year as input and store it in the variable year.</li>
                     <li>Using if,else statements to,</li>
                     <ul>
                         <li> a) Check whether a given year is divisible by 400.</li>
                         <li> b) Check whether a given year is divisible by 100.</li>
                         <li>c)  Check whether a given year is divisible by 4.</li>
                     </ul>
                     <li> If the condition at step 2.a becomes true, then print the ouput as “It is a leap year”.</li>
                     <li>If the condition at step 2.b becomes true, then print the ouput as “It is not a leap year”.</li>
                     <li>If the condition at step 2.c becomes true, then print the ouput as “It is a leap year”.</li>
                     <li>If neither of the condition becomes true, then the year is not a leap year and print the same.</li>
                     
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Case:1</p>
                       <p className="problem">Enter a year : 2012</p>
                       <p className="problem">2012 is a leap year</p>
                       
                       
                   
                <p className="case">Case:2</p>
                       <p className="problem">Enter a year : 2009</p>
                       <p className="problem"> 2009 is not a leap year</p>
                    
               
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

export default SC15