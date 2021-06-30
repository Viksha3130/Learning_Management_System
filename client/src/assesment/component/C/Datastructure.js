import React, { Component } from 'react'
import Style from '../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class Datastructure extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Implement Hash Tables</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>A hash table is a data structure used to implement an associative array, 
                    a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots.
                    This program will implement a hash table by putting each element in a particular index of hash table array.</p>
                    <h2>Problem Solution</h2>
                 <ol>
                     <li>Create an array of structure, data (i.e a hash table).</li>
                     <li>Take a key to be stored in hash table as input.</li>
                     <li>Corresponding to the key, an index will be generated.</li>
                     <li> In case of absence of data in that index of array, create one and insert the data item (key and value) into it and increment the size of hash table.</li>
                     <li>In case the data already exists, the new data cannot be inserted if the already present data does not match given key.</li>
                     <li>To display all the elements of hash table, data at each index is extracted and elements (key and value) are read and printed.</li>
                     <li>To remove a key from hash table, we will first calculate its index and extract its data, delete the key in case it matches the given key.</li>
                     <li> Exit</li>
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
                </div>
             
                
            </div>
        </div>
        )
    }
}

export default Datastructure