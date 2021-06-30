import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class String8 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Count the Number of Vowels & Consonants in a Sentence</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The program takes the sentence as input and counts the number of vowels & consonants in a sentence.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take the sentence as input and store in the array sentence[].</li>
                     <li>Initialize the variables vowels, consonants and special to zero.</li>
                     <li>Using if,else statements, check if the sentence has vowels like a,e,i,o,u,A,E,I,O and U.</li>
                     <li>If it has, then increment the variable vowels by 1. Otherwise increment the variable consonants by 1.</li>
                     <li> If the sentence has \t, \0, & empty space, then increment the variable special by 1.</li>
                     <li> Do steps 3, 4 & 5 inside a for loop.</li>
                     <li>When for loop terminates, subtract the variable consonants from special.</li>
                     <li>Print the variables vowels and consonants as output.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                       <p className="problem">Enter a sentence</p>
                       <p className="problem">hello world</p>
                       <p className="problem">No. of vowels in hello world = 3</p>
                       <p className="problem"> No. of consonants in hello world = 7</p>  
                   

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

export default String8
