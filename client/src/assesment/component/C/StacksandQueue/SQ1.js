import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class SQ1 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Implement a Stack</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program implements the stack operation.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Ask the user for the operation like push, pop, display and exit. Use the variable top to represent the top of the stack.</li>
                     <li>According to the option entered, access its respective function using switch statement.</li>
                     <li> In the function push(), firstly check if the stack is full. If it is, then print the output as “Stack is Full”. 
                         Otherwise take the number to be inserted as input and store it in the variable num.
                          Copy the number to the array stk[] and increment the variable top by 1.</li>
                     <li> In the function pop(), firstly check if the stack is empty. If it is, then print the output as “Stack is Empty”. 
                         Otherwise print the top most element of the array stk[] and decrement the variable top by 1.</li>
                     <li>In the function display(), using for loop print all the elements of the array.</li>
                     <li>Exit.</li>
                 </ol>
                
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

export default SQ1