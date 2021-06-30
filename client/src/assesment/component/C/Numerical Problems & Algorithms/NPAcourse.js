import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NPAcourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-solve-linear-equation-one-variable"> C Program to Solve any Linear Equation in One Variable</Link> </li>
               <li> <Link to= "/c-program-find-inverse-matrix"> C Program to Find Inverse of a Matrix</Link> </li>
               <li> <Link to= "/c-program-perform-matrix-multiplication">C Program to Perform Matrix Multiplication</Link> </li>
               <li> <Link to= "/c-program-check-multiplicability-two-matrices">C Program to Check Multiplicability of Two Matrices</Link></li> 
               <li> <Link to= "/c-program-check-matrix-invertible">C Program to Check if a Matrix is Invertible</Link></li> 
               <li> <Link to= "/c-program-generate-randomized-sequence-given-range-numbers">C Program to Generate Randomized Sequence of Given Range of Numbers</Link></li>
               <li> <Link to= "/c-program-find-gcd-lcm-n-numbers"> C Program to Find the GCD and LCM of n Numbers</Link></li>
              
                </ol>
            </div>
        )
    }
}

export default NPAcourse
