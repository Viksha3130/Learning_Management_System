import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Quizpage extends Component {
    render() {
        return (
            <div>
                <ul>
                    
                <li> <Link to= "/C-course"> C Quiz</Link></li>   
                <li><Link to= "/C++-course">C++ Quiz</Link></li>
                <li><Link to= "/Java-course">Java Quiz</Link></li>
                <li><Link to= "/Python-course"> Python Quiz</Link></li>
                <li><Link to= "/React-course"> React Quiz</Link></li> 
               <li><Link to= "/Mongodb-course"> Mongodb Quiz</Link></li> 
                    
                </ul>
              
            </div>
        )
    }
}

export default Quizpage
