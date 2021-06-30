import React from 'react';
import Assesmentpage from './assesment/component/Assesmentpage'
import './assesment/assesment.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Pythoncourse from './assesment/component/Python/Pythoncourse'
import Ccourse from './assesment/component/C/Ccourse'
import Cccourse from './assesment/component/C++/Cccourse'
import Javacourse from './assesment/component/Java/Javacourse'

import Sccourse from './assesment/component/C/Simple-C-program/SCcourse'
import SC1 from './assesment/component/C/Simple-C-program/SC1'
import SC2 from './assesment/component/C/Simple-C-program/SC2'
import SC3 from './assesment/component/C/Simple-C-program/SC3'
import SC4 from './assesment/component/C/Simple-C-program/SC4'
import SC5 from './assesment/component/C/Simple-C-program/SC5'
import SC6 from './assesment/component/C/Simple-C-program/SC6'
import SC7 from './assesment/component/C/Simple-C-program/SC7'
import SC8 from './assesment/component/C/Simple-C-program/SC8'
import SC9 from './assesment/component/C/Simple-C-program/SC9'
import SC10 from './assesment/component/C/Simple-C-program/SC10'
import SC11 from './assesment/component/C/Simple-C-program/SC11'
import SC12 from './assesment/component/C/Simple-C-program/SC12'
import SC13 from './assesment/component/C/Simple-C-program/SC13'
import SC14 from './assesment/component/C/Simple-C-program/SC14'
import SC15 from './assesment/component/C/Simple-C-program/SC15'
import SC16 from './assesment/component/C/Simple-C-program/SC16'
import SC17 from './assesment/component/C/Simple-C-program/SC17'
import SC18 from './assesment/component/C/Simple-C-program/SC18'

import NPAcourse from './assesment/component/C/Numerical Problems & Algorithms/NPAcourse'
import NPA1 from './assesment/component/C/Numerical Problems & Algorithms/NPA1'
import NPA2 from './assesment/component/C/Numerical Problems & Algorithms/NPA2'
import NPA3 from './assesment/component/C/Numerical Problems & Algorithms/NPA3'
import NPA4 from './assesment/component/C/Numerical Problems & Algorithms/NPA4'
import NPA5 from './assesment/component/C/Numerical Problems & Algorithms/NPA5'
import NPA6 from './assesment/component/C/Numerical Problems & Algorithms/NPA6'
import NPA7 from './assesment/component/C/Numerical Problems & Algorithms/NPA7'

import CPAcourse from './assesment/component/C/Combinatorial Problems & Algorithms/CPAcourse'
import CPA1 from './assesment/component/C/Combinatorial Problems & Algorithms/CPA1'
import CPA2 from './assesment/component/C/Combinatorial Problems & Algorithms/CPA2'
import CPA3 from './assesment/component/C/Combinatorial Problems & Algorithms/CPA3'
import CPA4 from './assesment/component/C/Combinatorial Problems & Algorithms/CPA4'
 
import Datastrcture from './assesment/component/C/Datastructure'
import TowerofHanoiProblem from './assesment/component/C/TowerofHanoiProblem'

import Arraycourse from './assesment/component/C/Arrays/Arraycourse' 
import Array1 from './assesment/component/C/Arrays/Array1'
import Array2 from './assesment/component/C/Arrays/Array2'
import Array3 from './assesment/component/C/Arrays/Array3'
import Array4 from './assesment/component/C/Arrays/Array4'
import Array5 from './assesment/component/C/Arrays/Array5'
import Array6 from './assesment/component/C/Arrays/Array6'
import Array7 from './assesment/component/C/Arrays/Array7'
import Array8 from './assesment/component/C/Arrays/Array8'
import Array9 from './assesment/component/C/Arrays/Array9'
import Array10 from './assesment/component/C/Arrays/Array10'
import Array11 from './assesment/component/C/Arrays/Array11'

