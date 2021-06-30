import React, { Component , Fragment } from 'react'
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import summary from '../../quizcomponents/summary.css'

 class Ciosummary extends Component {
     constructor(props){
         super(props);
         this.state = {
             score: 0,
             numberofQuestions : 0,
             numberofAnsweredQuestion : 0 , 
             correctAnswers : 0,
             wrongAnswers : 0,
             hintsUsed : 0,

         };
     }
     componentDidMount(){
         const {state } = this.props.location;
         if(state){
         this.setState(
            {
                score: (state.score / state.numberofQuestions) * 100,
                numberofQuestions : state.numberofQuestions,
                numberofAnsweredQuestion : state.numberofAnsweredQuestion, 
                correctAnswers : state.correctAnswers,
                wrongAnswers : state.wrongAnswers,
                hintsUsed : state.hintsUsed,
   
            }
         );
     }
    }
    render() {
        const { state ,  score} = this.props.location;
        let stats , remark;
        const userScore = this.state.score
        if(userScore <= 30){
            remark = 'You need more practice!';
        } else if(userScore > 30 && userScore <= 50) {
                  remark='Better luck next time';
        } else if (userScore <=70 && userScore > 50){
            remark= ' You can do better';
        } else if (userScore >= 71 && userScore <= 84){
            remark = 'You did great!';
        } else {
            remark ='Well Done';
        }
        
        if(state !== undefined){
            stats=(<Fragment>
                 <div className="tick">
                   <FontAwesomeIcon icon={faCheckCircle} center color="#72B01D"size="4x"></FontAwesomeIcon>
                </div>
                <h1>Congratulations!!</h1>
                <div className="summary">
                   <h4>{remark}</h4>
                   <h2>Your Score : {this.state.score.toFixed(0)} &#37;</h2>
                   <span className="stat ">Total number of questions:</span>
                    <span className="rtg ">{this.state.numberofQuestions}</span><br />

                    <span className="stat ">Number of attempted questions:</span>
                    <span className="rtg ">{this.state.numberofAnsweredQuestion}</span><br />

                    <span className="stat ">Number of Correct Answers:</span>
                    <span className="rtg ">{this.state.correctAnswers}</span><br />

                    <span className="stat ">Number of Wrong Answers:</span>
                    <span className="rtg ">{this.state.wrongAnswers}</span><br />

                    <span className="stat ">Hints Used:</span>
                    <span className="rtg ">{this.state.hintsUsed}</span><br />


                </div>
                <section>
                <button  className="home">
                <Link to  ="/C-course">Back to Home</Link>
                </button>
                          <button className="quizbtn"> 
                          <Link to ="/C-inputoutput" >Take a  Quiz</Link>
                          </button>
                     

                </section>
            </Fragment>
               
            );
        } else {
            stats = (
                <section>
                        <h1 className="no-stats">No Statistics Available </h1>
              
                <button className="home">
                <Link to  ="/C-course" >Back to Home</Link>
                </button>
                          <button className="quizbtn"> 
                          <Link to ="/C-inputoutput">Take a  Quiz</Link>
                          </button>
                     

               
                </section>
            
            );
        }
        return (
            
            <div>
           <Fragment><Helmet><title>Summary</title></Helmet></Fragment>
           {stats}
            </div>
        )
    }
}

export default Ciosummary
