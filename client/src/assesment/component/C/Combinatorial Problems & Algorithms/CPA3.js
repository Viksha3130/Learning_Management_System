import React, { Component } from 'react'
import Style from '../../../component/Style.css'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

export class CPA3 extends Component {
    render() {
        return (
        <div>
              <h5>C Program to Search for an Element in a Binary Search Tree</h5>
            <div className="containers">
            <div className="row">
                    <div className="col-6 ">
                 <h2>Problem Description</h2>
                 <p>A binary search tree (BST), sometimes also called an ordered or sorted binary tree, 
                   is a node based binary tree data structure where each node has a comparable key (and an associated value)
                    and satisfies the restriction that the key in any node is larger than the keys in all nodes
                     in that node’s left subtree and smaller than the keys in all nodes in that node’s right sub-tree. 
                     Each node has no more than two child nodes. Each child must either be a leaf node or the root of another 
                     binary search tree. The left sub-tree contains only nodes with keys less than the parent node;
                      the right sub-tree contains only nodes with keys greater than the parent node. 
                      Average search time complexity for BST is O(logn).</p>
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

export default CPA3