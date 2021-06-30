import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');




 class Array8 extends Component {
   
    render() {
        const code = 'const a = 0;';
 

        return (
        <div>
              <h5>C Program to accept Sorted Array and do Search using Binary Search</h5>
            <div className="containers">
                <div className="row">
                    <div className="col-6 ">
                    <h2>Problem Description</h2>
                 <p>We have to create a C Program which uses Binary search algorithm to predict that the element is present or not in the array.
                    The user has to input a sorted array because binary search works on sorted array.</p>
                 <h2>Problem Solution</h2>
                 <ol>
                     <li>A Binary Search is a quick and efficient method of finding a specific target value from a set of ordered items. 
                       A Binary search is also known as a half-interval search.</li>
                     <li> the element to be searched is denoted by keynum.</li>
                     <li>In order to apply Binary Search, we need to have a sorted array.</li>
                     <li> After sorting the elements in ascending order, 
                       we have applied a binary search by first comparing the keynum with the middle element of the array.</li>
                     <li>If the value of keynum is equal to the middle element of the array, we have simply printed “SEARCH SUCCESSFUL”.</li>
                     <li>If keynum is other than the middle element of the array, we divide the array into two parts one having all the elements 
                       less than the middle element 
                       and the other having all the elements greater than the middle element, and start locating for keynum in the desired part.</li>
                     <li>If keynum is greater than the middle element, the value of low (starting index of the array), will become mid+1 and if it is less than
                        the middle element high (last index of the array), will become mid-1. “mid” is the middle index of the array.</li>
                      <li>When we are modifying the values of low and high, we are basically dividing the array into two halves, and then looking for keynum in respective half.</li>
                      <li>The Best case time complexity of Binary Search is O(1). The only condition for implementing Binary Search is that the array should be sorted.</li>
                 </ol>
                 <h2>Input and Output</h2>
                 <ol>
                   <li>Average Case: When the element to be searched is other than the middle element.</li>
                 <div className="Testcase">
                
                     
                       <p className="problem">If the input array is [ 1 , 2, 3, 4, 5, 6]</p>
                       <p className="problem">and the key to be searched for is 6</p>
                       <p className="problem">then the expected output will be "Search Successful".</p>  
                 </div>

                 <p>Average case time complexity: O(log n).</p>
                 <li>Worst Case: If the element to be searched for is not present in the array.</li>
                 <div className="Testcase">
                
                     
                       <p className="problem">If the input array is [1, 3, 6, 8, 9]</p>
                       <p className="problem">and the key to be searched for is 4,</p>
                       <p className="problem">then the expected output will be "Search Unsuccessful".</p>  
                 </div>

                 <p>Worst case time complexity: O(log n).</p>
                 <li>Best Case: If the element to be searched is the middle element of the array.</li>
                 <div className="Testcase">
                
                     
                       <p className="problem">If the input array is [1, 5, 9]</p>
                       <p className="problem">and the key to be searched is 5,</p>
                       <p className="problem">then the expected output will be "Search Successful".</p>  
                 </div>

                 <p>Best case time complexity: O(1).</p>
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

export default Array8
