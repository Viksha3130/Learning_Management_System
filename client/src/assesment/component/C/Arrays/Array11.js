import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array11 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to Find the Number of Elements in an Array</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>C Program finds the number of elements present in the given array.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>Declare an array and define its elements at the time of declaration.</li>
                     <li> Create a variable n, which will store the size of the array, i.e total number of elements present in array.</li>
                     <li> Now, call an inbuilt function sizeof() (from unistd.h library) passing the name of the array as its parameter.</li>
                     <li>  function will return the number of elements present in the array passed to it.</li>
                     <li>Store it in variable n.</li>
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

export default Array11
