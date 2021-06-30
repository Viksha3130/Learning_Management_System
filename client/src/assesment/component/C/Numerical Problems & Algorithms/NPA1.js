import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class NPA1 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Solve any Linear Equation in One Variable</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>For linear equation of the form aY + b + c = 0, we need to input value of a,b,c. After having values of all the constants we need to solve for Y and create a function which will return the calculated value of Y.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>  Input the values of a,b,c. where a is the coefficient of Y.</li>
                     <li>  Solve for Y. It can simply evaluated as -(b+c)/a.</li>
                     <li> Since value of Y can have fractional values that is why we have taken its data type as float.</li>
                    
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Case:1</p>
                       <p className="problem"> Enter a linear equation in one variable of the form aY + b + c = 0</p>
                       <p className="problem">Enter the value of a, b, c respectively: 0 1 1</p>
                       <p className="problem">Value of Y cannot be predicted.</p>  
                   
                       <p className="case">Case:2</p>
                       <p className="problem">Enter a linear equation in one variable of the form aY + b + c = 0</p>
                       <p className="problem"> Enter the value of a, b, c respectively: 1 1 1</p>
                       <p className="problem"> Solution is Y = -2.000000</p>

                       <p className="case">Case:3</p>
                       <p className="problem">Enter a linear equation in one variable of the form aY + b + c = 0</p>
                       <p className="problem"> Enter the value of a, b, c respectively: 1 -2 -1</p>
                       <p className="problem"> Solution is Y = 3.000000</p>
                            
                        
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
                 </div>
             
                
            </div>
        </div>
        )
    }
}

export default NPA1