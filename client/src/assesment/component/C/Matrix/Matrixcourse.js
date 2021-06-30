import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Matrixcourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-sum-difference-matrices">C Program to Calculate the Sum & Difference of the Matrices</Link> </li>
               <li> <Link to= "/c-program-matrix-multiplication">C Program to Perform Matrix Multiplication</Link> </li>
               <li> <Link to= "/c-program-check-2-matrices-equal">C Program to Check if 2 Matrices are Equal</Link> </li>
               <li> <Link to= "/c-program-matrix-identity-matrix">C Program to Check if a given Matrix is an Identity Matrix</Link></li> 
               <li> <Link to= "/c-program-sparse-matrix">C Program to Determine if a given Matrix is a Sparse Matrix</Link></li> 
               </ol>
            </div>
        )
    }
}

export default Matrixcourse