import React, { Component } from 'react'
import {Tab , Tabs , TabList , TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import {Link} from 'react-router-dom';


export class Ccourse extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col">
                       
                      
                        <Tabs>
    <TabList>
      <Tab >All</Tab>
      <Tab >Beginner</Tab>
      <Tab >Intermediate</Tab>
      <Tab >Proffesional</Tab>
    </TabList>
 
    <TabPanel>
      <div className="Quiz-grid">
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Data Types, Operators and Expressions in C
                                          Level-1</h3>
                 
                       <Link to='/C-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Control Flow Statements in C
                                         Level-1</h3>
                 
                       <Link to='/C/cf-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-1</h3>
                 
                       <Link to='/C/function-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Program Structure Level-1</h3>
                 
                       <Link to='/C/ps-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Pointers and Arrays Level-1</h3>
                 
                       <Link to='/C/p-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Structures, Unions & Bit-Fields in C
                       Level-1</h3>
                 
                       <Link to='/C/su-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>

          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Input & Output – 1
                       Level-1</h3>
                 
                       <Link to='/C/io-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="Quiz-grid">
    <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Data Types, Operators and Expressions in C
                    Level-1</h3>
                 
                       <Link to='/C-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Control Flow Statements in C 
                   Level-1</h3>
                 
                       <Link to='/C/cf-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
       
         
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Functions Level-1</h3>
                 
                       <Link to='/C/function-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Program Structure Level-1</h3>
                 
                       <Link to='/C/ps-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Pointers and Arrays Level-1</h3>
                 
                       <Link to='/C/p-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Structures, Unions & Bit-Fields in C
                       Level-1</h3>
                 
                       <Link to='/C/su-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>
          <div className="Quiz-list">
               <div className="quiz-box">
                   <h3 className="py">Input & Output 
                       Level-1</h3>
                 
                       <Link to='/C/io-instruction' className="btnstart">Start!</Link>
                  
               </div>
          </div>

      </div>
    </TabPanel>
    <TabPanel>
   
    </TabPanel>
  </Tabs>
                     </div>

                   
                    </div>
                  
                </div>
            
               
            </div>
       
        )
    }
}

export default Ccourse
