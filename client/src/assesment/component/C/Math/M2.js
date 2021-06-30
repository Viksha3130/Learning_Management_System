import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class M2 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Find out the Roots of a Quadratic Equation</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>C Program calculates the roots of a quadratic equation.</p>
                 <h2>Problem Solution</h2>
                 <p>In this C program, we are reading three integer values using ‘a’, ’b’ and ‘c’ variables. 
                   If else condition statement is used to check the values are equal to 0. If the condition is true, 
                   then it is not a quadratic equation execute the statement and print as Error: Roots cannot be determined.</p>
                   <p>Otherwise, if the condition is false, then execute the else statement. To find the discriminant value, the following formula is used</p>
                  <p>Disc = b * b – 4 * a * c.</p>
                  <p>Nested if else condition statement is used to display the 3 types of roots they are complex,
                     distinct & equal roots from the equation.</p>
                     <p>If the equation value in ‘disc’ variable is less than 0, then it is imaginary roots, execute the statement.
                        To compute the real part and imaginary part the following formula is used</p>
                        <p>Real part = -b / (2.0* a)</p>
                        <p>Imaginary part = sqrt (abs (disc))/ (2.0* a)</p>
                        <p>Otherwise, if the condition is false, then execute the elseif condition statement.
                           Check the value of ‘disc’ variable is equal to 0. If the condition is true, then roots are real and equal, execute the statement. 
                          To compute the real part and imaginary part the following formula is used</p>
                      <p>Real part = -b / (2.0* a)</p>
                      <p>Real part = Imaginary part</p>
                      <p>If both the condition statements is false, then execute another else if statement. 
                        Check the value of ‘disc’ variable is greater than 0. If the condition is true, then the roots are real and distinct, 
                        execute the statement.
                         To compute the real part and imaginary part the following formula is used</p>
                       <p>Real part = (-b +sqrt(disc))/(2.0* a)</p>
                       <p>Imaginary part = (-b -sqrt(disc))/(2.0* a)</p>
            
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

export default M2
