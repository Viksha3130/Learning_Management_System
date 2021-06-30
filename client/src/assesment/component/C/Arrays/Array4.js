import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array4 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Insert an Element in a Specified Position in a given Array</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>This program implements a one dimentional array, sorts it and then takes a user input 
                   and inserts the desired element in the specified position of a one dimentional array
                    and print all the elements of the array with a +1 increment in the array size.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Declare a one dimentional array of some fixed capacity.</li>
                     <li> Take size of the array as input from users, which must be at least one less than array’s capacity.</li>
                     <li>Define array elements, taking each element as input from users.</li>
                     <li>Sort the array elements.</li>
                     <li>Now, take a value from users, which needs to be inserted inside this array.</li>
                     <li>Select a suitable position for the new element by comparing the new element to 
                       the array elements and insert it in that position.</li>
                    <li>Print all the elements. Now, the array size would be previous array size+1.</li>
                    <li>Exit</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter a number of elements : 5</p>
                       <p className="problem">Enter the elements</p>
                       <p className="problem">76 90 56 78 12</p>  
                       <p className="problem">Input array elements are</p>
                       <p className="problem"> 76 90 56 78 12</p>
                       <p className="problem">Sorted list is</p>
                       <p className="problem">12 56 76 78 90</p>
                       <p className="problem">Enter the element to be inserted : 61</p>
                       <p className="problem">Final list is</p>
                       <p className="problem">12 56 61 76 78 90</p>
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

export default Array4
