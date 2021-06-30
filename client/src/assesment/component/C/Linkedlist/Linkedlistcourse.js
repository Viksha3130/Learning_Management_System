import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Linkedlistcourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-create-linked-list-display-elements">C Program to Create a Linked List & Display the Elements in the List</Link> </li>
               <li> <Link to= "/c-program-search-linked-list">C Program to Search for an Element in the Linked List</Link> </li>
               <li> <Link to= "/c-program-display-linked-list">C Program to Display all the Nodes in a Linked List </Link> </li>
               <li> <Link to= "/c-program-linked-list-length">C Program Find the Length of the Linked List</Link></li> 
               <li> <Link to= "/c-program-doubly-linked-list">C Program to Implement a Doubly Linked List & provide Insertion, Deletion & Display Operations</Link></li> 
               <li> <Link to= "/c-program-circular-doubly-linked-list">C Program to Implement Circular Doubly Linked List</Link></li>
               <li> <Link to= "/c-program-illustrate-operations-singly-linked-list">C Program to Illustrate the Operations of Singly Linked List</Link></li> 
               <li> <Link to= "/c-program-implement-circular-single-linked-list">C Program to Demonstrate Circular Single Linked List</Link></li> 
                
              

             
               </ol>
            </div>
        )
    }
}

export default Linkedlistcourse