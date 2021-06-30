import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class CPAcourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-implement-quick-sort-using-randomization">C Program to Implement Quick Sort Using Randomization</Link> </li>
               <li> <Link to= "/c-program-implement-merge-sort-linked-list">C Program to Implement Merge Sort Algorithm on Linked List</Link> </li>
               <li> <Link to= "/c-program-search-element-binary-search-tree">C Program to Search for an Element in a Binary Search Tree</Link> </li>
               <li> <Link to= "/c-program-find-maximum-element-array-binary-search">C Program to Find Maximum Element in an Array using Binary Search</Link></li> 
              
                </ol>
            </div>
        )
    }
}

export default CPAcourse