import Matrixcourse from './assesment/component/C/Matrix/Matrixcourse'
import Matrix1 from './assesment/component/C/Matrix/Matrix1'
import Matrix2 from './assesment/component/C/Matrix/Matrix2'
import Matrix3 from './assesment/component/C/Matrix/Matrix3'
import Matrix4 from './assesment/component/C/Matrix/Matrix4'
import Matrix5 from './assesment/component/C/Matrix/Matrix5'
 
import Stringcourse from './assesment/component/C/Strings/Stringcourse'
import String1 from './assesment/component/C/Strings/String1'
import String2 from './assesment/component/C/Strings/String2'
import String3 from './assesment/component/C/Strings/String3'
import String4 from './assesment/component/C/Strings/String4'
import String5 from './assesment/component/C/Strings/String5'
import String6 from './assesment/component/C/Strings/String6'
import String7 from './assesment/component/C/Strings/String7'
import String8 from './assesment/component/C/Strings/String8'

import Linkedlistcourse from './assesment/component/C/Linkedlist/Linkedlistcourse'
import Linkedlist1 from './assesment/component/C/Linkedlist/Linkedlist1'
import Linkedlist2 from './assesment/component/C/Linkedlist/Linkedlist2'
import Linkedlist3 from './assesment/component/C/Linkedlist/Linkedlist3'
import Linkedlist4 from './assesment/component/C/Linkedlist/Linkedlist4'
import Linkedlist5 from './assesment/component/C/Linkedlist/Linkedlist5'
import Linkedlist6 from './assesment/component/C/Linkedlist/Linkedlist6'
import Linkedlist7 from './assesment/component/C/Linkedlist/Linkedlist7'
import Linkedlist8 from './assesment/component/C/Linkedlist/Linkedlist8'
 
import StacksandQueuecourse from './assesment/component/C/StacksandQueue/StacksandQueuecourse'
import SQ1 from './assesment/component/C/StacksandQueue/SQ1'
import SQ2 from './assesment/component/C/StacksandQueue/SQ2'
import SQ3 from './assesment/component/C/StacksandQueue/SQ3'
import SQ4 from './assesment/component/C/StacksandQueue/SQ4'

import Mathcourse from './assesment/component/C/Math/Mathcourse'
import M1 from './assesment/component/C/Math/M1'
import M2 from './assesment/component/C/Math/M2'
import M3 from './assesment/component/C/Math/M3'
import M4 from './assesment/component/C/Math/M4'
import M5 from './assesment/component/C/Math/M5'
import M6 from './assesment/component/C/Math/M6'
import M7 from './assesment/component/C/Math/M7'
import M8 from './assesment/component/C/Math/M8'
import M9 from './assesment/component/C/Math/M9'
import M10 from './assesment/component/C/Math/M10'
import M11 from './assesment/component/C/Math/M11'
import M12 from './assesment/component/C/Math/M12'
import M13 from './assesment/component/C/Math/M13'
import M14 from './assesment/component/C/Math/M14'
import M15 from './assesment/component/C/Math/M15'


