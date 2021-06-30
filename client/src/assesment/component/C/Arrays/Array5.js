import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array5 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Delete the Specified Integer from an Array</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>It implements one dimentional array, take a number as input from users to delete
                    and delete that element from the array in case it is present or print appropriate message if not present.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Declare an array, vectorx of some fixed capacity, 10.</li>
                     <li> Take size of the array as input from users.</li>
                     <li> Using for loop, define the elements of the array.</li>
                     <li> Now, take a number form users as input, which needs to be deleted.</li>
                     <li>Run a for loop, comparing each element of the array to that number if both have same magnitude.</li>
                     <li>If the number is present in the array, then save its location. If number is not present in the array, then print appropriate message.</li>
                     <li>Run a for loop from that saved location to the size of array, shifting each element of the array leftwards by one.</li>
                    <li>The number gets deleted.</li>
                     <li>Exit.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                     <p className="problem">Enter a number of elements : 4</p>
                       <p className="problem">Enter the elements</p>
                       <p className="problem">345 234 678 987</p>  
                       <p className="problem">Input array elements are</p>
                       <p className="problem">345 234 678 987</p>  
                       <p className="problem">Enter the element to be deleted : 234</p>
                       <p className="problem">The resultant vector is</p>
                       <p className="problem">345 678 987</p>
                            
                        

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

export default Array5
