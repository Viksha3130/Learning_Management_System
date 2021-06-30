import React, { Component, Fragment } from 'react'
import {Helmet} from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb , faStopwatch , faAngleDoubleLeft , faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import Quizstyle from '../../quizcomponents/Quizstyle.css'
import csuquestions from './csuquestions.json'
import isEmpty from '../../utils/is-empty'
import M from 'materialize-css'
import correctNotification from '../../assets/audio/correctanswer.mp3'
import buttonsound from '../../assets/audio/button-option.mp3'
import wrongNotification from '../../assets/audio/wrong.mp3'
import classNames from 'classnames/bind';

 class Cstructure extends Component {
     constructor(props){
         super(props);
         this.state = {
            csuquestions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion:{},
            answer:'',
            numberofQuestions:0,
            numberofAnsweredQuestion:0,
            currentQuestionIndex:0,
            score:0,
            correctAnswers:0,
            wrongAnswers:0,
            hints:5,
            nextButtonDisabled : false ,
            previousButtonDisabled : true ,
            previousRandomNumbers:[],
            time:{}
         };
         this.interval = null;
         this.correctSound = React.createRef();
         this.wrongSound = React.createRef();
         this.buttonSound =React.createRef();
     }

     componentDidMount () {
         const {cpsquestions , currentQuestion , nextQuestion , previousQuestion } = this.state;
         this.displayQuestions(csuquestions ,currentQuestion , nextQuestion , previousQuestion);
         this.startTimer();
     }
     componentWillUnmount (){
         clearInterval(this.interval);
     }
     displayQuestions =(
         csuquestions = this.state.csuquestions ,  
         currentQuestion, nextQuestion , previousQuestion
        ) => {
            let{ currentQuestionIndex} = this.state;
            if(!isEmpty(this.state.csuquestions)){
                csuquestions = this.state.csuquestions;
                currentQuestion = csuquestions[currentQuestionIndex];
                nextQuestion = csuquestions[currentQuestionIndex + 1];
                previousQuestion = csuquestions[ currentQuestionIndex - 1];
                const answer = currentQuestion.answer;
                this.setState({
                        currentQuestion , 
                        nextQuestion,
                        previousQuestion,
                        numberofQuestions:csuquestions.length,
                        answer,
                        previousRandomNumbers: []
                } , () => {
                    this.showOptions();
                    this.handleDisableButton();
                });
            }
        };
        handleOptionClick = (e) => {
           if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
               setTimeout( () => {
                this.correctSound.current.play();

               } , 500);
              
               this.correctAnswers();
           } else{
            setTimeout( () => {
                
              this.wrongSound.current.play();
               } , 500);
           
               this.wrongAnswers();
           }
        }
        handleNextButtonClick = () => {
            this.playButtonsound();
            if(this.state.nextQuestion !== undefined){
                 this.setState(prevState => ({
          currentQuestionIndex : prevState.currentQuestionIndex + 1
                 }), () => {
                     this.displayQuestions(this.state.state , this.state.currentQuestion, this.state.nextQuestion , this.state.previousQuestion);
                 });
            }
        };
        handlePreviousButtonClick = () => {
            this.playButtonsound();
            if(this.state.previousQuestion !== undefined){
                 this.setState(prevState => ({
          currentQuestionIndex : prevState.currentQuestionIndex - 1
                 }), () => {
                     this.displayQuestions(this.state.state , this.state.currentQuestion, this.state.nextQuestion , this.state.previousQuestion);
                 });
            }
        };
        handleQuitButtonClick= () => {
                 this.playButtonsound();
             
                if(window.confirm('Are you sure you want to quit?')){
                    this.props.history.push('/C-course');

                 }
        };
        handleButtonClick =(e) => {
            switch(e.target.id) { 
                case 'previous-button':
                    this.handlePreviousButtonClick();
                    break;

                case 'next-button':
                      this.handleNextButtonClick();
                      break;

                      case 'quit-button':
                          this.handleQuitButtonClick();
                          break;

                          
                default:
                     break;
            }
            
        };
        playButtonsound =() => {
            this.buttonSound.current.play();
        };
        correctAnswers = () => {
            M.toast({
                html : 'Correct Answer!',
                classes : 'toast-valid' , 
                displayLength : 1500
            });
            this.setState(prevState => ({
                score :  prevState.score + 1,
                correctAnswers : prevState.correctAnswers + 1,
                currentQuestionIndex : prevState.currentQuestionIndex + 1,
                numberofAnsweredQuestion : prevState.numberofAnsweredQuestion + 1
            }) , () => {
                if(this.state.nextQuestion === undefined){
                    this.endGame();
                } else {
                    this.displayQuestions(this.state.csuquestions , this.state.currentQuestion , this.state.nextQuestion , this.state.previousQuestion);
                }
                
            });
             
        }
        wrongAnswers = () => {
            navigator.vibrate(1000);
            M.toast({
                html : 'Wrong Answer!',
                classes : 'toast-invalid' , 
                displayLength : 1500
            });
            this.setState(prevState => ({
                  wrongAnswers : prevState.wrongAnswers + 1,
                  currentQuestionIndex: prevState.currentQuestionIndex +1 ,
                  numberofAnsweredQuestion: prevState.numberofAnsweredQuestion +1
            }) , () => {
                if(this.state.nextQuestion === undefined){
                    this.endGame();
                } else {
                    this.displayQuestions(this.state.csuquestions , this.state.currentQuestion , this.state.nextQuestion , this.state.previousQuestion);
                }
              
            });
             
        }
        showOptions =() => {
            const options = Array.from(document.querySelectorAll('.option'));
            options.forEach(option => {
                option.style.visibility = 'visible';
            });
        }

        handleHints = () => {
            if(this.state.hints > 0){
                const options = Array.from(document.querySelectorAll('.option'));
                let indexofAnswer;
    
                options.forEach((option , index) => {
                    if(option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                        indexofAnswer = index;
                    }
                });
                 while( true) {
                     const randomNumber = Math.round(Math.random() * 3);
                     if(randomNumber !== indexofAnswer && !this.state.previousRandomNumbers.includes(randomNumber)){
                         options.forEach((option , index) => {
                             if(index === randomNumber) {
                                 option.style.visibility = 'hidden';
                                 this.setState((prevState) =>({
                                    hints: prevState.hints  - 1,
                                    previousRandomNumbers:prevState.previousRandomNumbers.concat(randomNumber)
                                }));
                            }
                             });
                           break; 
                     }
                     if(this.state.previousRandomNumbers.length>=3) break;
                    }
            }

            }
            startTimer = () => {
                const countDownTime = Date.now() + 120000;
                this.interval = setInterval(() => {
                    const now = new Date();
                    const distance = countDownTime - now;

                    const minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60))/ 1000);
                    if(distance< 0){
                        clearInterval(this.interval);
                        this.setState({
                            time :{
                                minutes : 0,
                                seconds: 0
                            }
                        } , () => {
                          this.endGame();
                        });
                    } else {
                        this.setState({
                            time : {
                                minutes,
                                seconds
                            }
                        });
                    }
                },1000);
            }
           handleDisableButton = () => {
               if(this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0){
                   this.setState({
                       previousButtonDisabled : true
                   });
               } else {
                this.setState({
                    previousButtonDisabled : false
                });

               }

               if(this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberofQuestions){
                this.setState({
                    nextButtonDisabled : true
                });
            } else {
             this.setState({
                 nextButtonDisabled : false
             });

            }
           }
           endGame = () => {
               alert('Quiz has ended!');
               const {state} = this;
               const playStats = {
                   score: state.score ,
                   numberofQuestions : state.numberofQuestions ,
                   numberofAnsweredQuestion : state.correctAnswers + state.wrongAnswers,
                   correctAnswers: state.correctAnswers ,
                   wrongAnswers : state.wrongAnswers ,
                   hintsUsed : 5 - state.hints
               };
              
               setTimeout(() => {
                  this.props.history.push('/C/su-summary' , playStats) 
               }, 1000);
           }

    render() {
        const {
            currentQuestion , 
            currentQuestionIndex ,
             numberofQuestions ,
              hints,
            time} = this.state

        return (
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <Fragment>
                    <audio ref={this.correctSound} src={correctNotification}></audio>
                    <audio ref={this.wrongSound} src={wrongNotification}></audio>
                    <audio ref={this.buttonSound} src={buttonsound}></audio>
                </Fragment>
                <div className="questions">
                    
                    <div className="lifeline-container">
                        <p>
                        <span onClick={this.handleHints} > <FontAwesomeIcon className="lifeline-bulb icon"
                       icon={faLightbulb} color="#72B01D" cursor="pointer" size="2x"/>   </span>
                        <span  className="lifeline rgtfont" >{hints}</span>
                        </p>
                    </div>
                    <div> 
                        <p>
                            <span className="left">{currentQuestionIndex + 1} of {numberofQuestions}</span>
                        
                         <span className="right"><FontAwesomeIcon className="lifeline-timer icon" icon={faStopwatch} color="#72B01D"size="2x"/> 
        <span className="rgtfont">{time.minutes}: {time.seconds}</span>  </span>
                        </p>
                        </div>
                    <h5>{currentQuestion.question}</h5>
                    <h5>{currentQuestion.question1}</h5>
                    <h5>{currentQuestion.question2}</h5>
                    <h5>{currentQuestion.question3}</h5>
                    <h5>{currentQuestion.question4}</h5>
                    <div className="options-container">
                          <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                          <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                    </div>
                    <div className="options-container">
                          <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                          <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                        
                        </div>
                        <div className="button-container">
                            <button  className={classNames('', {'disable' : this.state.previousButtonDisabled})}
                             id="previous-button" onClick={this.handleButtonClick}> 
                            <p> <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon> Previous</p>
                            </button>
                            <button   className={classNames('', {'disable' : this.state.nextButtonDisabled})}
                            id="next-button" onClick={this.handleButtonClick}> 
                            <p> Next  <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon> </p>
                            </button>
                            <button id = "quit-button" onClick={this.handleButtonClick}>  Quit
                            </button>
                        </div>
                        
                </div>
            </Fragment>
        )
    }
}

export default Cstructure
