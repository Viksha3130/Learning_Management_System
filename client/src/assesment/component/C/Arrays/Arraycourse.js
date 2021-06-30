import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Arraycourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-sum-average-array"> C Program to Calculate Sum & Average of an Array</Link> </li>
               <li> <Link to= "/c-program-compute-sum-two-one-dimensional-arrays-using-malloc"> C Program to Compute the Sum of two One-Dimensional Arrays using Malloc</Link> </li>
               <li> <Link to= "/c-program-find-largest-number-array">C Program to Find the Largest Number in an Array</Link> </li>
               <li> <Link to= "/c-program-insert-element-specified-position-array"> C Program to Insert an Element in a Specified Position in a given Array</Link></li> 
               <li> <Link to= "/c-program-delete-specified-integer-array">C Program to Delete the Specified Integer from an Array</Link></li> 
               <li> <Link to= "/c-program-sorting-bubble-sort"> C Program to Sort N Numbers in Ascending Order using Bubble Sort</Link></li>
               <li> <Link to= "/c-program-merge-sort-2-arrays"> C Program to Merge and Sort Elements of 2 different Arrays</Link></li>
               <li> <Link to= "/c-program-accept-sorted-array-search-using-binary-search"> C Program to accept Sorted Array and do Search using Binary Search</Link></li>
               <li> <Link to= "/c-program-queue-using-array"> C Program to Implement a Queue using an Array</Link></li>
               <li> <Link to= "/c-program-two-stacks-single-array">C Program to Implement two Stacks using a Single Array & Check for Overflow & Underflow</Link></li>
               <li> <Link to= "/c-program-number-elements-array/">C Program to Find the Number of Elements in an Array</Link></li>
                </ol>
            </div>
        )
    }
}

export default Arraycourse
