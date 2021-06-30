import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class StacksandQueuecourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-stack-implementation">C Program to Implement a Stack</Link> </li>
               <li> <Link to= "/c-program-reverse-stack">C Program to Reverse a Stack</Link> </li>
               <li> <Link to= "/c-program-queue">C Program to Implement a Queue </Link> </li>
               <li> <Link to= "/c-program-priority-queue">C Program to Implement Priority Queue </Link></li> 
               </ol>
            </div>
        )
    }
}

export default StacksandQueuecourse