import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class String1 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Check if a given String is Palindrome</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program accepts a string and checks whether a given string is palindrome.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take a string as input and store it in the array string[].</li>
                     <li> Store the same string into the another array reverse_string[] in the reverse fashion.</li>
                     <li> Using for loop compare the elements of both the arrays.</li>
                     <li> If all the elements of the array are same, then it is a palindrome. Otherwise it is not a palindrome.</li>
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter a string</p>
                       <p className="problem">Program</p>
                       <p className="problem">Program is not a palindrome</p>  
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter a string</p>
                       <p className="problem">malayalam</p>
                       <p className="problem">malayalam is a palindrome</p>
                            
                        

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

export default String1
