import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Mathcourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-simple-interest">C Program to Calculate the Simple Interest</Link> </li>
               <li> <Link to= "/c-program-roots-quadratic-equation">C Program to Find out the Roots of a Quadratic Equation</Link> </li>
               <li> <Link to= "/c-program-simulate-calculator">C Program to Simulate a Simple Calculator</Link> </li>
               <li> <Link to= "/c-program-generate-fibonacci-series">C Program to Generate Fibonacci Series</Link></li> 
               <li> <Link to= "/c-program-gcd-lcm-two-integers">C Program to Find the GCD and LCM of Two Integers</Link></li> 
               <li> <Link to= "/c-program-hcf">C Program to find HCF of a give Number</Link></li>
               <li> <Link to= "/c-program-find-sum-first-n-natural-numbers">C Program to Find the Sum of First N Natural Numbers</Link></li> 
               <li> <Link to= "/c-program-print-factorial-given-number">C Program to Print the Factorial of a given Number</Link></li> 
               <li> <Link to= "/c-program-ncr">C program to Calculate the value of nCr</Link></li>  
               <li> <Link to= "/c-program-area-triangle">C Program to Calculate the Area of a Triangle</Link></li> 
               <li> <Link to= "/c-program-calculate-area-circle">C Program to Calculate the Area of a Circle</Link></li> 
               <li> <Link to= "/c-program-calculate-npr">C Program to Calculate the Value of nPr</Link></li>
               <li> <Link to= "/c-program-surface-area-volume-cube">C Program to Compute the Surface Area & Volume of a Cube</Link></li>
               <li> <Link to= "/c-program-volume-surface-area-cuboids">C Program to Find the Volume and Surface Area of Cuboids</Link></li>
               <li> <Link to= "/c-program-perimeter-circle-rectangle-triangle">C Program to Find the Perimeter of a Circle, Rectangle and Triangle</Link></li> 
               </ol>
            </div>
        )
    }
}

export default Mathcourse