import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC11 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Find the Biggest of 3 Numbers</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This program takes the 3 numbers and finds the biggest among all.</p>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take the three numbers and store it in the variables num1, num2 and num3 respectively.</li>
                     <li>Firstly check if the num1 is greater than num2.</li>
                     <li> If it is, then check if it is greater than num3.</li>
                     <li>If it is, then print the output as “num1 is the greatest among three”.</li>
                     <li>Otherwise print the ouput as “num3 is the greatest among three”.</li>
                     <li>If the num1 is not greater than num2, then check if num2 is greater than num3.</li>
                     <li> If it is, then print the output as “num2 is the greatest among three”.</li>
                     <li> Otherwise print the output as “num3 is the greatest among three”.</li>
                 </ol>
             
           
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                 <p className="case">Case:1</p>
                       <p className="problem">Enter the values of num1, num2 and num3</p>
                       <p className="problem">6 8 10</p>
                       <p className="problem">num1 = 6  num2 = 8  num3 = 10</p>
                       <p className="problem">num3 is the greatest among three</p>
                       
                   
                <p className="case">Case:2</p>
                       <p className="problem">Enter the values of num1, num2 and num3</p>
                       <p className="problem"> 10 87 99</p>
                       <p className="problem">num1 = 10  num2 = 87  num3 = 99</p>
                       <p className="problem">num3 is the greatest among three</p>       
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

export default SC11