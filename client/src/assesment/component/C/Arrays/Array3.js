import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array3 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Find the Largest Number in an Array</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>We have to write a program in C such that the program will read a one-dimensional array and find out the largest element present in the array.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take the size of the array as input from the user.</li>
                     <li>  Then, initialize an array of size given by the user.</li>
                     <li> Using for loop, take array element as input from users and insert them into the array.</li>
                     <li> After inserting all the elements of the array, consider the very first element of array to be the largest.</li>  
                     <li>Run a for loop, from 1 to arraySize-1, extracting array element one by one and comparing it to the largest element.</li>
                     <li>If the largest element is smaller than the element being compared, 
                       then the largest element is updated with the value of the current element of the array.</li>
                     <li>In the end, the largest element will hold the actual largest value present in the array.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the size of the array: 5</p>
                       <p className="problem">Enter 5 elements of  the array: </p>
                       <p className="problem">12
56
34
78
100</p>  
                   
                     
                       <p className="problem">largest element present in the given array is: 100</p>
                       
                            
                        

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

export default Array3
