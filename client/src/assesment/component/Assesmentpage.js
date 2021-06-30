import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Assesmentpage extends Component {
    render() {
        return (
            <div>
                <ul>
               <li> <Link to= "/C/assesment/course"> C Assesment</Link> </li>
               <li> <Link to= "/C++/assesment/course"> C++ Assesment</Link></li> 
               <li> <Link to= "/Java/assesment/course"> Java Assesment</Link></li> 
                <li> <Link to= "/python/assesment/course"> Python Assesment</Link></li>
                </ul>
            </div>
        )
    }
}

export default  Assesmentpage
