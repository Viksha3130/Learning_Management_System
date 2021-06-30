import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class SC7 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Convert a Given Number of Days in terms of Years, Weeks & Days</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                <p>This program takes the number of days as input and converts in terms of years, weeks & days.</p>
                 
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Take the number of days as input and store it in variable ndays.</li>
                     <li>For the number of years, divide the input by 365(no of days in a year) and obtain its quotient.Store this in the variable year.</li>
                     <li>For the number of weeks, divide the input by 365 and obtain its remainder.Further divide the remainder by 7(no of days in a week) and obtain its quotient.Store this in the variable week.</li>
                     <li>For the number of days, divide the input by 365 and obtain its remainder.Further divide the remainder by 7(no of days in a week) and obtain its remainder.Store this in the variable days.</li>
                     <li>Print the output and exit.</li>
                     
                     
                   
                 </ol>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     
                 <p className="case">Case:1</p>
                       <p className="problem">Enter the number of days</p>
                       <p className="problem">29</p>
                       <p className="problem">29 is equivalent to 0 years, 4 weeks and 1 days</p>  
                   
                <p className="case">Case:2</p>
                       <p className="problem">Enter the number of days</p>
                       <p className="problem"> 1000</p>
                       <p className="problem">1000 is equivalent to 2 years, 38 weeks and 4 days</p>
                        
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

export default SC7