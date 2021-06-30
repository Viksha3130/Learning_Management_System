import React ,{ Fragment} from 'react'
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb , faStopwatch} from '@fortawesome/free-solid-svg-icons'
import option from '../../assets/images/option.png'
import answer from '../../assets/images/answer.png'
import hints from '../../assets/images/hints.png'


 const Cpinstruction = () => {
    return (
      <Fragment>
          <Helmet>
              <title>Quiz Instructions</title>
          </Helmet>
          <div className="instructions container">
              <h1>Instructions</h1>
              <p>Ensure you read this guide from start to finish.</p>
              <ul className="browser-default" id="main-list">
                  <li>The quiz has a duration of 15 minutes and ends as soon as your time elapses.</li>
                  <li>Each quiz consists of 20 questions.</li>
                  <li>Every question contains 4 options.
                      <img src={option}alt="Options example"></img>
                  </li>
                  <li>Select the option which best answers the question by clicking(or selecting) it.
                      <img src={answer} alt="Answer example"></img>
                  </li>
                  <li>
                      Each quiz has a 5 hints.
                  </li>
                  <li>
                      Using a hint by clicking the icon
                      <span> <FontAwesomeIcon classname="lifeline icon"
                       icon={faLightbulb} color="#72B01D" cursor="pointer" size="1x"/>
                         </span>
                       
                       
                      will remove one wrong answer leaving two wrong answers and one correct answer.You can use as many hints as possible on a single question.
                      <img src={hints} alt="Hint example"></img>
                  </li>
                  <li>
                      Feel free to quit(or retire from ) the quiz at any time. In that case your score will be revealed afterwards.
                  </li>
                  <li>
                      The timer <span><FontAwesomeIcon className="lifeline icon" icon={faStopwatch} color="#72B01D"size="1x" cursor="pointer"/></span> starts as soon as the quiz loads.
                  </li>
                  <li>
                      Let's do this if you think you've got what it takes?
                  </li>
                  <div>
                      <span className="left"><Link to="/C-course">No,take me back</Link></span>
                      <span className="right"><Link to="/C-pointers">Okay, Let's do this!</Link></span>
                  </div>
                  

              </ul>
          </div>
      </Fragment>
    )
}

export default Cpinstruction;