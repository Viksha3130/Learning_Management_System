import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class String4 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Reverse the String using Recursion</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program takes reverses the string using recursion.</p>
                 <h2>Problem Solution</h2>
                <p>In this C program we are reading a string using ‘str1[]’ array variable.
                   Assign the value of the length of string using strlen() to size variable.</p>
                <p>If condition statement is used to check that both the values of ‘index’ and ‘size’ variables are equal and divide the value by 2.
                   If the condition is true then execute the statement and return the value.</p>
                <p>Otherwise, if the condition is false then exit the statement. Again call the reverse()
                   function by passing the value of ‘str1’ variable and the summation of the value of ‘index’
                    variable with 1 and the value of ‘size’ variable as argument. 
                  Print the reversed string from the given string.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                       <p className="problem">Enter a string to reverse: programming</p>
                       <p className="problem">The string after reversing is: gnimmargorp</p>
                       
                   
                      
                            
                        

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

export default String4
