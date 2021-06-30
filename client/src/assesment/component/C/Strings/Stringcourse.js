import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Stringcourse extends Component {
    render() {
        return (
            <div>
                <ol>
               <li> <Link to= "/c-program-string-palindrome">C Program to Check if a given String is Palindrome</Link> </li>
               <li> <Link to= "/c-program-concatenate-strings">C Program to read two Strings & Concatenate the Strings</Link> </li>
               <li> <Link to= "/c-program-substring-string">C Program to Check if the Substring is present in the given String</Link> </li>
               <li> <Link to= "/c-program-reverse-string-using-recursion-2">C Program to Reverse the String using Recursion</Link></li> 
               <li> <Link to= "/c-program-copy-string-using-recursion">C Program to Copy One String to Another using Recursion</Link></li> 
               <li> <Link to= "/c-program-string-length-using-recursion">C Program to find the Length of the String using Recursion</Link></li>
               <li> <Link to= "/c-program-search-replace-word">C Program to Search a Word & Replace it with the Specified Word</Link></li> 
               <li> <Link to= "/c-program-count-number-vowels-consonants-sentence">C Program to Count the Number of Vowels & Consonants in a Sentence</Link></li> 
                
              

             
               </ol>
            </div>
        )
    }
}

export default Stringcourse