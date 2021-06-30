import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array2 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Compute the Sum of two One-Dimensional Arrays using Malloc</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>We have to write a program in C such that the program will allocate 2 one-dimensional arrays using malloc() call and 
                   then will do the addition and 
                   stores the result into 3rd array. The 3rd array is also allocated using a malloc() call.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Declare a variable (n), in which the size of the array(s) will be stored.</li>
                     <li>Declare 3 pointer variables of integer type, to hold starting address of 3 different arrays (a, b and c).</li>
                     <li> Using for loop running from 0 to arraySize-1, go at every location by adding
                        the value of integer i(the iterator)to the starting address of the array(s) 
                       and then take the input by storing values to those locations.</li>
                     <li>Do the previous step for 2 arrays (i.e a and b).</li>
                     <li>Now, again using for loop, adding the value of i to the starting address of both the arrays (a and b), 
                       extract each element from both the arrays holdd by a and b, 
                       add the elements and store the result in the third array (i.e c).</li>
                       <li>Print the elements of array c.</li>
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the size of the arrays:5</p>
                       <p className="problem">Enter Elements of First List</p>
                       <p className="problem">23 45 67 12 90</p>  
                       <p className="problem">Enter Elements of Second List</p>
                       <p className="problem">  87
56
90
45
10</p>
                       <p className="problem"> Resultant List is</p>
                       <p className="problem"> 110
101
157
57
100</p>
                            
                        

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

export default Array2
