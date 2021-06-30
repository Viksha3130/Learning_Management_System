import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class SQ3 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Implement a Queue</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>C Program to Implement a queue using array.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> Ask the user for the operation like insert, delete, display and exit.</li>
                     <li> According to the option entered, access its respective function using switch statement.
                          Use the variables front and rear to represent the first and last element of the queue.</li>
                     <li>In the function insert(), firstly check if the queue is full. If it is, then print the output as “Queue Overflow”.
                          Otherwise take the number to be inserted as input and store it in the variable add_item. 
                         Copy the variable add_item to the array queue_array[] and increment the variable rear by 1.</li>
                     <li>  In the function delete(), firstly check if the queue is empty. If it is, then print the output as “Queue Underflow”.
                          Otherwise print the first element of the array queue_array[] and decrement the variable front by 1.</li>
                     <li>In the function display(), using for loop print all the elements of the array starting from front to rear.</li>
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

export default SQ3