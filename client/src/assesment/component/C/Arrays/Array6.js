import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array6 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Sort N Numbers in Ascending Order using Bubble Sort</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>This C Program sorts the numbers in ascending order using bubble sort. 
                   Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, 
                   comparing each pair of adjacent items and 
                   swapping them if they are in the wrong order. Here we need to sort a number in ascending order.</p>
                 <h2>Runtime Test Cases</h2>
                 <div className="Testcase">
                
                    
                 <p className="case">Output:</p>
                     <p className="problem">Enter a number of elements : 6</p>
                       <p className="problem">Enter the elements</p>
                       <p className="problem">23
45
67
89
12
34</p>  
                       <p className="problem">Input array elements are</p>
                       <p className="problem">23
45
67
89
12
34</p>  
                       <p className="problem">Sorted array is...</p>
                       <p className="problem">12
23
34
45
67
89</p>
                            
                        

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

export default Array6
