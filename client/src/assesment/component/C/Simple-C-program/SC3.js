import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

 class SC3 extends Component { 

  

    render() {
        return (
        <div>
              <h5>C Program to Calculate the Sum of Odd & Even Numbers</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>The program takes the number N and finds the sum of odd and even numbers from 1 to N.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li> User must first enter the number upto which he/she wants to find the sum and is stored in the variable num.</li>
                     <li> Using for loop take the elements one by one from 1 to num.</li>
                     <li> Use if,else statement for each element to find whether it is odd or even by dividing the element by 2.</li>
                     <li> Initialize the variables odd_sum and even_sum to zero.</li>
                     <li> If the element is even,then increment the variable even_sum with the current element. </li>
                     <li> If the element is odd,then increment the variable odd_sum with the current element.</li>
                     <li> Print the variables odd_sum and even_sum separately and exit.</li>
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem">Enter the value of num</p>
                       <p className="problem">10</p>
                       <p className="problem">Sum of all odd numbers  = 25</p>
                       <p className="problem">Sum of all even numbers = 30</p>  
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter the value of num</p>
                       <p className="problem"> 100</p>
                       <p className="problem">Sum of all odd numbers  = 2500</p>
                       <p className="problem">Sum of all even numbers = 2550</p>  
                            
                        
                    
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
                   <button className="Sbtn">Submit</button>
                  
                    
  
                 </div>
            </div>
            </div>
        </div>
        )
    }
}

export default SC3
