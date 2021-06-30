import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class String7 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Search a Word & Replace it with the Specified Word</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>The Program Searches a Word & Replace it with the Specified Word.</p>
                 <h2>Problem Solution</h2>
              <p>In this C Program, we are reading a string along with characters to be replaced using ‘mystr’. 
                The rep_str() function is used to replace a string with another string.
                 If condition statement is used to compare the length of the new and old string values are equal.</p>
                 <p>Using ret variable allocate memory. If that memory is NULL then it will exit the function.
                    If else condition statement, is used to compare the value of substring with the newstring.
                    If the condition is true, then execute the statement by copying the new string to the ret[] variable.</p>

                    <p>Add the value of newlength to the new string and also add the same old length to the old string. 
                      Otherwise, if the condition is false, then execute the else condition statement assign the value of 
                      ‘s’ variable to ‘ret[]’ variable.
                       Print the replaced word using printf statement.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                
                       <p className="problem">Enter a string along with characters to be rep_strd:</p>
                       <p className="problem">hello world</p>
                       <p className="problem">Enter the character to be rep_strd:</p>  
                       <p className="problem">l</p>
                       <p className="problem">Enter the new character:</p>
                       <p className="problem">i</p>
                       <p className="problem">hello world</p>
                       <p className="problem">heiio worid</p>
                            
                        

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

export default String7
