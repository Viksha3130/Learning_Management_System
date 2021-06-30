import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class String3 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Check if the Substring is present in the given String</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program checks the substring is present in the given string.</p>
                 <h2>Problem Solution</h2>
                 <p>In this C program, we are reading a string using gets() function ‘str’ character variable. 
                   We are reading value another string to search using search character variable. To check substring is present in the given string.
                    While loop is used to compute the str[] and search[] array variable value is not equal to null.</p>

                 <p>If the condition is true then execute the iteration of the loop. Increment the values of ‘count1 and count2 variable values. 
                   Now we are using two for loops to check if the substring is present in the given string. 
                   We are initializing the ‘i’ variable value to 0 and the loop will execute till the condition that ‘i’
                    variable value should be less than or equal to the difference of count1 and count2 variable values.</p>


                    <p>If the condition is true, then another for loop will execute by initializing the ‘i’ variable value to ‘j’ variable.
                       And the loop will terminate if the ‘j’ 
                      variable value is less than the sum of ‘i’ variable value with count2 variable value if the condition is true.</p>

                      <p>Then it will execute the loop by assigning the flag variable value as 1 and if condition statement is 
                        used to check the str[] array variable value is not equal to search[] with the base index is the difference
                         between ‘j’ variable and ‘i’ variable value. 
                        If the condition is true then it will execute the statement and assign flag variable value as 0.</p>

                        <p>For loop iteration will terminate till the condition becomes false. If-else condition statement is used
                           to check if flag variable value is equal to 1 then print as search successful otherwise
                           if the condition is false then print the statement as search unsuccessful.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter a string: hello</p>
                       <p className="problem">Enter search substring: world</p>
                       <p className="problem">SEARCH UNSUCCESSFUL!</p>  
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter a string: helloworld</p>
                       <p className="problem">  Enter search substring:ld</p>
                       <p className="problem">SEARCH SUCCESSFUL!</p>
                            
                        

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

export default String3
