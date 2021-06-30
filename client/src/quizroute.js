import React from 'react';
import Quizpage from './quiz/quizcomponents/Quizpage'
import './quiz/quiz.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'

import Pythoncourse from './quiz/python/Pythoncourse'
import Ccourse from './quiz/C/Ccourse'
import CCcourse from './quiz/C++/CCcourse'
import Javacourse from './quiz/Java/Javacourse'
import Mongodbcourse from './quiz/Mongodb/Mongodbcourse'
import Reactcourse from './quiz/React/Reactcourse'



import Pythoninstruction from './quiz/python/Pythonoperator/Pythoninstruction'
import Pythonoperator from './quiz/python/Pythonoperator/Pythonoperator'
import Pythonsummary from './quiz/python/Pythonoperator/Pythonsummary'



import Pythoncontrolstructure from './quiz/python/Pythoncontrolstructures/Pythoncontrolstructure'
import Pythoncsinstruction from './quiz/python/Pythoncontrolstructures/Pythoncsinstruction'
import Pythoncssummary from './quiz/python/Pythoncontrolstructures/Pythoncssummary'

import Pythonfunctioninstruction from './quiz/python/Pythonfunction/Pythonfunctioninstruction'
import Pythonfunction from './quiz/python/Pythonfunction/Pythonfunction'
import Pythonfsummary from './quiz/python/Pythonfunction/Pythonfsummary'

import Pythonfunction2instruction from './quiz/python/Pythonfunctions2/Pythonfunction2instruction'
import Pythonfunction2 from './quiz/python/Pythonfunctions2/Pythonfunction2'
import Pythonf2summary from './quiz/python/Pythonfunctions2/Pythonf2summary'

import Cinstruction from './quiz/C/DataTypes/Cinstruction'
import Cdatatype from './quiz/C/DataTypes/Cdatatype'
import Cdatatypesummary from './quiz/C/DataTypes/Cdatatypesummary'

import Ccfinstruction from './quiz/C/Controlflow/Ccfinstruction'
import Ccontrolflow from './quiz/C/Controlflow/Ccontrolflow'
import Ccfsummary from './quiz/C/Controlflow/Ccfsummary'

import Cfunctioninstruction from './quiz/C/CFunctions/Cfunctioninstruction'
import Cfunction from './quiz/C/CFunctions/Cfunction'
import Cfsummary from './quiz/C/CFunctions/Cfsummary'

import Cprogramstructure from './quiz/C/ProgramStructure/Cprogramstructure'
import Cpsinstruction from './quiz/C/ProgramStructure/Cpsinstruction'
import Cpssummary from './quiz/C/ProgramStructure/Cpssummary'

import Cpinstruction from './quiz/C/Pointers/Cpinstruction'
import Cpointers from './quiz/C/Pointers/Cpointers'
import Cpsummary from './quiz/C/Pointers/Cpsummary'

import Csuinstruction from './quiz/C/Structures and Unions/Csuinstruction'
import Cstructure from './quiz/C/Structures and Unions/Cstructure'
import Csusummary from './quiz/C/Structures and Unions/Csusummary'

import Cioinstruction from './quiz/C/Input and Output/Cioinstruction'
import Cinputoutput from './quiz/C/Input and Output/Cinputoutput'
import Ciosummary from './quiz/C/Input and Output/Ciosummary'



function quizroute() {
  return (
    <div className="App">
      <Router>
        <Route path="/Quizpage" exact component={Quizpage}></Route>
        <Route path="/C-course" exact component={Ccourse}></Route>
        <Route path="/C++-course" exact component={CCcourse}></Route>
        <Route path="/Java-course" exact component={Javacourse}></Route>
        <Route path="/python-course" exact component={Pythoncourse}></Route>
        <Route path="/React-course" exact component={Reactcourse}></Route>
        <Route path="/Mongodb-course" exact component={Mongodbcourse}></Route>
        
        
        <Route path="/python-instruction" exact  component={Pythoninstruction}></Route>
        <Route path="/python-operator" exact  component={Pythonoperator}></Route>
        <Route path="/Python-summary" exact component={Pythonsummary}></Route>
  
        <Route path="/Python/cs-instruction" exact component={Pythoncsinstruction}></Route>
        <Route path="/Python-controlstructure" exact component={Pythoncontrolstructure}></Route>
        <Route path="/Python/cs-summary" exact component={Pythoncssummary}></Route>

        <Route path="/Python/function-instruction" exact component={Pythonfunctioninstruction}></Route>
        <Route path="/Python-function" exact component={Pythonfunction}></Route>
        <Route path="/Python/f-summary" exact component={Pythonfsummary}></Route>
        
        <Route path="/Python/function2-instruction" exact component={Pythonfunction2instruction}></Route>
        <Route path="/Python-function2" exact component={Pythonfunction2}></Route>
        <Route path="/Python/f2-summary" exact component={Pythonf2summary}></Route>

        <Route path="/C-instruction" exact component={Cinstruction}></Route>
        <Route path="/C-datatype" exact component={Cdatatype}></Route>
        <Route path="/C/datatype-summary" exact component={Cdatatypesummary}></Route>

        
        <Route path="/C/cf-instruction" exact component={Ccfinstruction}></Route>
        <Route path="/C-controlflow" exact component={Ccontrolflow}></Route>
        <Route path="/C/cf-summary" exact component={Ccfsummary}></Route>
        
        <Route path="/C/function-instruction" exact component={Cfunctioninstruction}></Route>
        <Route path="/C-function" exact component={Cfunction}></Route>
        <Route path="/C/f-summary" exact component={Cfsummary}></Route>

        <Route path="/C/ps-instruction" exact component={Cpsinstruction}></Route>
        <Route path="/C-programstructure" exact component={Cprogramstructure}></Route>
        <Route path="/C/ps-summary" exact component={Cpssummary}></Route>
      
        <Route path="/C/p-instruction" exact component={Cpinstruction}></Route>
        <Route path="/C-pointers" exact component={Cpointers}></Route>
        <Route path="/C/p-summary" exact component={Cpsummary}></Route>

        <Route path="/C/su-instruction" exact component={Csuinstruction}></Route>
        <Route path="/C-structure" exact component={Cstructure}></Route>
        <Route path="/C/su-summary" exact component={Csusummary}></Route>

        <Route path="/C/io-instruction" exact component={Cioinstruction}></Route>
        <Route path="/C-inputoutput" exact component={Cinputoutput}></Route>
        <Route path="/C/io-summary" exact component={Ciosummary}></Route>
      
    </Router>
    </div>
  );
}

export default quizroute;
