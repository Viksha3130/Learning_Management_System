import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class String5 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Copy One String to Another using Recursion</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program Copies One String to Another using Recursion.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Define the function prototype by using void copy(char [], char [], int);.
                        The copy() function is used to copy one string to another using recursion.</li>
                     <li>Here, we are reading two string values using the ‘str1’ and ‘str2’ variables. str1 is used to store the input string,
                        str2 is str2 is used to recursively copy the string and calls the function copy(str1, str2, 0);</li>
                     <li> In this C Program, the character from str1 is being copied to str2 until null is encountered in the string.
                        index is incremented by 1 to move the recursion call to next state.</li>
                     <li>  While child function returning the control to parent function the character in str1 is copied to str2.</li>
          
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                   
                       <p className="problem">Enter string to copy: Hello world</p>
                       <p className="problem">The first string is: Hello world</p>
                       <p className="problem">The second string is: Hello world</p>  
                   
                  
                            
                        

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

export default String5