const App = () =>{
  return (
    <div className="App">
      <Router>
        <Route path="/Assesment-page" exact component={Assesmentpage}></Route>

        <Route path="/Python/assesment/course" exact component={Pythoncourse}></Route>
        <Route path="/C/assesment/course" exact component={Ccourse}></Route>
        <Route path="/C++/assesment/course" exact component={Cccourse}></Route>
        <Route path="/Java/assesment/course" exact component={Javacourse}></Route>
     
        <Route path="/Simple-C-Program-course" exact component={Sccourse}></Route>
        <Route path="/c-program-integer-positive-or-negative" exact component={SC1}></Route>
        <Route path="/c-program-two-integers-equal" exact component={SC2}></Route>
        <Route path="/c-program-sum-odd-even-numbers" exact component={SC3}></Route>
        <Route path="/c-program-number-divisible-by-5" exact component={SC4}></Route>
        <Route path="/c-program-swap-values" exact component={SC5}></Route>
        <Route path="/c-program-binary-number-into-decimal" exact component={SC6}></Route>
        <Route path="/c-program-days-in-years-weeks-days" exact component={SC7}></Route>
        <Route path="/c-program-sum-of-digits-using-recursion" exact component={SC8}></Route>
        <Route path="/c-program-reverse-number-recursion" exact component={SC9}></Route>
        <Route path="/c-program-prime-number-using-recursion" exact component={SC10}></Route>
        <Route path="/c-program-biggest-3-numbers" exact component={SC11}></Route>
        <Route path="/c-program-reverse-number-palindrome" exact component={SC12}></Route>
        <Route path="/c-program-armstrong-number" exact component={SC13}></Route>
        <Route path="/c-program-fibonacci-series" exact component={SC14}></Route>
        <Route path="/c-program-check-year-leap" exact component={SC15}></Route>
        <Route path="/c-program-print-statement-without-semicolon" exact component={SC16}></Route>
        <Route path="/c-program-pass-by-reference" exact component={SC17}></Route>
        <Route path="/c-program-pass-by-value" exact component={SC18}></Route>

        <Route path="/c-programming-numerical-problems-algorithms" exact component={NPAcourse}></Route>
        <Route path="/c-program-solve-linear-equation-one-variable" exact component={NPA1}></Route>
        <Route path="/c-program-find-inverse-matrix" exact component={NPA2}></Route>
        <Route path="/c-program-perform-matrix-multiplication" exact component={NPA3}></Route>
        <Route path="/c-program-check-multiplicability-two-matrices" exact component={NPA4}></Route>
        <Route path="/c-program-check-matrix-invertible" exact component={NPA5}></Route>
        <Route path="/c-program-generate-randomized-sequence-given-range-numbers" exact component={NPA6}></Route>
        <Route path="/c-program-find-gcd-lcm-n-numbers" exact component={NPA7}></Route>

        <Route path="/c-programming-combinatorial-problems-algorithms" exact component={CPAcourse}></Route>
        <Route path="/c-program-implement-quick-sort-using-randomization" exact component={CPA1}></Route>
        <Route path="/c-program-implement-merge-sort-linked-list" exact component={CPA2}></Route>
        <Route path="/c-program-search-element-binary-search-tree" exact component={CPA3}></Route>
        <Route path="/c-program-find-maximum-element-array-binary-search" exact component={CPA4}></Route>

        <Route path="/c-programming-data-structures" exact component={Datastrcture}></Route>
        <Route path="/c-program-tower-of-hanoi-using-recursion" exact component={TowerofHanoiProblem}></Route>


        <Route path="/c-programming-arrays" exact component={Arraycourse}></Route>
        <Route path="/c-program-sum-average-array" exact component={Array1}></Route>
        <Route path="/c-program-compute-sum-two-one-dimensional-arrays-using-malloc" exact component={Array2}></Route>
        <Route path="/c-program-find-largest-number-array" exact component={Array3}></Route>
        <Route path="/c-program-insert-element-specified-position-array" exact component={Array4}></Route>
        <Route path="/c-program-delete-specified-integer-array" exact component={Array5}></Route>
        <Route path="/c-program-sorting-bubble-sort" exact component={Array6}></Route>
        <Route path="/c-program-merge-sort-2-arrays" exact component={Array7}></Route>
        <Route path="/c-program-accept-sorted-array-search-using-binary-search" exact component={Array8}></Route>
        <Route path="/c-program-queue-using-array" exact component={Array9}></Route>
        <Route path="/c-program-two-stacks-single-array" exact component={Array10}></Route>
        <Route path="/c-program-number-elements-array/" exact component={Array11}></Route>

        <Route path="/c-programming-matrix" exact component={Matrixcourse}></Route>
        <Route path="/c-program-sum-difference-matrices" exact component={Matrix1}></Route>
        <Route path="/c-program-matrix-multiplication" exact component={Matrix2}></Route>
        <Route path="/c-program-check-2-matrices-equal" exact component={Matrix3}></Route>
        <Route path="/c-program-matrix-identity-matrix" exact component={Matrix4}></Route>
        <Route path="/c-program-sparse-matrix" exact component={Matrix5}></Route>
      
        <Route path="/c-programming-strings" exact component={Stringcourse}></Route>
        <Route path="/c-program-string-palindrome" exact component={String1}></Route>
        <Route path="/c-program-concatenate-strings" exact component={String2}></Route>
        <Route path="/c-program-substring-string" exact component={String3}></Route>
        <Route path="/c-program-reverse-string-using-recursion-2" exact component={String4}></Route>
        <Route path="/c-program-copy-string-using-recursion" exact component={String5}></Route>
        <Route path="/c-program-string-length-using-recursion" exact component={String6}></Route>
        <Route path="/c-program-search-replace-word" exact component={String7}></Route>
        <Route path="/c-program-count-number-vowels-consonants-sentence" exact component={String8}></Route>


        <Route path="/c-programming-linked-list" exact component={Linkedlistcourse}></Route>
        <Route path="/c-program-create-linked-list-display-elements" exact component={Linkedlist1}></Route>
        <Route path="/c-program-search-linked-list" exact component={Linkedlist2}></Route>
        <Route path="/c-program-display-linked-list" exact component={Linkedlist3}></Route>
        <Route path="/c-program-linked-list-length" exact component={Linkedlist4}></Route>
        <Route path="/c-program-doubly-linked-list" exact component={Linkedlist5}></Route>
        <Route path="/c-program-circular-doubly-linked-list" exact component={Linkedlist6}></Route>
        <Route path="/c-program-illustrate-operations-singly-linked-list" exact component={Linkedlist7}></Route>
        <Route path="/c-program-implement-circular-single-linked-list" exact component={Linkedlist8}></Route>
       
        <Route path="/c-programming-stacks" exact component={StacksandQueuecourse}></Route>
        <Route path="/c-program-stack-implementation" exact component={SQ1}></Route>
        <Route path="/c-program-reverse-stack" exact component={SQ2}></Route>
        <Route path="/c-program-queue" exact component={SQ3}></Route>
        <Route path="/c-program-priority-queue" exact component={SQ4}></Route>
        
        <Route path="/c-programming-mathematical-functions" exact component={Mathcourse}></Route>
        <Route path="/c-program-simple-interest" exact component={M1}></Route>
        <Route path="/c-program-roots-quadratic-equation" exact component={M2}></Route>
        <Route path="/c-program-simulate-calculator" exact component={M3}></Route>
        <Route path="/c-program-generate-fibonacci-series" exact component={M4}></Route>
        <Route path="/c-program-gcd-lcm-two-integers" exact component={M5}></Route>
        <Route path="/c-program-hcf" exact component={M6}></Route>
        <Route path="/c-program-find-sum-first-n-natural-numbers" exact component={M7}></Route>
        <Route path="/c-program-print-factorial-given-number" exact component={M8}></Route>
        <Route path="/c-program-ncr" exact component={M9}></Route>
        <Route path="/c-program-area-triangle" exact component={M10}></Route>
        <Route path="/c-program-calculate-area-circle" exact component={M11}></Route>
        <Route path="/c-program-calculate-npr" exact component={M12}></Route>
        <Route path="/c-program-surface-area-volume-cube" exact component={M13}></Route>
        <Route path="/c-program-volume-surface-area-cuboids" exact component={M14}></Route>
        <Route path="/c-program-perimeter-circle-rectangle-triangle" exact component={M15}></Route>
        
        
        
        
        

      
      </Router>
      
    
    </div>
  );
}

export default App;
