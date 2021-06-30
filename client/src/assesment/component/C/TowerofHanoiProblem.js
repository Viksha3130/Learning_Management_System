import React, { Component } from 'react'
import Style from '../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class TowerofHanoiProblem extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Solve Tower-of-Hanoi Problem using Recursion</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>This C Program uses recursive function & solves the tower of hanoi. The tower of hanoi is a mathematical puzzle. 
                   It consists of threerods, and a number of disks of different sizes which can slideonto any rod.
                    The puzzle starts with the disks in a neat stack in ascending order of size on one rod, 
                   the smallest at the top. We have to obtain the same stack on the third rod.</p>
                   <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                     <p className="case">Output:</p>
                       <p className="problem">Enter the number of disks : 3</p>
                       <p className="problem">The sequence of moves involved in the Tower of Hanoi are :</p>
                       <p className="problem">Move disk 1 from peg A to peg C</p>  
                       <p className="problem">Move disk 2 from peg A to peg B</p>
                       <p className="problem">Move disk 1 from peg C to peg B</p>
                       <p className="problem">Move disk 3 from peg A to peg C</p>
                       <p className="problem">Move disk 1 from peg B to peg A</p>
                       <p className="problem">Move disk 2 from peg B to peg C</p>
                       <p className="problem">Move disk 1 from peg A to peg C</p>
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

export default TowerofHanoiProblem